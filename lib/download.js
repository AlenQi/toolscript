'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = downloadFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function downloadFile(url, target, progress) {
  return new Promise(function (resolve, reject) {

    var s = _fs2.default.createWriteStream(target);
    s.on('error', reject);

    var totalSize = 0;
    var downloadSize = 0;
    var req = _request2.default.get({
      url: url,
      encoding: null
    }).on('response', function (res) {
      if (res.statusCode !== 200) {
        return reject(new Error('status #' + res.statusCode));
      }
      totalSize = Number(res.headers['content-length']) || null;

      res.on('data', function (data) {
        downloadSize += data.length;
        progress && progress(downloadSize, totalSize);
      });
      res.on('end', function () {
        return resolve(target);
      });
    }).pipe(s);
  });
}