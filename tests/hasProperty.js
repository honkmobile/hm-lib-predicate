describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _hasProperty;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _hasProperty = predicate.hasProperty;
  }]));

  describe('hasProperty', function () {
    it('should return true if an object literal has the given property', function () {
      var _hasPropertyX = _hasProperty('x');

      expect(_hasPropertyX({x: 'abc'})).toBe(true);
    });

    it('should return true if an array has the given index', function () {
      var _hasIndex = _hasProperty('0');

      expect(_hasIndex([1, 2, 3])).toBe(true);
    });

    it('should return false if an array does not have the given index', function () {
      var _hasIndex = _hasProperty('100');

      expect(_hasIndex([1, 2, 3])).toBe(false);
    });
  });
});
