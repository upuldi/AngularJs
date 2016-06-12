'use strict';

describe('Directive: directiveWithExtBehaviour', function () {

  // load the directive's module
  beforeEach(module('directivesDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<directive-with-ext-behaviour></directive-with-ext-behaviour>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the directiveWithExtBehaviour directive');
  }));
});
