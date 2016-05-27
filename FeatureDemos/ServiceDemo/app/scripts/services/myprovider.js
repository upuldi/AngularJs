'use strict';


angular.module('serviceDemoApp')
  .provider('myprovider', function () {

    var greeting;
    this.setGreeting = function(greet) {
        this.greeting = greet;
        console.log('Greeting is : ' + greet);
    }

    //Factory Function
    this.$get = function($rootScope) {

      return {
        'sayGreet' : function() {
          if (greeting != null) {
              alert(greeting);
          }
        }
      }

    };
  });
