'use strict';

angular.module('serviceDemoApp')
  .factory('myfactory', function () {

    //Common logic goes here


    // Public API here, API Should be in the return type
    return {
      loadValue : function () {
        console.log('Inside the factory public API.....')
        return 'A successfull message returned from the factory API methods...';
      },
      writeValue : function(someObjInput) {
        console.log('A value written inside the factory....' + someObjInput);
      }
    };
  });
