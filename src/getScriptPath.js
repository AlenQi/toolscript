/**
 * Get current script url.
 *
 * @returns { String } Returns the base url.
 */

let baseUrl = null

function getScriptPath() {
  if (baseUrl === null) {
    let src = ''
    if (document.currentScript) {
      ({ src } = document.currentScript)
    } else {
      const script = document.querySelectorAll('script')
      if (script.length) {
        ({ src } = script[script.length - 1])
      }
    }
    const lastPoint = src.lastIndexOf('/js/')
    if (lastPoint >= 0) {
      src = src.substring(0, lastPoint + 1)
    }
    baseUrl = src
  }
  return baseUrl
}
export default getScriptPath
