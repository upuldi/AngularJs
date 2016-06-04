'use strict';

/**
 * @ngdoc function
 * @name coreFeaturesDemoAppApp.controller:ServicedemoCtrl
 * @description
 * # ServicedemoCtrl
 * Controller of the coreFeaturesDemoAppApp
 */
angular.module('coreFeaturesDemoAppApp')
    .controller('ServicedemoCtrl', function(demoservicefact) {

        var vm = this;

        //Here we are passing functions to be executed after retriving data 
        var res = demoservicefact.loadDataWithFunction(function(response){
        	console.log('Controller Specific Success Logic ......');
        	 var empResponse = response.data.employees;
        	 vm.employees = empResponse;

        },function(response){
        	console.log('Controller Specific Error Logic ......');
        });


    });
