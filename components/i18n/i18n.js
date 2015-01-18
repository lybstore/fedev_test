angular.module('translationModule',[])

    .provider('translationConf', function() {

        var serv = this;
        serv.availableMessages;
        serv.useLang;

        serv.defaultLang = function(lang) {
            serv.useLang = lang;
        };

        serv.translations = function(translationsObj) {
            serv.availableLanguages = translationsObj
        }

        serv.$get = function() {
            return serv.availableLanguages[serv.useLang]
        }
    })

    .controller('translationCtrl', function($element, translationConf) {

        var ctrl = this;

        ctrl.getMessage = function(key) {
            return translationConf[key]
        };

        ctrl.getMessage(ctrl.translation)

    })

    .directive('translation', function(){
      // Runs during compile
      return {
        scope: {translation: '='}, // {} = isolate, true = child, false/undefined = no change
        controller: 'translationCtrl as ctrl',
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        bindToController : true
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      };
    })

    .filter('translation', ['translationConf',function(translationConf) {
        return function(input) {
            return translationConf[input]
        };
    }])
