'use strict';

angular.module('coreFeaturesDemoAppApp')
  .filter('myCustomFilter', function () {
    return function (input) {
      return '***[' + input + ']***' ;
    };
  });
