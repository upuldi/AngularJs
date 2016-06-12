'use strict';


angular.module('directivesDemoApp')
  .directive('directiveWithExtBehaviour', function () {
    return {
      templateUrl: 'views/templates/directiveWithExtBehavior.html',
      restrict: 'E',
      transclude: true,
      scope: {
        'close': '&onClickClose' //Binding on-click-close into directives close
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
