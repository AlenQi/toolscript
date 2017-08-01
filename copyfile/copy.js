import fs from 'fs';

export default function copyFile(source, target, progress) {
  return new Promise((resolve, reject) => {

    fs.stat(source, (err, stats) => {
      if (err) return reject(err);

      let ss = fs.createReadStream(source);
      let ts = fs.createWriteStream(target);
      ss.on('error', reject);
      ts.on('error', reject);

      let copySize = 0;
      ss.on('data', data => {
        copySize += data.length;
        progress && progress(copySize, stats.size);
      });

      ss.on('end', () => resolve(target));

      ss.pipe(ts);
    });

  });
}
