'use strict';

angular.module('serviceDemoApp')
  .controller('MyservicedemoCtrl', function (myservice) {

  	var vm = this;

  	vm.message = myservice.loadData();

  	myservice.saveData('Some Message From The controller');



  });
