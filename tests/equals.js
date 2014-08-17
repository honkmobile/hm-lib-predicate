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

    it('should work with positive numbers', function () {
      var i, number, differentNumber, _isSameNumber;

      for (i = 0; i < 10000; i++) {
        number          = Math.random();
        differentNumber = number + Math.random();
        _isSameNumber   = _equals(number);

        expect(_isSameNumber(number)).toBe(true);
        expect(_isSameNumber(differentNumber)).toBe(false);
      }
    });

    it('should work with negative numbers', function () {
      var i, number, differentNumber, _isSameNumber;

      for (i = 0; i < 10000; i++) {
        number          = -Math.random();
        differentNumber = number + Math.random();
        _isSameNumber   = _equals(number);

        expect(_isSameNumber(number)).toBe(true);
        expect(_isSameNumber(differentNumber)).toBe(false);
      }
    });

    it('should work with zero', function () {
      expect(_equals(0)(0)).toBe(true);
    });

    it('should work with equivalent numeric/string values', function () {
      var number  = Math.random(),
          _isSame = _equals(number);

      expect(_isSame(number.toString())).toBe(true);
    });

    it('should work with equivalent numeric/boolean values', function () {
      var _equals0     = _equals(0),
          _equals1     = _equals(1),
          _equalsFalse = _equals(false),
          _equalsTrue  = _equals(true);

      expect(_equals0(false)).toBe(true);
      expect(_equals0(true)).toBe(false);

      expect(_equals1(false)).toBe(false);
      expect(_equals1(true)).toBe(true);

      expect(_equalsFalse(0)).toBe(true);
      expect(_equalsFalse(1)).toBe(false);

      expect(_equalsTrue(0)).toBe(false);
      expect(_equalsTrue(1)).toBe(true);
    });

    it('should work with equivalent string/boolean values', function () {
      expect(_equals('')(false)).toBe(true);
      expect(_equals('')(true)).toBe(false);
      expect(_equals(false)('')).toBe(true);
      expect(_equals(true)('')).toBe(false);
    });
  });
});
