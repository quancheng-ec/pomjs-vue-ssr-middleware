const { resolve } = require('path')
const { createAppStreamRender, createAppStringRender } = require('./renderer')
const { findBundle } = require('./bundleUtils')

module.exports = (options = {}) => {
  const { mode = 'string', bundleDir } = options

  if (!bundleDir) throw new Error('no bundleDir provided')

  return async (ctx, next) => {
    const bundleFile = await findBundle(resolve(bundleDir, ctx.path))
    const renderer = mode === 'string' ? createAppStringRender(bundleFile) : createAppStreamRender(bundleFile)

    await next()
  }
}
