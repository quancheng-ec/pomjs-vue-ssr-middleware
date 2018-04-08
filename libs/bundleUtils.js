const { readFile, readdir } = require('fs')

exports.findBundle = async (dir, extension = 'js') => {
  return new Promise((res, rej) => {
    readdir(dir, (err, files) => {
      if (err) {
        if (err.code === 'ENOTDIR') {
          readFile()
        }
        reject(err)
      }
    })
  })
}
