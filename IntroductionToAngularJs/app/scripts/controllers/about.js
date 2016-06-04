'use strict';

/**
 * @ngdoc function
 * @name movieManiaApplication.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieManiaApplication
 */
angular.module('movieManiaApplication')
  .controller('AboutCtrl', ['$scope', function ($scope) {

  	var vm = this;
  	vm.title = 'Title in View Model';


    $scope.title = 'About Us Page';
  }]);
