'use strict';

describe('Controller: ServicedemoCtrl', function () {

  // load the controller's module
  beforeEach(module('coreFeaturesDemoAppApp'));

  var ServicedemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicedemoCtrl = $controller('ServicedemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServicedemoCtrl.awesomeThings.length).toBe(3);
  });
});
