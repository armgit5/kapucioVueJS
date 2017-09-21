// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import { routes } from './routers'
import Card from '@/components/shared/Card'


Vue.config.productionTip = false

// Router Setup
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

// Share card component
Vue.component('card', Card)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
