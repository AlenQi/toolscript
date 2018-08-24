/**
 * Copy the text to the pasting board.
 *
 * @param {*} The data it will be copy.
 * @returns {Boolean} Returns success or faile.
 */

const copyText = function(text) {
  const aux = document.createElement('input')

  const content = text

  aux.setAttribute('value', content)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)

  return true
}

export default copyText
