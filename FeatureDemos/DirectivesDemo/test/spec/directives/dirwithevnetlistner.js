'use strict';

describe('Directive: dirWithEvnetListner', function () {

  // load the directive's module
  beforeEach(module('directivesDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dir-with-evnet-listner></dir-with-evnet-listner>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dirWithEvnetListner directive');
  }));
});
