'use strict';

describe('Controller: DirectiveswithexternalizedbehaviourCtrl', function () {

  // load the controller's module
  beforeEach(module('directivesDemoApp'));

  var DirectiveswithexternalizedbehaviourCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectiveswithexternalizedbehaviourCtrl = $controller('DirectiveswithexternalizedbehaviourCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectiveswithexternalizedbehaviourCtrl.awesomeThings.length).toBe(3);
  });
});
