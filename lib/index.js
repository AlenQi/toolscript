'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectIE = require('./detectIE');

var _detectIE2 = _interopRequireDefault(_detectIE);

var _echo = require('./echo');

var _echo2 = _interopRequireDefault(_echo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  detectIE: _detectIE2.default,
  echo: _echo2.default
};