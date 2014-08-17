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
      var i, string, differentString, _isSameString;

      for (i = 0; i < 10000; i++) {
        string          = Math.random().toString();
        differentString = string + 'some suffix';
        _isSameString   = _equals(string);

        expect(_isSameString(string)).toBe(true);
        expect(_isSameString(differentString)).toBe(false);
      }
    });

    it('should work with numbers', function () {
      var i, number, differentNumber, _isSameNumber;

      for (i = 0; i < 10000; i++) {
        number          = Math.random();
        differentNumber = number + Math.random();
        _isSameNumber   = _equals(number);

        expect(_isSameNumber(number)).toBe(true);
        expect(_isSameNumber(differentNumber)).toBe(false);

        _isSameNumber = _equals(-number);

        expect(_isSameNumber(-number)).toBe(true);
        expect(_isSameNumber(differentNumber)).toBe(false);
      }

      expect(_equals(0)(0)).toBe(true);
    });
  });
});
