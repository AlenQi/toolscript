'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectIE = require('./detectIE');

var _detectIE2 = _interopRequireDefault(_detectIE);

var _echo = require('./echo');

var _echo2 = _interopRequireDefault(_echo);

var _copy = require('./copy');

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  detectIE: _detectIE2.default,
  echo: _echo2.default,
  copy: _copy2.default
};