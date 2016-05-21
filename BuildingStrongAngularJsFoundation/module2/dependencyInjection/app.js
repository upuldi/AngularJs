var module = angular.module('MyAppModule',[]);

//This is how you add a constant into the module.
module.constant('VERSION','1.0');

//This is how you define a run block in a module, this will get executed after all the module are loaded.

module.run(['VERSION',function(VERSION) {
	alert('Version is : ' + VERSION);
}]);

//Also you can pass the root scope into a module
angular.module('someOtherModule',[]).run(['$rootScope', function($rootScope){
	alert($rootScope);

}]);