'use strict';

describe('Controller: DirectiveswitheventlistenersCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesDemoApp'));

  var DirectiveswitheventlistenersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectiveswitheventlistenersCtrl = $controller('DirectiveswitheventlistenersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectiveswitheventlistenersCtrl.awesomeThings.length).toBe(3);
  });
});
