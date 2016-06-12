'use strict';

describe('Controller: DirectiveswithdommanipulationdemoCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesDemoApp'));

  var DirectiveswithdommanipulationdemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectiveswithdommanipulationdemoCtrl = $controller('DirectiveswithdommanipulationdemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectiveswithdommanipulationdemoCtrl.awesomeThings.length).toBe(3);
  });
});
