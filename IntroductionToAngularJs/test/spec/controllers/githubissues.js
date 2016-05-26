'use strict';

describe('Controller: GithubissuesCtrl', function () {

  // load the controller's module
  beforeEach(module('myFirstYomanAngularProjApp'));

  var GithubissuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GithubissuesCtrl = $controller('GithubissuesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GithubissuesCtrl.awesomeThings.length).toBe(3);
  });
});
