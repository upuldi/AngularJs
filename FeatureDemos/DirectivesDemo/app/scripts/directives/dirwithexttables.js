'use strict';

/**
 * @ngdoc directive
 * @name directivesDemoApp.directive:dirWithExtTables
 * @description
 * # dirWithExtTables
 */
angular.module('directivesDemoApp')
  .directive('dirWithExtTables', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dirWithExtTables directive');
      }
    };
  });
