angular.module('initial_spi.controllers', [])

.controller('mobileController', function($scope, $http){
	              	var url = "js/data_mobile.json";
              	$http.get(url).success(function(response){

              		console.log(response);
              		
              		$scope.companys = response;
              	});
})

.controller('smartphoneController', function($scope, $http){
	              	var url = "js/data_smartphone.json";
              	$http.get(url).success(function(response){

              		console.log(response);
              		
              		$scope.mobiles = response;
              	});
})