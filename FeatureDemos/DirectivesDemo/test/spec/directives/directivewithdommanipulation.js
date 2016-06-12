'use strict';

describe('Directive: directiveWithDomManipulation', function () {

  // load the directive's module
  beforeEach(module('directivesDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<directive-with-dom-manipulation></directive-with-dom-manipulation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the directiveWithDomManipulation directive');
  }));
});
