const echo = {
  error: log(1), // red
  success: log(2), // green
  warn: log(3), // yellow
  debug: log(6), // cyan
  stress: log(5), // carmine
  log: log(0) // white
}
let lists = [
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
  return function() {
    let arg = ''
    const len = arguments.length
    for (let i in arguments) {
      if (i == 0) {
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
