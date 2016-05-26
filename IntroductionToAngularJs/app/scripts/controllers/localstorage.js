'use strict';


angular.module('movieManiaApplication')
  .controller('LocalstorageCtrl', ['$scope','LocalSt', function ($scope,LocalSt) {

  	$scope.movie = {};


  	var loadMoviesFromService = function() {
	  	LocalSt.load().then(function(data){
	  		$scope.movies = data;
	  	});
  	};

  	loadMoviesFromService();


  	$scope.addMovie = function() {
  		LocalSt.add($scope.movie);
  		loadMoviesFromService();

  	}






    

  }]);
