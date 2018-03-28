/**
 * Judge the value is a Object.
 *
 * @param {*} the value that need judge.
 * @param {Number} The minimum interval time.
 * @returns {Boolean} Returns the judgment.
 */

const isPlainObject = function  (obj) {

  return Object.prototype.toString.call(obj) === '[object Object]'
}

export default isPlainObject
