angular.module('lab1c',  [])
.controller('lab1cController', function($scope){

	$scope.reset = function(){
		$scope.link_image = ('http://dummyimage.com/200x200/000/ff3300/333');
		$scope.changeLinkImage = ('http://dummyimage.com/200x200/000/34ffddaa');
	}

              
	$scope.reset();
});