'use strict';

describe('Filter: myCustomFilter', function () {

  // load the filter's module
  beforeEach(module('coreFeaturesDemoAppApp'));

  // initialize a new instance of the filter before each test
  var myCustomFilter;
  beforeEach(inject(function ($filter) {
    myCustomFilter = $filter('myCustomFilter');
  }));

  it('should return the input prefixed with "myCustomFilter filter:"', function () {
    var text = 'angularjs';
    expect(myCustomFilter(text)).toBe('myCustomFilter filter: ' + text);
  });

});
