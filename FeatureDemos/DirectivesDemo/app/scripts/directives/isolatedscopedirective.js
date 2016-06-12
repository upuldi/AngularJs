'use strict';

angular.module('directivesDemoApp')
  .directive('isolatedScopeDirective', function () {
    return {
      restrict: 'E',
      scope : {
      	data :  '=value'
      },
      templateUrl: 'views/isolatedScope/templates/isolatedScopeDirectiveTemplate.html'
    };
  });
