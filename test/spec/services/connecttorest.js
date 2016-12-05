'use strict';

describe('Service: connectToRest', function () {

  // load the service's module
  beforeEach(module('angresexaApp'));

  // instantiate service
  var connectToRest;
  beforeEach(inject(function (_connectToRest_) {
    connectToRest = _connectToRest_;
  }));

  it('should do something', function () {
    expect(!!connectToRest).toBe(true);
  });

});
