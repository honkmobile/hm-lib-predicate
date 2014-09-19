describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _satisfies;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _satisfies = predicate.satisfies;
  }]));

  describe('satisfies', function () {
    it('should return true iff the given regex matches the given value', function () {
      var test = _satisfies(/^[0-9]$/);

      expect(test('0')).toBe(true);
      expect(test('1')).toBe(true);
      expect(test('2')).toBe(true);
      expect(test('3')).toBe(true);
      expect(test('4')).toBe(true);
      expect(test('5')).toBe(true);
      expect(test('6')).toBe(true);
      expect(test('7')).toBe(true);
      expect(test('8')).toBe(true);
      expect(test('9')).toBe(true);

      expect(test('a')).toBe(false);
      expect(test('b')).toBe(false);
      expect(test('c')).toBe(false);
      expect(test('d')).toBe(false);
      expect(test('e')).toBe(false);
    });
  });
});
