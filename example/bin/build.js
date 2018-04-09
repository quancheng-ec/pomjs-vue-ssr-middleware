const webpack = require('webpack')
const { resolve } = require('path')
const serverConf = require('../webpack.conf.server')
const { copyFileSync, readdirSync, statSync, readFileSync } = require('fs')

const viewsDir = resolve(__dirname, '../src/views')
const serverEntry = resolve(__dirname, '../src/server-entry.js')
const serverEntries = {}

const r = (...args) => resolve.apply(resolve, [viewsDir, ...args])

for (const subDir of readdirSync(viewsDir)) {
  if (statSync(r(subDir)).isDirectory) {
    const destPath = r(subDir, 'entry.js')
    copyFileSync(serverEntry, destPath)
    serverEntries[subDir] = destPath
  }
}

serverConf.mode = 'development'
serverConf.entry = serverEntries
const serverCompiler = webpack(serverConf)

serverCompiler.run((err, stats) => {
  console.log('over')
})
