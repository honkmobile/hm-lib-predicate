describe('hm.lib.predicate.Predicate', function () {
  var _isFalse;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _isFalse = predicate.isFalse;
  }]));

  describe('isFalse', function () {
    it('should return true when given false', function () {
      expect(_isFalse(false)).toBe(true);
    });

    it('should return false when given true', function () {
      expect(_isFalse(true)).toBe(false);
    });
  });
});
