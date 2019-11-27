import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        screenWidth: document.documentElement.clientWidth,//屏幕宽度
        screenHeight: document.documentElement.clientHeight,//屏幕高度
        //藏品数量
        collectionQuantity: '1,102,000',
        //声明公告
        bulletinInfo: [
            {
                id: 100,
                title: '【声明】测试123111111111111111114',
                src: '/home',
                date: '11/27'
            },
            {
                id: 101,
                title: '【声明】测试43214124',
                src: '/home',
                date: '11/27'
            },
        ],
        //新闻结构
        newsInfo: [
            {
                id: 0,
                title: '新闻测试',
                src: '/home',
                date: '11/27'
            },
            {
                id: 1,
                title: '新闻测试',
                src: '/home',
                date: '11/27'
            },
            {
                id: 2,
                title: '新闻测试',
                src: '/home',
                date: '11/27'
            }, {
                id: 3,
                title: '新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试新闻测试',
                src: '/home',
                date: '11/27'
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {}
})
