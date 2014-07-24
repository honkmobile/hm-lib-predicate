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
      any: any,
      contains: contains,
      equals: equals,
      is: is,
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
    };
  }

  function all(/* predicates */) {
    var predicates = Array.prototype.slice.call(arguments);

    return function (value) {
      for (var i in predicates) {
        if (!predicates[i](value)) {
          return false;
        }
      }

      return true;
    };
  }

  function any(/* predicates */) {
    var predicates = Array.prototype.slice.call(arguments);

    return function (value) {
      for (var i in predicates) {
        if (predicates[i](value)) {
          return true;
        }
      }

      return false;
    };
  }

  function contains(value) {
    return function (collection) {
      return collection.map(is(value)).filter(isTrue).length > 0;
    };
  }

  function equals(value) {
    return function (candidate) {
      return value == candidate;
    };
  }

  function is(value) {
    return function (candidate) {
      return value === candidate;
    };
  }

  function isFalse(value) {
    return value === false;
  }

  function isIn(collection) {
    return function (value) {
      return collection.map(is(value)).filter(isTrue).length > 0;
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
    return typeof value === 'number';
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

  predicateModule.factory('hm.lib.predicate.Predicate', predicateFactory);
})(window.angular);
