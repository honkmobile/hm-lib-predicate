!function(n){"use strict";function r(){return{all:t,and:t,any:u,contains:e,each:i,equals:o,hasProperty:c,is:f,isEmpty:a,isFalse:s,isIn:l,isLongEnough:p,isNonNegative:y,isNumber:g,isOneOf:l,isPositive:h,isTrue:d,isValidMoment:m,isWhole:v,not:b,or:u}}function t(){var n=Array.prototype.slice.call(arguments);return function(r){for(var t in n)if(!n[t](r))return!1;return!0}}function u(){var n=Array.prototype.slice.call(arguments);return function(r){for(var t in n)if(n[t](r))return!0;return!1}}function e(n){return function(r){return r.indexOf(n)>-1}}function i(n){return function(r){var t;for(t in r)if(!n(r[t]))return!1;return!0}}function o(n){return function(r){return n==r}}function c(n){return function(r){return n in r}}function f(n){return function(r){return n===r}}function a(n){return 0===n.length}function s(n){return n===!1}function l(n){return function(r){return n.indexOf(r)>-1}}function d(n){return n===!0}function m(n){return"object"==typeof n&&n._isAMomentObject&&n._isValid}function p(n){return function(r){return r.length>=n}}function y(n){return g(n)&&n>=0}function g(n){return"number"==typeof n&&n===n}function h(n){return g(n)&&n>0}function v(n){return g(n)&&n%1===0}function b(n){return function(r){return!n(r)}}var O=n.module("hm.lib.predicate",[]);O.factory("hm.lib.predicate.Predicate",r)}(window.angular);