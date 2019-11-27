import Vue from 'vue'
import VueRouter from 'vue-router'

//组件懒加载
const Home = () => import('@/views/Home.vue')
const szwwk = () => import('@/views/sszwk.vue')
const notfount = () => import('@/views/404.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/szwwk',
        name: 'szwwk',
        component: szwwk
    },
    {
        path: '/home',
        name: 'h_home',
        component: Home
    },
    {
        path: '*',
        name: 'notfount',
        component: notfount
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
