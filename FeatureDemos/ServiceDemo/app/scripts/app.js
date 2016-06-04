'use strict';

/**
 * @ngdoc overview
 * @name serviceDemoApp
 * @description
 * # serviceDemoApp
 *
 * Main module of the application.
 */
angular
    .module('serviceDemoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/factoryDemo', {
                templateUrl: 'views/factorydemo.html',
                controller: 'FactorydemoCtrl',
                controllerAs: 'factoryDemo'
            })
            .when('/myServiceDemo', {
                templateUrl: 'views/myservicedemo.html',
                controller: 'MyservicedemoCtrl',
                controllerAs: 'myServiceDemo'
            })
            .when('/providerDemo', {
                templateUrl: 'views/providerdemo.html',
                controller: 'ProviderdemoCtrl',
                controllerAs: 'providerDemo'
            })
            .when('/valueDemo', {
                templateUrl: 'views/valuedemo.html',
                controller: 'ValuedemoCtrl',
                controllerAs: 'valueDemo'
            })
            .otherwise({
                redirectTo: '/'
            });

        // myprovider.setGreeting("Hello world! I'm shouting from a provider!");

    }).controller('RouteActiveCtrl', function($scope, $location) {

        $scope.isActive = function(route) {
            return route === $location.path();
        }

    });
