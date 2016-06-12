'use strict';


angular.module('directivesDemoApp')
    .controller('DirectiveswithexternalizedbehaviourCtrl', ['$scope', '$timeout', function($scope,$timeout) {

        $scope.name = 'Upul';
        $scope.message = 'initial message';

        $scope.closeDialog =  function(message) {
            $scope.message = message;
            $scope.dialogIsHidden = true;
            $timeout(function() {
                $scope.message = '';
                $scope.dialogIsHidden = false;
            }, 2000);
        };




    }]);
