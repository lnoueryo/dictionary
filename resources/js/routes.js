import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Login from './pages/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history', 
  routes,
  base: process.env.MIX_APP_BASE || null,
})

export default router