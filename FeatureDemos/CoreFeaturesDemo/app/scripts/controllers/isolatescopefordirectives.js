'use strict';

angular.module('coreFeaturesDemoAppApp')
    .controller('IsolatescopefordirectivesCtrl', function($scope) {

        var vm = this;
        vm.onePersonFromScope = { name: 'Upul Doluweera', age: '31', state: 'NSW' };
        vm.message = 'Hello...';

    }).directive('myDirective', function() {

        return {
            restrict: 'E',
            //Here directive restruct the scope to only have a value called data.
            //So this scope will be an isolated scope and will not contains anything from the scope from controller
            scope: {
                data : '=person'
            },
            templateUrl: 'views/myDirectiveTemplate.html'
        };
    });


