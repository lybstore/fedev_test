'use strict';
	//defines all the dependencies of the application in general
	 angular
		.module("uoApp", ['ui.router','translationModule', 'itemsModule'])
		.constant('currencies', {'en': "USD", 'es': "€"})
		 .config(['$urlRouterProvider', '$stateProvider','translationConfProvider', function($urlRouterProvider, $stateProvider, translationConfProvider) {
			 $urlRouterProvider.otherwise('/');
			 $stateProvider
				 .state('home' , {
					 url: '/',
					 templateUrl: 'app/templates/home.html',
					 controller:  'itemCtrl as ctrl'
				 });

			 translationConfProvider.defaultLang('es');
			 translationConfProvider.translations(
				 {
					 'en' : {'recommendation' : 'If you like this, you might be into these'},
					 'es': {'recommendation': 'Si te gusto esto, puede interesarte'}

				 })


		 }]);
