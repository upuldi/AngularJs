'use strict';

/**
 * @ngdoc function
 * @name movieManiaApplication.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the movieManiaApplication
 */
angular.module('movieManiaApplication')
  .controller('HomeCtrl', ['$scope', '$location', '$http', function ($scope, $location,$http) {

      /* Get movies information from the stub */
      $http.get('/stubs/movies.json',{}).success(function (data) {
          console.debug(data);
          //Setting the slug
          for (var i in data) {
            data[i].slug = data[i].title.toLowerCase().replace(/ /g,'-');
          }
          $scope.movies = data;

      }).error( function(data,status,headers,config) {
          console.log(data,status,headers,config);

          if (status == 404 ) {
            window.alert("404 Error occurred !")
          } 

      });

      $scope.closed = false;

      /*This function is used to rundomly select a movie..*/
      $scope.selectRandomMovie = function() {
        console.debug('Start of the funtion');
        var index = Math.floor(Math.random()* $scope.movies.length);
        var movie = $scope.movies[index];
        var url =  '/movie/'+ movie.id + '/' + movie.slug; 
        console.debug('URL :'  + url);

        $location.url(url);
      };



  }])
.controller('AddMovieController',['$scope',function($scope){


    //Define a movie object in the scope.
    $scope.movie = {
      title : '',
      category : '',
      image : '',
      description : ''
    };


    $scope.validateTitle = function() {
        if ($scope.newMovieTitle.length > 0) {
          console.debug('Valid Movie Title : ' + $scope.newMovieTitle);
        } else {
          window.alert('Add a vlid movie title');
        }
    };

    $scope.checkCategorySelected = function() {
        if ($scope.newMovieCategory == '') {
          console.debug('Invalid Movie Category');
          window.alert('Select a movie category..');
        }
    };

    $scope.checkDescription = function() {
        if ($scope.newMovieDescription.length > 0) {
          console.debug('Valid description');
        } else {
          window.alert("Add a valid description");
        }
    };

    $scope.addMovie = function() {
        console.debug("Inside add movie")
        $scope.movies.push(angular.copy($scope.movie));
        $scope.movie=null;
    };



}]);

