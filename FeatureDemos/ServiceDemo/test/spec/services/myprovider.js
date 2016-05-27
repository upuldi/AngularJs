'use strict';

describe('Service: myprovider', function () {

  // instantiate service
  var myprovider,
    init = function () {
      inject(function (_myprovider_) {
        myprovider = _myprovider_;
      });
    };

  // load the service's module
  beforeEach(module('serviceDemoApp'));

  it('should do something', function () {
    init();

    expect(!!myprovider).toBe(true);
  });

  it('should be configurable', function () {
    module(function (myproviderProvider) {
      myproviderProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(myprovider.greet()).toEqual('Lorem ipsum');
  });

});
