'use strict';

angular.module('directivesDemoApp')
  .directive('firstDirective', function () {
    return {
      //template: '<div>You Can use either template or link</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('This is my first directive....');
      }
    };
  });
