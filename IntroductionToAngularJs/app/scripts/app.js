'use strict';

/**
 * @ngdoc overview
 * @name movieManiaApplication
 * @description
 * # movieManiaApplication
 *
 * Main module of the application.
 */
angular
  .module('movieManiaApplication', [
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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/movie/:id/:slug', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
      })
      .when('/comingsoon', {
        templateUrl: 'views/comingsoon.html',
        controller: 'ComingsoonCtrl',
        controllerAs: 'comingsoon'
      })
      .when('/advancedGetAndPost', {
        templateUrl: 'views/advancedgetandpost.html',
        controller: 'AdvancedgetandpostCtrl',
        controllerAs: 'advancedGetAndPost'
      })
      .when('/githubissues', {
        templateUrl: 'views/githubissues.html',
        controller: 'GithubissuesCtrl',
        controllerAs: 'githubissues'
      })
      .when('/localStorage', {
        templateUrl: 'views/localstorage.html',
        controller: 'LocalstorageCtrl',
        controllerAs: 'localStorage'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
