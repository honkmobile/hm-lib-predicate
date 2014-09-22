/**
 * An AngularJS service exporting a collection of predicate functions
 *
 * @author Ryan Albon <ryan@honkmobile.com>
 */
;(function (angular) {
  'use strict';

  var predicateModule = angular.module('hm.lib.predicate', []);

  function predicateFactory() {
    return {
      all: all,
      and: all, // alias
      any: any,
      contains: contains,
      each: each,
      equals: equals,
      hasProperty: hasProperty,
      is: is,
      isEmpty: isEmpty,
      isFalse: isFalse,
      isIn: isIn,
      isLongEnough: isLongEnough,
      isNonNegative: isNonNegative,
      isNumber: isNumber,
      isOneOf: isIn, // alias
      isPositive: isPositive,
      isTrue: isTrue,
      isValidMoment: isValidMoment,
      isWhole: isWhole,
      not: not,
      or: any, // alias
      satisfies: satisfies,
    };
  }

  /**
    ## all(predicate<sub>1</sub>, predicate<sub>2</sub>, ...)(value)

    Returns ``true`` if ``value`` satisfies every given predicate
    ``false`` otherwise
  **/
  function all(/* predicates */) {
    var predicates = Array.prototype.slice.call(arguments);

    return function (value) {
      var i;

      for (i in predicates) {
        if (!predicates[i](value)) {
          return false;
        }
      }

      return true;
    };
  }

  /**
    ## any(predicate<sub>1</sub>, predicate<sub>2</sub>, ...)(value)

    Returns ``true`` if ``value`` satisfies at least one
    given predicate, false otherwise
  **/
  function any(/* predicates */) {
    var predicates = Array.prototype.slice.call(arguments);

    return function (value) {
      var i;

      for (i in predicates) {
        if (predicates[i](value)) {
          return true;
        }
      }

      return false;
    };
  }

  /**
    ## contains(value)(collection)

    Returns ``true`` if ``value`` is an element of ``collection``,
    false otherwise
  **/
  function contains(value) {
    return function (collection) {
      return collection.indexOf(value) > -1;
    };
  }

  /**
    ## each(predicate)(collection)

    Returns ``true`` if every element of ``collection`` satisfies
    ``predicate``, ``false`` otherwise
  **/
  function each(predicate) {
    return function (collection) {
      var i;

      for (i in collection) {
        if (!predicate(collection[i])) {
          return false;
        }
      }

      return true;
    };
  }

  /**
    ## equals(value)(candidate)

    Returns ``true`` if ``value`` is equivalent (but not necessarily identical) to ``candidate``,
    ``false`` otherwise
  **/
  function equals(value) {
    return function (candidate) {
      return value == candidate;
    };
  }

  /**
    ## hasProperty(property)(obj)

    Returns ``true`` if the ``property`` key exists on the ``obj`` object, ``false`` otherwise
  **/
  function hasProperty(property) {
    return function (obj) {
      return property in obj;
    };
  }

  /**
    ## is(value)(candidate)

    Returns ``true`` if ``value`` is identical to ``candidate``, ``false`` otherwise
  **/
  function is(value) {
    return function (candidate) {
      return value === candidate;
    };
  }

  function isEmpty(collection) {
    return collection.length === 0;
  }

  function isFalse(value) {
    return value === false;
  }

  function isIn(collection) {
    return function (value) {
      return collection.indexOf(value) > -1;
    };
  }

  function isTrue(value) {
    return value === true;
  }

  function isValidMoment(value) {
    return typeof value === 'object' && value._isAMomentObject && value._isValid;
  }

  function isLongEnough(length) {
    return function (string) {
      return string.length >= length;
    };
  }

  function isNonNegative(value) {
    return isNumber(value) && value >= 0;
  }

  function isNumber(value) {
    return typeof value === 'number' && value === value;
  }

  function isPositive(value) {
    return isNumber(value) && value > 0;
  }

  function isWhole(value) {
    return isNumber(value) && value % 1 === 0;
  }

  function not(pred) {
    return function (value) {
      return !pred(value);
    };
  }

  function satisfies(regex) {
    return function (value) {
      return regex.test(value);
    };
  }

  predicateModule.factory('hm.lib.predicate.Predicate', predicateFactory);
})(window.angular);
