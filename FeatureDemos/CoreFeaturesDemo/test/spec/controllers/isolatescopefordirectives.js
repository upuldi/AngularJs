'use strict';

describe('Controller: IsolatescopefordirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('coreFeaturesDemoAppApp'));

  var IsolatescopefordirectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IsolatescopefordirectivesCtrl = $controller('IsolatescopefordirectivesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IsolatescopefordirectivesCtrl.awesomeThings.length).toBe(3);
  });
});
