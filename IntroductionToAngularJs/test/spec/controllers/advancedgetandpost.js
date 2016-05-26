'use strict';

describe('Controller: AdvancedgetandpostCtrl', function () {

  // load the controller's module
  beforeEach(module('myFirstYomanAngularProjApp'));

  var AdvancedgetandpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdvancedgetandpostCtrl = $controller('AdvancedgetandpostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdvancedgetandpostCtrl.awesomeThings.length).toBe(3);
  });
});
