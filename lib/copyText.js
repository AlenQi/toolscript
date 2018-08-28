'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copy the text to the pasting board.
 *
 * @param {*} The data it will be copy.
 * @returns {Boolean} Returns success or faile.
 */

var copyText = function copyText(text) {
  var aux = document.createElement('input');

  var content = text;

  aux.setAttribute('value', content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);

  return true;
};

exports.default = copyText;