'use strict';


angular.module('coreFeaturesDemoAppApp')
  .controller('EventsonscopesCtrl', [ '$scope', function ($scope) {

  	$scope.$on('MyEvent',function(){
  		console.log('Event occurred.....');
  	});

  }]);
