'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copyFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function copyFile(source, target, progress) {
  return new Promise(function (resolve, reject) {

    _fs2.default.stat(source, function (err, stats) {
      if (err) return reject(err);

      var ss = _fs2.default.createReadStream(source);
      var ts = _fs2.default.createWriteStream(target);
      ss.on('error', reject);
      ts.on('error', reject);

      var copySize = 0;
      ss.on('data', function (data) {
        copySize += data.length;
        progress && progress(copySize, stats.size);
      });

      ss.on('end', function () {
        return resolve(target);
      });

      ss.pipe(ts);
    });
  });
}