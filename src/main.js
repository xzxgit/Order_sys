import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/about/About'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'

// second route
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
Vue.use(VueRouter)

const routes = [
  {path: '/', name: "homeLink", component: Home},
  {path: '/menu', name: "menuLink", component: Menu},
  {path: '/about', name: 'aboutLink', redirect: '/about/contact', component: About, children: [
    {path: '/about/contact', name: 'contactLink', component: Contact},
    {path: '/about/history', name: 'historyLink', component: History},
    {path: '/about/delivery', name: 'deliveryLink', component: Delivery},
    {path: '/about/orderinGguide', name: 'orderingGuideLink', component: OrderingGuide},
  ]},
  {path: '/admin', name: 'adminLink', component: Admin},
  {path: '/login', name: 'loginLink', component: Login},
  {path: '/register', name: 'registerLink', component: Register},
  {path: '*', redirect: '/'},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// global guard
// router.beforeEach((to, from, next)=>{
//   console.log(to)
//   console.log(from)
//   next()
// })
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
