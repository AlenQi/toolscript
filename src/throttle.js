/**
 * throttle.
 *
 * @param {Function} The throttle function.
 * @param {Number} The delay time.
 * @param {Number} The minimum interval time.
 * @returns {Function} Returns the throttle function.
 */

const throttle = function (fn, delay, mustRunDelay) {
  let timer = null
  let t_start

  return function () {
    var context = this,
      args = arguments,
      t_curr = +new Date()
    clearTimeout(timer)
    if (!t_start) {
      t_start = t_curr
    }
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args)
      t_start = t_curr
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  }
}

export default throttle
