'use strict';

describe('Directive: specialEffects', function () {

  // load the directive's module
  beforeEach(module('kethtubeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<special-effects></special-effects>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the specialEffects directive');
  }));
});
