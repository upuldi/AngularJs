'use strict';

describe('Controller: MyservicedemoCtrl', function () {

  // load the controller's module
  beforeEach(module('serviceDemoApp'));

  var MyservicedemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyservicedemoCtrl = $controller('MyservicedemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyservicedemoCtrl.awesomeThings.length).toBe(3);
  });
});
