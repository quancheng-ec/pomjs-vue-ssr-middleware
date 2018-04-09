import { resolve } from 'path'
import { createAppStreamRender, createAppStringRender } from './renderer'
import { findBundle } from './bundleUtils'

export default (options = {}) => {
  const { mode = 'string', bundleDir } = options

  if (!bundleDir) throw new Error('no bundleDir provided')

  return async (ctx, next) => {
    const bundleFile = await findBundle(resolve(bundleDir, ctx.path))
    const renderer = mode === 'string' ? createAppStringRender(bundleFile) : createAppStreamRender(bundleFile)

    await next()
  }
}
