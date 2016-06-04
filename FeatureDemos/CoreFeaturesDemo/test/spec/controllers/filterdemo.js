'use strict';

describe('Controller: FilterdemoCtrl', function () {

  // load the controller's module
  beforeEach(module('coreFeaturesDemoAppApp'));

  var FilterdemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilterdemoCtrl = $controller('FilterdemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FilterdemoCtrl.awesomeThings.length).toBe(3);
  });
});
