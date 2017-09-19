/**
 * Remove the element that belong to the array.
 *
 * @param {*} one of the array.
 * @returns {array} Returns the array.
 */

Array.prototype.indexOf = function(val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) return i
  }
  return -1
}
Array.prototype.remove = function(val) {
  const index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}

const arrayRemoveEle = function(array, removeValue) {
  return array.remove(removeValue)
}

export default arrayRemoveEle
