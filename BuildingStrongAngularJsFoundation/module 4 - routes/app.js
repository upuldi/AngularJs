angular.module('MyAppWithRoutes',['ngRoute']).

//Define a config block

config(['$routeProvider', function($routeProvider){

	//Defines the routing mechanism

	$routeProvider.when('/', {
		controller : 'homeCtrl',
		templateUrl : './common.html'
	});

	//For each new route you have to define a new controller
	$routeProvider.when('/specificPage', {
		controller : 'specificPageCtrl',
		templateUrl : './common.html'
	});


}]).


controller('homeCtrl', [ '$scope', function($scope){
	$scope.title = 'Home Page';
	$scope.description = function() {
		return 'This is the home section of the application......'
	};

}]).

controller('specificPageCtrl', [ '$scope', function($scope){
	$scope.title = 'Specific Page';
	$scope.description = function() {
		return 'This is a specific page of the application......'
	};

}]);