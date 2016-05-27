'use strict';


angular.module('serviceDemoApp')
  .controller('ValuedemoCtrl', function (valueServ) {

  		var vm = this;
  		vm.message = valueServ;


  });
