describe('hm.lib.predicate.Predicate', function () {
  var _isNumber;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _isNumber = predicate.isNumber;
  }]));

  describe('isNumber', function () {
    it('should return true given any positive/negative integer', function () {
      var i, test;

      for (i = 0; i < 10000; i++) {
        test = Math.floor(Math.random() * 100);

        expect(_isNumber(test)).toBe(true);
        expect(_isNumber(-test)).toBe(true);
      }
    });

    it('should return true given zero', function () {
      [0, 0.00, -0, -0.000].forEach(function (zero) {
        expect(_isNumber(zero)).toBe(true);
      });
    });

    it('should return true given any decimal number', function () {
      var i, test;

      for (i = 0; i < 10000; i++) {
        test = Math.random();

        expect(_isNumber(test)).toBe(true);
        expect(_isNumber(-test)).toBe(true);
      }
    });

    it('should return false given NaN', function () {
      expect(_isNumber(NaN)).toBe(false);
    });

    it('should return false given any string', function () {
      var i;

      for (i = 0; i < 10000; i++) {
        expect(_isNumber(Math.random().toString())).toBe(false);
      }
    });

    it('should return false given any array', function () {
      expect(_isNumber([])).toBe(false);
    });

    it('should return false given any object', function () {
      expect(_isNumber({})).toBe(false);
    });
  });
});
