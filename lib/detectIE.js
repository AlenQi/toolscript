'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectIE;
/**
 * detect IE
 */
function detectIE(version) {
  var ua = window.navigator.userAgent;

  if (version < 10) {
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + version + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
  }

  switch (version) {
    case 10:
      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        return true;
      }
      break;
    case 11:
      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
        return true;
      }
      break;
    case 12:
      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
        return true;
      }
      break;
    default:
  }

  // other browser
  return false;
}