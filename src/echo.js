/**
 * Print content.
 *
 * @param {*} Print content.
 * @returns {Boolean} Returns success or faile.
 */

const echo = {
  black: log(0), // black
  red: log(1), // red
  green: log(2), // green
  yellow: log(3), // yellow
  blue: log(4), // blue
  carmine: log(5), // carmine
  cyan: log(6) // cyan
}
const colorList = [
  '#000000',
  '#FF0000',
  '#008000',
  '#FFFF00',
  '#0000FF',
  '#FF00FF',
  '#00FFFF'
]
function log(type) {
  return function() {
    let arg = ''
    for (const i in arguments) {
      if (i === 0) {
        arg += arguments[i]
      } else {
        arg += ' ' + arguments[i]
      }
    }
    console.log(`%c ${arg}`,`color: ${colorList[type]}`)
    return true
  }
}

export default echo
