import { readFile, readdir } from 'fs'
import { resolve } from 'path'

// a/b/c => a/b/c.js
// a/b/c => a/b/c/index.js
export const findBundle = async (dir, extension = 'js') => {
  return new Promise((res, rej) => {
    readdir(dir, (err, files) => {
      if (err) {
        if (err.code === 'ENOTDIR') {
          readFile(resolve(dir, 'index.js'), 'utf-8', (err, file) => {
            if (err) {
              rej(err)
            }
            res(file)
          })
          return
        }
        reject(err)
      }
    })
  })
}
