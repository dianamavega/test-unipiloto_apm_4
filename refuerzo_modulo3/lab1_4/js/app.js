angular.module('lab1d', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/lab1a', {
	    templateUrl : "views/mobile.html",
	    controller: 'mobileController'
	})

	.when('/lab1b', {
		templateUrl: "views/smartphone.html",
		controller: 'smartphoneController'
	});

	.when('/lab1c', {
		templateUrl: "views/smartphone.html",
		controller: 'smartphoneController'
	});
	
 }]);