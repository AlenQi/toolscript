/**
 * detect IE
 */
export default function detectIE(version) {
  let ua = window.navigator.userAgent

  if (version < 10) {
    let isIE = function(version) {
      let b = document.createElement('b')
      b.innerHTML = '<!--[if IE ' + version + ']><i></i><![endif]-->'
      return b.getElementsByTagName('i').length === 1
    }
  }

  switch (version) {
    case 10:
      let msie = ua.indexOf('MSIE ')
      if (msie > 0) {
        return true
      } else {
        return false
      }
      break
    case 11:
      let trident = ua.indexOf('Trident/')
      if (trident > 0) {
        let rv = ua.indexOf('rv:')
        return true
      } else {
        return false
      }
      break
    case 12:
      let edge = ua.indexOf('Edge/')
      if (edge > 0) {
        return true
      } else {
        return false
      }
      break
    default:
  }

  // other browser
  return false
}
