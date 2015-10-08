'use strict';

describe('Directive: preLoader', function () {

  // load the directive's module
  beforeEach(module('kethtubeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pre-loader></pre-loader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the preLoader directive');
  }));
});
