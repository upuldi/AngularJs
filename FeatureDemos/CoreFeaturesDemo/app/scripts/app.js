'use strict';



/**
 * @ngdoc overview
 * @name coreFeaturesDemoAppApp
 * @description
 * # coreFeaturesDemoAppApp
 *
 * Main module of the application.
 */
angular
  .module('coreFeaturesDemoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/filterDemo', {
        templateUrl: 'views/filterdemo.html',
        controller: 'FilterdemoCtrl',
        controllerAs: 'filterDemo'
      })
      .when('/serviceDemo', {
        templateUrl: 'views/servicedemo.html',
        controller: 'ServicedemoCtrl',
        controllerAs: 'serviceDemo'
      })
      .when('/EventsOnScopes', {
        templateUrl: 'views/eventsonscopes.html',
        controller: 'EventsonscopesCtrl',
        controllerAs: 'EventsOnScopes'
      })
      .when('/isolateScopeForDirectives', {
        templateUrl: 'views/isolatescopefordirectives.html',
        controller: 'IsolatescopefordirectivesCtrl',
        controllerAs: 'isolateScopeForDirectives'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('RouteActiveCtrl',function($scope,$location) {

      $scope.isActive = function(route) {
          return route === $location.path();
      };
    
  });

