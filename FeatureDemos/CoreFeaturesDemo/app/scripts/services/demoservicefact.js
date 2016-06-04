'use strict';

/**
 * @ngdoc service
 * @name coreFeaturesDemoAppApp.demoservicefact
 * @description
 * # demoservicefact
 * Factory in the coreFeaturesDemoAppApp.
 */
angular.module('coreFeaturesDemoAppApp')
    .factory('demoservicefact', function($http) {


        return {
            loadData: function() {
                var url = 'http://localhost:9000/data/response.json';
                return $http.get(url, {});
            },
            //Here success and error parameters are functions.
            loadDataWithFunction: function(success, error) {
                var url = 'http://localhost:9000/data/response.json';
                return $http.get(url, {}).then(function(response) {
                    console.log('Factory specific logic .....');
                    console.log('Response Status : ' + response.status);
                    console.log('Response StatusText : ' + response.statusText);
                    // console.log('Response headers : ' + response.headers);
                    console.log('Response config : ' + response.config);

                    //Executing controller specific logic
                    success(response);
                }, function(response) {

                });
            }
        };
    });
