'use strict';

describe('Service: LocalSt', function () {

  // load the service's module
  beforeEach(module('myFirstYomanAngularProjApp'));

  // instantiate service
  var LocalSt;
  beforeEach(inject(function (_LocalSt_) {
    LocalSt = _LocalSt_;
  }));

  it('should do something', function () {
    expect(!!LocalSt).toBe(true);
  });

});
