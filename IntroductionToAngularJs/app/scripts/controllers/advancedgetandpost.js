'use strict';

angular.module('movieManiaApplication')
  .controller('AdvancedgetandpostCtrl', [ '$scope','$http' , function ($scope,$http) {


  	$http.get('https://api.github.com/search/repositories', 

  	{
  		//This object will hold the configuration

  		//Inside the configuration object we have a params object.
  		params : {
  			q : 'AngularJs',
  			sort : 'Updated',
  			order : 'dec'
  		}

  	}).success(function(data) {
  		console.log('Success : ' + data.items.length );
  		$scope.items = data.items;
  	}).error(function(data,status,header,config) {

  	});





  }]);
