import Vue from 'vue'

export ssrMiddleware from './libs/ssrMiddleware'
export const createApp = (App, context) => {
  const app = new Vue({
    name: 'main',
    render: h => h(App)
  })

  return { app }
}
