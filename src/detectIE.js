/**
 * Judge the IE browser version.
 *
 * @param {Int} Internet explorer version.
 * @returns {Boolean} Returns is it the current version.
 */

const detectIE = function(version) {
  const ua = window.navigator.userAgent

  if (version < 10) {
    const b = document.createElement('b')
    b.innerHTML = '<!--[if IE ' + version + ']><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
  }

  switch (version) {
    case 10:
      const msie = ua.indexOf('MSIE ')
      if (msie > 0) {
        return true
      }
      break
    case 11:
      const trident = ua.indexOf('Trident/')
      if (trident > 0) {
        return true
      }
      break
    case 12:
      const edge = ua.indexOf('Edge/')
      if (edge > 0) {
        return true
      }
      break
    default:
  }

  // other browser
  return false
}

export default detectIE
