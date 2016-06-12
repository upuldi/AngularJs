'use strict';

describe('Directive: dirWithExtTables', function () {

  // load the directive's module
  beforeEach(module('directivesDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dir-with-ext-tables></dir-with-ext-tables>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dirWithExtTables directive');
  }));
});
