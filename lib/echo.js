'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Print content.
 *
 * @param {*} Print content.
 * @returns {Boolean} Returns success or faile.
 */

var echo = {
  black: log(0), // black
  red: log(1), // red
  green: log(2), // green
  yellow: log(3), // yellow
  blue: log(4), // blue
  carmine: log(5), // carmine
  cyan: log(6) // cyan
};

var colorList = ['#000000', '#FF0000', '#008000', '#FFFF00', '#0000FF', '#FF00FF', '#00FFFF'];

function log(type) {
  return function () {
    var arg = '';
    for (var i in arguments) {
      if (i === 0) {
        arg += arguments[i];
      } else {
        arg += ' ' + arguments[i];
      }
    }
    console.log('%c ' + arg, 'color: ' + colorList[type]);

    return true;
  };
}

exports.default = echo;