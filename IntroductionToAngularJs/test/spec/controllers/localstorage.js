'use strict';

describe('Controller: LocalstorageCtrl', function () {

  // load the controller's module
  beforeEach(module('myFirstYomanAngularProjApp'));

  var LocalstorageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocalstorageCtrl = $controller('LocalstorageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LocalstorageCtrl.awesomeThings.length).toBe(3);
  });
});
