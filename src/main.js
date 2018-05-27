import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import {store} from './store/store.js'
import {routes} from './routes' 
// import mock from './mock'

Vue.use(VueRouter)
// require('./mock.js') 

const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   return {x:0, y:100}
  // }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
