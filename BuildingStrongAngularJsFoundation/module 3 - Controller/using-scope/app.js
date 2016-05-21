angular.module('MyAppModule',[])
.controller("MyControllerWithScope",['$scope', function($scope){
	
	//This is how do you set values to the scope 
	$scope.someVariable = 'Some Value Setted to the scope inside the controller...';
	$scope.anotherValue = 'Another value set to the scope inside the controller....';

	//This is how you set a function to the scope, so it can be called inside the view

	$scope.someFunction = function () {
		return 'Some Function was invoked inside the controller.....';
	};

}]);