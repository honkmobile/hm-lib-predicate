describe('hm.lib.predicate.Predicate', function () {
  var _isTrue;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _isTrue = predicate.isTrue;
  }]));

  describe('isTrue', function () {
    it('should return true when given true', function () {
      expect(_isTrue(true)).toBe(true);
      expect(_isTrue(Boolean(true))).toBe(true);
    });

    it('should return false when given false', function () {
      expect(_isTrue(false)).toBe(false);
    });

    it('should return false when given any number', function () {
      var i;

      for (i = 0; i < 5000; i++) {
        expect(_isTrue(Math.random())).toBe(false);
        expect(_isTrue(-Math.random())).toBe(false);
      }

      expect(_isTrue(0)).toBe(false);
      expect(_isTrue(NaN)).toBe(false);
    });

    it('should return false when given any string', function () {
      expect(_isTrue('')).toBe(false);
      expect(_isTrue(' ')).toBe(false);
    });

    it('should return false given an empty array', function () {
      expect(_isTrue([])).toBe(false);
    });

    it('should return false given an empty object', function () {
      expect(_isTrue({})).toBe(false);
    });
  });
});
