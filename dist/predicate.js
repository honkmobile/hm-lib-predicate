!function(n){"use strict";function r(){return{all:t,any:u,contains:e,equals:i,is:o,isFalse:c,isIn:f,isLongEnough:l,isNonNegative:d,isNumber:m,isOneOf:f,isPositive:p,isTrue:a,isValidMoment:s,isWhole:y,not:g}}function t(){var n=Array.prototype.slice.call(arguments);return function(r){for(var t in n)if(!n[t](r))return!1;return!0}}function u(){var n=Array.prototype.slice.call(arguments);return function(r){for(var t in n)if(n[t](r))return!0;return!1}}function e(n){return function(r){return r.indexOf(n)>-1}}function i(n){return function(r){return n==r}}function o(n){return function(r){return n===r}}function c(n){return n===!1}function f(n){return function(r){return n.indexOf(r)>-1}}function a(n){return n===!0}function s(n){return"object"==typeof n&&n._isAMomentObject&&n._isValid}function l(n){return function(r){return r.length>=n}}function d(n){return m(n)&&n>=0}function m(n){return"number"==typeof n}function p(n){return m(n)&&n>0}function y(n){return m(n)&&n%1===0}function g(n){return function(r){return!n(r)}}var v=n.module("hm.lib.predicate",[]);v.factory("hm.lib.predicate.Predicate",r)}(window.angular);