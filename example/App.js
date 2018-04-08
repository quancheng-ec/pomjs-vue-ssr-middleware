const Vue = require('vue')
module.exports = Vue.extend({
  name: 'App',
  data() {
    return {
      greeting: 'Hello World'
    }
  },
  methods: {
    handleClick() {
      console.log(1)
    }
  },
  template: `<h1 @click="handleClick">{{greeting}}</h1>`
})
