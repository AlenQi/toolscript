"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Count the characters that repeat the most times in a string.
 *
 * @param {string}.
 * @returns {json} Returns the result.
 */

var Char = function Char(str) {
  var uchars = {};
  str.replace(/\S/g, function (l) {
    uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
  });
  return uchars;
};

var countMaxRepetition = function countMaxRepetition(str) {
  var obj = Char(str);
  var maxCount = 0;
  var maxItem = null;
  for (var i in obj) {
    if (obj[i] > maxCount) {
      maxCount = obj[i];
      maxItem = i;
    }
  }
  return {
    maxCount: maxCount,
    maxItem: maxItem
  };
};

exports.default = countMaxRepetition;