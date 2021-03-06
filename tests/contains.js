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

    it('should return true if an array contains the given string', function () {
      var string, collection, _containsString;

      _.range(10000).forEach(function () {
        string          = Math.random().toString();
        collection      = randomCollectionWith(string);
        _containsString = _contains(string);

        expect(_containsString(collection)).toBe(true);
      });
    });

    it('should work with boolean as curried argument', function () {
      expect(_contains(true)([true, false])).toBe(true);
      expect(_contains(false)([true, false])).toBe(true);
      expect(_contains(true)([false])).toBe(false);
      expect(_contains(false)([true])).toBe(false);
      expect(_contains(true)([1])).toBe(false);
      expect(_contains(false)([0])).toBe(false);
    });

    it('should return false given an empty collection and any curried argument', function () {
      expect(_contains(Math.random())([])).toBe(false);
      expect(_contains(Math.random().toString())([])).toBe(false);
      expect(_contains(true)([])).toBe(false);
      expect(_contains(false)([])).toBe(false);
    });
  });

  function randomCollectionWith(number) {
    var collection = _.range(100).map(function () { return chance.integer(); });

    collection.push(number);
    collection = _.shuffle(collection);

    return collection;
  }
});
