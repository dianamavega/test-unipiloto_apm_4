angular.module('lab1b',  [])
.controller('lab1bController', function($scope){

	$scope.reset = function(){
		$scope.name = 'Nombre Completo';
		$scope.id = '48956235';
		$scope.profession = "9556623";
		$scope.salary = "15200000";
		$scope.phone = "Telefono";
		$scope.andress = "Direccion";
		$scope.dress = "Direccion";
		$scope.ress = "Direccion";
		$scope.ess = "Direccion";
	}

	$scope.reset();
});