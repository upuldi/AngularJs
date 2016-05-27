'use strict';

describe('Controller: ValuedemoCtrl', function () {

  // load the controller's module
  beforeEach(module('serviceDemoApp'));

  var ValuedemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValuedemoCtrl = $controller('ValuedemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValuedemoCtrl.awesomeThings.length).toBe(3);
  });
});
