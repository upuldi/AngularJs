'use strict';

describe('Controller: ProviderdemoCtrl', function () {

  // load the controller's module
  beforeEach(module('serviceDemoApp'));

  var ProviderdemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProviderdemoCtrl = $controller('ProviderdemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProviderdemoCtrl.awesomeThings.length).toBe(3);
  });
});
