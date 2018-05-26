// first route
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

export const routes = [
    {path: '/', name: "homeLink", components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
    }},
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