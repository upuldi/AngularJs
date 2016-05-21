'use strict';

/**
 * @ngdoc overview
 * @name myFirstYomanAngularProjApp
 * @description
 * # myFirstYomanAngularProjApp
 *
 * Main module of the application.
 */
angular
  .module('myFirstYomanAngularProjApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
