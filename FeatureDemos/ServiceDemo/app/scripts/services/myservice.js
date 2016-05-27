'use strict';

angular.module('serviceDemoApp')
  .service('myservice', function () {

  	//Services Use with This

  	this.loadData = function() {
  		return "Data was loaded from the service";
  	};

  	this.saveData = function(data) {
  		console.log(" Message  " + data + " is being saved....");
  	}

  



  });
