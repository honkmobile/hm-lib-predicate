/**
 * An AngularJS service exporting a collection of predicate functions
 *
 * @author Ryan Albon <ryan@honkmobile.com>
 */
;(function (angular, _) {
  'use strict';

  var predicateModule = angular.module('hm.lib.predicate', []);

  function predicateFactory() {
    return {
      all: all,
      any: any,
      contains: contains,
      equals: equals,
      isFalse: isFalse,
      isIn: isIn,
      isLongEnough: isLongEnough,
      isNonNegative: isNonNegative,
      isOneOf: isIn, // alias
      isPositive: isPositive,
      isTrue: isTrue,
      isValidMoment: isValidMoment,
      isWhole: isWhole,
      not: not,
      propertyIsTrue: propertyIsTrue,
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
      return _.contains(collection, value);
    };
  }

  function equals(value) {
    return function (candidate) {
      return value == candidate;
    };
  }

  function isFalse(value) {
    return value === false;
  }

  function isIn(collection) {
    return function (value) {
      return _.contains(collection, value);
    };
  }

  function isTrue(value) {
    return value === true;
  }

  function isValidMoment(value) {
    return all(_.isObject, propertyIsTrue('_isAMomentObject'), propertyIsTrue('_isValid'));
  }

  function isLongEnough(length) {
    return function (string) {
      return string.length >= length;
    };
  }

  function isNonNegative(value) {
    return _.isNumber(value) && value >= 0;
  }

  function isPositive(value) {
    return _.isNumber(value) && value > 0;
  }

  function isWhole(value) {
    return _.isNumber(value) && value % 1 === 0;
  }

  function not(pred) {
    return function (value) {
      return !pred(value);
    };
  }

  function propertyIsTrue(property) {
    return _.compose(isTrue, _.property(property));
  }

  predicateModule.factory('hm.lib.predicate.Predicate', predicateFactory);
})(window.angular, window._);
