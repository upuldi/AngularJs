'use strict';

describe('Controller: FactorydemoCtrl', function () {

  // load the controller's module
  beforeEach(module('serviceDemoApp'));

  var FactorydemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FactorydemoCtrl = $controller('FactorydemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FactorydemoCtrl.awesomeThings.length).toBe(3);
  });
});
