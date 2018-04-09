import Koa from 'koa'
import { resolve } from 'path'
import { ssrMiddleware } from '../index'

console.log(ssrMiddleware)

const app = new Koa()

app.use(
  ssrMiddleware({
    mode: 'string',
    bundleDir: resolve(__dirname, 'dist')
  })
)

app.listen(3000)
