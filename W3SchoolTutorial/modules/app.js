var module = angular.module('MyAppModule',[]);

// Defining a controller
module.controller('MyController', [ '$scope', function($scope){
	$scope.firstName = "Upul";
	$scope.lastName = "Doluweera";
}]);

// Defining a directive - REMEMBER that the Directive name inside the module and in the view has a naming convention, my-directory-name and myDirectoryName.
module.directive('myFirstDirective',function(){
	return  { template : '<b>This was created inside a <I>directive</I>.....</b>' };
});