'use strict';

describe('Controller: DirectivewrappingCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesDemoApp'));

  var DirectivewrappingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectivewrappingCtrl = $controller('DirectivewrappingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectivewrappingCtrl.awesomeThings.length).toBe(3);
  });
});
