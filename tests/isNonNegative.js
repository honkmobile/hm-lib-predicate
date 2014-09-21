describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _isNonNegative;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _isNonNegative = predicate.isNonNegative;
  }]));

  describe('isNonNegative', function () {
    it('should return true given 0', function () {
      expect(_isNonNegative(0)).toBe(true);
      expect(_isNonNegative(0.00)).toBe(true);
      expect(_isNonNegative(-0)).toBe(true);
      expect(_isNonNegative(-0.0000)).toBe(true);
    });

    it('should return true given any random positive float', function () {
      _.range(1000).forEach(function () {
        expect(_isNonNegative(Math.random())).toBe(true);
      });
    });

    it('should return true given any positive integer', function () {
      _.range(1000).forEach(function (i) {
        expect(_isNonNegative(i)).toBe(true);
      });
    });

    it('should return false given any negative float', function () {
      _.range(1000).forEach(function () {
        expect(_isNonNegative(Math.random() - 1)).toBe(false);
      });
    });

    it('should return false given any negative integer', function () {
      _.range(1, 1000).forEach(function (i) {
        expect(_isNonNegative(-i)).toBe(false);
      });
    });

    it('should return false given any non-numeric argument', function () {
      expect(_isNonNegative(null)).toBe(false);
      expect(_isNonNegative(undefined)).toBe(false);
      expect(_isNonNegative(true)).toBe(false);
      expect(_isNonNegative(false)).toBe(false);
      expect(_isNonNegative({})).toBe(false);
      expect(_isNonNegative({x: 100})).toBe(false);

      _.range(1000).forEach(function () {
        expect(_isNonNegative(Math.random().toString())).toBe(false);
      });
    });
  });
});
