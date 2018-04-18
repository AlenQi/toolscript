'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * rgb switch to the Hexadecimal.
 *
 * @param {Number} Red 0~255.
 * @param {Number} Green 0~255.
 * @param {Number} Blue 0~255.
 * @returns {String} Returns the Hex.
 */

var rgbToHex = function rgbToHex(r, g, b) {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
};

exports.default = rgbToHex;