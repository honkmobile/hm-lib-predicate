describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _equals;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _equals = predicate.equals;
  }]));

  describe('equals', function () {
    it('should work with booleans', function () {
      var _isTrue = _equals(true);

      expect(_isTrue(true)).toBe(true);
      expect(_isTrue(false)).toBe(false);
    });

    it('should work with strings', function () {
      var i, string, _isSameString;

      for (i = 0; i < i < 10000; i++) {
        string        = Math.random().toString();
        _isSameString = _equals(string);

        expect(_isSameString(string)).toBe(true);
      }
    });
  });
});
