'use strict';

describe('Directive: firstDirective', function () {

  // load the directive's module
  beforeEach(module('directivesDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<first-directive></first-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the firstDirective directive');
  }));
});
