describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _contains;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _contains = predicate.contains;
  }]));

  describe('contains', function () {
    it('should return true if an array contains the given number', function () {
      var i, number, collection, _containsNumber;

      for (i = 0; i < 10000; i++) {
        number          = Math.random();
        collection      = randomCollectionWith(number);
        _containsNumber = _contains(number);

        expect(_containsNumber(collection)).toBe(true);
      }
    });
  });

  it('should return false given an empty collection and any curried argument', function () {
    expect(_contains(Math.random())([])).toBe(false);
    expect(_contains(Math.random().toString())([])).toBe(false);
    expect(_contains(true)([])).toBe(false);
    expect(_contains(false)([])).toBe(false);
  });

  function randomCollectionWith(number) {
    return [Math.random(), Math.random(), number, Math.random()];
  }
});
