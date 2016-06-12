'use strict';

describe('Controller: IsolatedscoperoutedemoCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesDemoApp'));

  var IsolatedscoperoutedemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IsolatedscoperoutedemoCtrl = $controller('IsolatedscoperoutedemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IsolatedscoperoutedemoCtrl.awesomeThings.length).toBe(3);
  });
});
