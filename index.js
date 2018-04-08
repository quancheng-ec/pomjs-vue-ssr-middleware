const Vue = require('vue')
const { ssrMiddleware } = require('./libs/ssrMiddleware')

exports.ssrMiddleware = ssrMiddleware

exports.createApp = (App, context) => {
  const app = new Vue({
    name: 'main',
    render: h => h(App)
  })

  return { app }
}
