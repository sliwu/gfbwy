import Vue from 'vue'
import VueRouter from 'vue-router'

//组件懒加载
//首页
const Home = () => import('@/views/Home.vue')
// 数字文物库
const szwwk = () => import('@/views/sszwk.vue')
//404
const notfount = () => import('@/views/404.vue')
//新闻
const news = () => import('@/views/news.vue')
//文创
const wc = () => import('@/views/wc.vue')
//关于
const about = () => import('@/views/about.vue')
//图书馆
const books = () => import('@/views/books.vue')
//试听馆
const audio = () => import('@/views/audio.vue')

Vue.use(VueRouter)

const routes = [
    {
        //首页
        path: '/',
        name: 'home',
        component: Home
    },
    {
        //数字文物库
        path: '/szwwk',
        name: 'szwwk',
        component: szwwk
    },
    {
        // 首页
        path: '/home',
        name: 'h_home',
        component: Home
    },
    {
        // 新闻
        path: '/news',
        name: 'news',
        component: news
    },
    {
        //文创产品
        path: '/wc',
        name: 'wc',
        component: wc
    },
    {
        //图书馆
        path: '/books',
        name: 'books',
        component: books
    },
    {
        //试听馆
        path: '/audio',
        name: 'audio',
        component: audio
    },
     {
         //关于
        path: '/about',
        name: 'about',
        component: about
    },
    {
        //404页面
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
