const echo = {
  black: log(0), // black
  red: log(1), // red
  green: log(2), // green
  yellow: log(3), // yellow
  blue: log(4), // blue
  carmine: log(5), // carmine
  cyan: log(6) // cyan
}
const lists = [
  '\x1b[30m',
  '\x1b[31m',
  '\x1b[32m',
  '\x1b[33m',
  '\x1b[34m',
  '\x1b[35m',
  '\x1b[36m',
  '\x1b[37m'
]
function log(type) {
  return function () {
    let arg = ''
    for (const i in arguments) {
      if (i === 0) {
        arg += arguments[i]
      } else {
        arg += ' ' + arguments[i]
      }
    }
    arg = lists[type] + arg + lists[7]
    console.log(arg)
  }
}

export default echo
