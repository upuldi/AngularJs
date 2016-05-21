var module = angular.module('MyModelDirectiveDemoModule',[]);
module.controller('aControllerForModelBinding',['$scope',function($scope) {

	$scope.firstName = 'Upul';
	$scope.lastName = 'Doluweera';

}])