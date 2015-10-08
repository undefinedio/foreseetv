'use strict';

describe('Service: preLoaderService', function () {

  // load the service's module
  beforeEach(module('kethtubeApp'));

  // instantiate service
  var preLoaderService;
  beforeEach(inject(function (_preLoaderService_) {
    preLoaderService = _preLoaderService_;
  }));

  it('should do something', function () {
    expect(!!preLoaderService).toBe(true);
  });

});
