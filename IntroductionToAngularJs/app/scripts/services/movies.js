'use strict';

angular.module('movieManiaApplication')
    .factory('Movies', function($http) {

        return {
            load: function() {
                return $http.get('/stubs/movies.json');
            },
            find: function(id, movies) {
                for (var i in movies) {
                    var movie = movies[i];
                    if (id === movie.id) {
                        return movie;
                    }
                }
            },
            search : function(title){

              var DUCK_DUCK_GO_URL = 'http://api.duckduckgo.com'
              return $http.jsonp(DUCK_DUCK_GO_URL,{
                  params : {
                    q :  title + ' movie',
                    format: 'json',
                    callback: 'JSON_CALLBACK' 
                  }
              });

            }
        };

    });