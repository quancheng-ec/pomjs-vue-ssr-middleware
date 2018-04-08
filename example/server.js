const Koa = require('koa')
const app = new Koa()
const { resolve } = require('path')

const { ssrMiddleware } = require('../index')
const App = require('./App')

app.use(
  ssrMiddleware({
    mode: 'string',
    bundleDir: resolve(__dirname, 'dist')
  })
)

app.listen(3000)
