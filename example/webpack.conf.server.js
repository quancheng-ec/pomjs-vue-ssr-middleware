const { resolve } = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.conf')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const { DefinePlugin } = require('webpack')

module.exports = merge(base, {
  target: 'node',
  devtool: '#source-map',
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        VUE_ENV: JSON.stringify(process.env.VUE_ENV)
      }
    })
  ]
})
