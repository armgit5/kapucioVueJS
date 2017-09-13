// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Card from '@/components/shared/Card'

Vue.config.productionTip = false

export const eventBus = new Vue({
  // methods: {
  //   getAllProducts(products) {
  //     this.$emit('getAllProducts', products)
  //   }
  // }
})

Vue.component('card', Card)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
