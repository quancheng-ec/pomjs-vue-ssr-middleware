import Vue from 'vue'
import { createRenderer } from 'vue-server-renderer'

const TEMPLATE = `<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title || 'Document'}}</title>
  </head>

  <body>
    <!--vue-ssr-outlet-->
  </body>

</html>`

const createRender = (appInstance, ctx) => {
  let template = TEMPLATE

  try {
    template = readFileSync(options.template, 'utf-8')
  } catch (e) {
    console.log(e)
  }

  const renderer = createRenderer({
    runInNewContext: false,
    template
  })

  return renderer
}

export const createAppStringRender = (app, ctx) => (context, options = {}) => {
  return createRender(app, ctx).renderToString(app, context)
}

export const createAppStreamRender = (app, ctx) => (context, options = {}) => {
  const stream = createRender(app, ctx).renderToStream(app, context)

  stream.on('data', data => {
    console.log('===', data.toString())
    ctx.res.write(data.toString())
  })

  stream.on('end', () => {
    ctx.res.end(null)
  })

  stream.on('error', err => {
    console.error(err)
  })

  return stream
}
