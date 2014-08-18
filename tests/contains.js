describe('hm.lib.predicate.Predicate', function () {
  'use strict';

  var _contains;

  beforeEach(module('hm.lib.predicate'));
  beforeEach(inject(['hm.lib.predicate.Predicate', function (predicate) {
    _contains = predicate.contains;
  }]));

  describe('contains', function () {
    it('should return true if an array contains the given number', function () {
      var number, collection, _containsNumber;

      _.range(10000).forEach(function () {
        number          = Math.random();
        collection      = randomCollectionWith(number);
        _containsNumber = _contains(number);

        expect(_containsNumber(collection)).toBe(true);
      });
    });
  });

  it('should return false given an empty collection and any curried argument', function () {
    expect(_contains(Math.random())([])).toBe(false);
    expect(_contains(Math.random().toString())([])).toBe(false);
    expect(_contains(true)([])).toBe(false);
    expect(_contains(false)([])).toBe(false);
  });

  function randomCollectionWith(number) {
    var collection = _.range(100).map(Math.random);

    collection.push(number);
    collection = _.shuffle(collection);

    return collection;
  }
});
