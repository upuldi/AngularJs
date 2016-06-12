'use strict';

describe('Directive: isolatedScopeDirective', function () {

  // load the directive's module
  beforeEach(module('directivesDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<isolated-scope-directive></isolated-scope-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the isolatedScopeDirective directive');
  }));
});
