'use strict';

describe('Controller: DirectiveswithexternalizedtablesCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesDemoApp'));

  var DirectiveswithexternalizedtablesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectiveswithexternalizedtablesCtrl = $controller('DirectiveswithexternalizedtablesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectiveswithexternalizedtablesCtrl.awesomeThings.length).toBe(3);
  });
});
