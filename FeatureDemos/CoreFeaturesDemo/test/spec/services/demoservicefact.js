'use strict';

describe('Service: demoservicefact', function () {

  // load the service's module
  beforeEach(module('coreFeaturesDemoAppApp'));

  // instantiate service
  var demoservicefact;
  beforeEach(inject(function (_demoservicefact_) {
    demoservicefact = _demoservicefact_;
  }));

  it('should do something', function () {
    expect(!!demoservicefact).toBe(true);
  });

});
