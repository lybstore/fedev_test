'use strict'


var recommendedItemsCtrl = function() {

};

angular.module('recommendedItemsComponent', [])
    .controller('recommendedItemsCtrl',recommendedItemsCtrl)
    .directive('recommendedItems', function(){
      // Runs during compile
      return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            items : '='
        },
        controller: "recommendedItemsCtrl as ctrl",
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: 'app/components/recommend/template.html',
         bindToController : true
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      };
    });
