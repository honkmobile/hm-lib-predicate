describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _isEmpty;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _isEmpty = predicate.isEmpty;
  }]));

  describe('isEmpty', function () {
    it('should return true when given an empty collection', function () {
      expect(_isEmpty([])).toBe(true);
    });
  });
});
