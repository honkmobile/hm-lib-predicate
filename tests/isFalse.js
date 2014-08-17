describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _isFalse;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _isFalse = predicate.isFalse;
  }]));

  describe('isFalse', function () {
    it('should return true when given false', function () {
      expect(_isFalse(false)).toBe(true);
      expect(_isFalse(Boolean(false))).toBe(true);
    });

    it('should return false when given true', function () {
      expect(_isFalse(true)).toBe(false);
    });

    it('should return false when given any number', function () {
      var i;

      for (i = 0; i < 5000; i++) {
        expect(_isFalse(Math.random())).toBe(false);
        expect(_isFalse(-Math.random())).toBe(false);
      }

      expect(_isFalse(0)).toBe(false);
      expect(_isFalse(NaN)).toBe(false);
    });

    it('should return false when given any string', function () {
      expect(_isFalse('')).toBe(false);
      expect(_isFalse(' ')).toBe(false);
    });

    it('should return false given an empty array', function () {
      expect(_isFalse([])).toBe(false);
    });

    it('should return false given an empty object', function () {
      expect(_isFalse({})).toBe(false);
    });
  });
});
