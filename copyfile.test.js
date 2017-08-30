import assert from 'assert'
import path from 'path'
import fs from 'fs'
import download from '../'
import { randomFilename } from '../lib/utils'

let readFile = f => fs.readFileSync(f).toString()
let getFileSize = f => fs.statSync(f).size

describe('es2015_demo', () => {
  it('复制本地文件成功', done => {
    let source = __filename
    let target = randomFilename()
    let onProgress = false

    download(source, target, (size, total) => {
      onProgress = true
      assert.equal(size, total)
      assert.equal(total, getFileSize(source))
    })
      .then(filename => {
        assert.equal(onProgress, true)
        assert.equal(target, filename)
        assert.equal(readFile(source), readFile(target))

        done()
      })
      .catch(err => {
        throw err
      })
  })
})

it('复制本地文件成功 callback', done => {
  let source = __filename
  let target = randomFilename()
  let onProgress = false

  download(
    source,
    target,
    (size, total) => {
      onProgress = true
      assert.equal(size, total)
      assert.equal(total, getFileSize(source))
    },
    (err, filename) => {
      assert.equal(err, null)
      assert.equal(onProgress, true)
      assert.equal(target, filename)
      assert.equal(readFile(source), readFile(target))

      done()
    }
  )
})
