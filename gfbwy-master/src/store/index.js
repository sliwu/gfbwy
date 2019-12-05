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
        //导航栏内容
        menulist: [{
            title: '首页',
            url: '/home'
        }, {
            title: '新闻',
            url: '/news'
        },{
            title: '文创',
            url: '/wc'
        }, {
            title: '图书馆',
            url: '/books'
        }, {
            title: '视听馆',
            url: '/audio'
        },   {
            title: '数字文物库',
            url: '/szwwk'
        },{
            title: '关于',
            url: '/about'
        }],
        // 主页数字文物库展示
        homeSzwwkImgInfo:[
            {id:Number,src:String,title:String,dynasty:String,description:String},
            {id:Number,src:String,title:String,dynasty:String,description:String},
            {id:Number,src:String,title:String,dynasty:String,description:String},],
        shadingMapShow:false
    },
    mutations: {
        setShadingMapShow(state,isTrue){
            state.shadingMapShow=isTrue
            console.log(isTrue)
        }
    },
    getters:{
        getNewsInfo(state){
            return state.newsInfo
        },
        getBulletinInfo(state){
            return state.bulletinInfo
        },
        getCollectionQuantity(state){
            return state.collectionQuantity
        },
        getScreenWidth(state){
        return state.screenWidth
        },
        getScreenHeight(state){
            return state.screenHeight
        },
        getMenuList(state){
            return state.menulist
        },
        getHomeSzwwkImgInfo(state){
            return state.homeSzwwkImgInfo
        },
        getShadingMapShow(state){
            return state.shadingMapShow
        }

    },
    actions: {},
    modules: {}
})
