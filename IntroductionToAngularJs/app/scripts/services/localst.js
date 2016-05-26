'use strict';

angular.module('movieManiaApplication')
  .factory('LocalSt', function ($q) {

    var key = 'moviemania.movies';

    function loadMovies() {
      return JSON.parse(localStorage.getItem(key)) || [];;
    }

    return {

      load: function () {
        //Converting get movies synchronous call into an asynchronous call
        return $q.when(loadMovies());
      },

      add : function(obj) {

        var movies = loadMovies();
        obj.id = movies.length;
        obj.slug = obj.title.toLowerCase().replace(/ /g,'-');
        movies.push(obj);
        localStorage.setItem(key,JSON.stringify(movies));
      },

      find : function(id) {

        var foundMovie;
        var movies = loadMovies();
        for (var i in movies) {
          var movie = movies[i];
          if (movie.id === id) {
            foundMovie = movie;
            break;

          }
        }
        return $q.when(foundMovie);
      }




    };
  });
