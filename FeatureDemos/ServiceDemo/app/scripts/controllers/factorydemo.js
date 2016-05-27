'use strict';

angular.module('serviceDemoApp')
  .controller('FactorydemoCtrl', function (myfactory) {

  	var vm = this;
  	vm.message = myfactory.loadValue();


  });
