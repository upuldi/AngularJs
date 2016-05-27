'use strict';

describe('Service: valueServ', function () {

  // load the service's module
  beforeEach(module('serviceDemoApp'));

  // instantiate service
  var valueServ;
  beforeEach(inject(function (_valueServ_) {
    valueServ = _valueServ_;
  }));

  it('should do something', function () {
    expect(!!valueServ).toBe(true);
  });

});
