'use strict';


angular.module('coreFeaturesDemoAppApp')
    .controller('FilterdemoCtrl', function() {

    	var vm =  this;

        var persons = [
            {
                name: "Upul",
                age: 31
            },
            {
                name: "John",
                age: 35
            },
            {
                name: "Melon",
                age: 28
            },
            {
                name: "Mike",
                age: 45
            },
            {
                name: "Isek",
                age: 12
            },
            {
                name: "Ureka",
                age: 34
            },
            {
                name: "Rose",
                age: 25
            },
            {
                name: "Andy",
                age: 40
            },
            {
                name: "Rube",
                age: 13
            },
            {
                name: "Taniya",
                age: 25
            }

        ];
        vm.persons = persons;


    });
