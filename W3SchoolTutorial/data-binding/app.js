var module = angular.module('myDataBindingDemoModule',[]);
module.controller('myChangeNameController',[ '$scope', function($scope) {
	$scope.firstName = 'Default Name : Click Here to Change the Name...';
	$scope.changeName = function() {
		$scope.firstName = 'Changed Name';
	}
}]);
