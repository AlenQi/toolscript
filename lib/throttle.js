"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * throttle.
 *
 * @param {Function} The throttle function.
 * @param {Number} The delay time.
 * @param {Number} The minimum interval time.
 * @returns {Function} Returns the throttle function.
 */

var throttle = function throttle(fn, delay, mustRunDelay) {
  var timer = null;
  var t_start = void 0;

  return function () {
    var context = this,
        args = arguments,
        t_curr = +new Date();
    clearTimeout(timer);
    if (!t_start) {
      t_start = t_curr;
    }
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args);
      t_start = t_curr;
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  };
};

exports.default = throttle;