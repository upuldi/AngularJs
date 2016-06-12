'use strict';


angular.module('directivesDemoApp')
    .controller('IsolatedscoperoutedemoCtrl', function($scope) {

        var vm = this;
        var someObj = { name: 'Upul Doluweera', age: '31' };
        vm.csVMObj = someObj;

    });
