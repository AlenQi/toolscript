/**
 * Count the characters that repeat the most times in a string.
 *
 * @param {string}.
 * @returns {json} Returns the result.
 */

const Char = function(str) {
  let uchars = {}
  str.replace(/\S/g, function(l) {
    uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1
  })
  return uchars
}

const countMaxRepetition = function(str) {
  const obj = Char(str)
  let maxCount = 0
  let maxItem = null
  for (const i in obj) {
    if (obj[i] > maxCount) {
      maxCount = obj[i]
      maxItem = i
    }
  }
  return {
    maxCount: maxCount,
    maxItem: maxItem
  }
}

export default countMaxRepetition
