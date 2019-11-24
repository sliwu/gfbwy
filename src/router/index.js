import Vue from 'vue'
import VueRouter from 'vue-router'

const Home= ()=>import('@/views/Home.vue')
const szwwk=()=>import('@/views/sszwk.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/szwwk',
    name:'szwwk',
    component:szwwk
  },
  {
    path:'/home',
    name:'h_home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
