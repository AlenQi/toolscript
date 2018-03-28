'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Judge the value is a Object.
 *
 * @param {*} the value that need judge.
 * @param {Number} The minimum interval time.
 * @returns {Boolean} Returns the judgment.
 */

var isPlainObject = function isPlainObject(obj) {

  return Object.prototype.toString.call(obj) === '[object Object]';
};

exports.default = isPlainObject;