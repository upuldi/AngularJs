'use strict';

angular
    .module('directivesDemoApp', [
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
            .when('/firstDirectiveDemo', {
              templateUrl: 'views/firstdirectivedemo.html',
              controller: 'FirstdirectivedemoCtrl',
              controllerAs: 'firstDirectiveDemo'
            })
            .when('/isolatedScopeRouteDemo', {
              templateUrl: 'views/isolatedScope/isolatedscoperoutedemo.html',
              controller: 'IsolatedscoperoutedemoCtrl',
              controllerAs: 'isoDirCtrl'
            })
            .when('/DirectivesWithDomManipulationDemo', {
              templateUrl: 'views/directiveswithdommanipulationdemo.html',
              controller: 'DirectiveswithdommanipulationdemoCtrl',
              controllerAs: 'DirectivesWithDomManipulationDemo'
            })
            .when('/directiveWrapping', {
              templateUrl: 'views/directivewrapping.html',
              controller: 'DirectivewrappingCtrl',
              controllerAs: 'directiveWrapping'
            })
            .when('/DirectivesWithExternalizedBehaviour', {
              templateUrl: 'views/directiveswithexternalizedbehaviour.html',
              controller: 'DirectiveswithexternalizedbehaviourCtrl',
              controllerAs: 'DirectivesWithExternalizedBehaviour'
            })
            .when('/directivesWithExternalizedTables', {
              templateUrl: 'views/directiveswithexternalizedtables.html',
              controller: 'DirectiveswithexternalizedtablesCtrl',
              controllerAs: 'directivesWithExternalizedTables'
            })
            .when('/DirectivesWithEventListeners', {
              templateUrl: 'views/directiveswitheventlisteners.html',
              controller: 'DirectiveswitheventlistenersCtrl',
              controllerAs: 'DirectivesWithEventListeners'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
