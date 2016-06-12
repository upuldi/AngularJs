'use strict';

describe('Controller: FirstdirectivedemoCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesDemoApp'));

  var FirstdirectivedemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirstdirectivedemoCtrl = $controller('FirstdirectivedemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FirstdirectivedemoCtrl.awesomeThings.length).toBe(3);
  });
});
