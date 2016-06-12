'use strict';

angular.module('directivesDemoApp')
  .directive('directiveWrappingWithTransclude', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'views/templates/directiveWrappingWithTransclude.html',
      link: function postLink(scope) {
      	//This scope variable will not be overridden here as Transclude is set to be true
      	scope.name = 'Doluweera';
      }
    };
  });
