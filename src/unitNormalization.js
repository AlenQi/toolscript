/**
 * Format the number that reserve the decimal for the specified number of digits.
 *
 * @param {Number} The number.
 * @param {int} The number is the digits that you want to keep.
 * @returns {Number} Returns the formatted number.
 */

const unitNormalization = function (arr, digit) {
  /*单位规整*/
  digit = digit || 0
  const prence = Math.pow(10, digit)
  if (Array.isArray(arr)) {
    var backArr = []
    for (var i = 0; i < arr.length; i++) {
      backArr.push(Math.rou(Math.round(arr[i] * prence)) / prence)
    }
    return backArr
  } else {
    var num = Math.floor(Math.round(arr * prence)) / prence
    return num
  }
}

export default unitNormalization
