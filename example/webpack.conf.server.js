const { resolve } = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.conf')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const { DefinePlugin } = require('webpack')

module.exports = merge(base, {
  target: 'node',
  entry: {
    app: resolve(__dirname, 'src/app.js')
  },
  devtool: '#eval-source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRServerPlugin(),
    new DefinePlugin({
      'process.env': {
        VUE_ENV: JSON.stringify(process.env.VUE_ENV)
      }
    })
  ]
})
