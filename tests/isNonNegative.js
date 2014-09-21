describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _isNonNegative;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _isNonNegative = predicate.isNonNegative;
  }]));

  describe('isNonNegative', function () {
    it('should return true when given 0', function () {
      expect(_isNonNegative(0)).toBe(true);
      expect(_isNonNegative(0.00)).toBe(true);
      expect(_isNonNegative(-0)).toBe(true);
      expect(_isNonNegative(-0.0000)).toBe(true);
    });
  });
});
