angular.module('movieManiaApplication')
    .controller('MovieCtrl', ['$scope', '$routeParams','Movies', function($scope, $routeParams, Movies) {

            var selectMovieById = function(movieId) {

                Movies.load().success(function(data) {
                    console.debug(data);
                    var moviesList = data;

                    $scope.movie = Movies.find(movieId, data);
                    $scope.loading = true;

                    Movies.search($scope.movie.title).success(function(data){
                    	$scope.movie.abstract = data.Abstract;
                    	$scope.movie.abstractSource = data.AbstractSource;
                    }).error(function(data,status){

                    }).finally(function() {
                    	$scope.loading = false;
                    });
                });

        };


        console.debug('This is a single movie controller.....');
        console.debug('routeParams.id : ' + $routeParams.id);
        console.debug('routeParams.slug : ' + $routeParams.slug);

        //Always names comes in string..
        var movieId = parseInt($routeParams.id);
        selectMovieById(movieId);


    }]);