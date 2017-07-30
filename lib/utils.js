'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomFilename = randomFilename;
exports.isURL = isURL;
exports.noop = noop;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTmpDir = _os2.default.tmpdir || _os2.default.tmpDir;

function randomString() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'abcdefghijklmnopqrstuvwxyz0123456789';

  var max = chars.length + 1;
  var str = '';
  while (size > 0) {
    str += chars.charAt(Math.floor(Math.random() * max));
    size--;
  }
  return str;
}

function randomFilename() {
  var tmpDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getTmpDir();

  return _path2.default.resolve(tmpDir, randomString(20));
}

function isURL(url) {
  if (url.substr(0, 7) === 'http://') return true;
  if (url.substr(0, 8) === 'https://') return true;
  return false;
}

function noop() {}