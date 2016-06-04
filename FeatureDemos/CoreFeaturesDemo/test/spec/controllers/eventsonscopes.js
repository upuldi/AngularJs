'use strict';

describe('Controller: EventsonscopesCtrl', function () {

  // load the controller's module
  beforeEach(module('coreFeaturesDemoAppApp'));

  var EventsonscopesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsonscopesCtrl = $controller('EventsonscopesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventsonscopesCtrl.awesomeThings.length).toBe(3);
  });
});
