angular.module('lab1a',  [])
.controller('formController', function($scope){

	$scope.reset = function(){
		$scope.name = 'Nombre Completo';
		$scope.id = 'Direccion',
		$scope.profession = "Profesión";
		$scope.salary = "15200000";
		$scope.phone = "Telefono";
		$scope.andress = "Direccion";
	}

	$scope.reset();
});