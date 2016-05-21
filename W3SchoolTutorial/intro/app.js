var module = angular.module("myModule",[]);

// Add a controller to the model
module.controller("myController",['$scope',function($scope) {
	$scope.someVariableInScope = 'Some Value In Scope'; 
}]);

// Add another controller to the model
module.controller('anotherController', ['$scope',function($scope) {
	$scope.anotherValueToScope = 'Another Value To Scope';
}]);