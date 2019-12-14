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
                src: '/news',
                date: '11/27'
            },
            {
                id: 101,
                title: '【声明】测试43214124',
                src: '/news',
                date: '11/27'
            },
        ],
        //新闻结构
        newsInfo: [
            {
                id: 0,
                title: '新闻测试',
                src: '/news',
                date: '11/27',
                imgSrc:"http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg"
            },
            {
                id: 1,
                title: '新闻测试',
                src: '/news',
                date: '11/27',
                imgSrc:"http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg"
            },
            {
                id: 2,
                title: '新闻测试',
                src: '/news',
                date: '11/27',
                imgSrc:"http://g.hiphotos.baidu.com/zhidao/pic/item/c83d70cf3bc79f3d6e7bf85db8a1cd11738b29c0.jpg"
            }, {
                id: 3,
                title: '新闻测试',
                src: '/news',
                date: '11/27',
                imgSrc:"http://youimg1.c-ctrip.com/target/tg/688/660/259/20eedbcd17834ef3ab9730a5dab424d5.jpg"
            },{
                id: 4,
                title: '新闻测试',
                src: '/news',
                date: '11/27',
                imgSrc:"http://youimg1.c-ctrip.com/target/tg/688/660/259/20eedbcd17834ef3ab9730a5dab424d5.jpg"
            },{
                id: 5,
                title: '新闻测试',
                src: '/news',
                date: '11/27',
                imgSrc:"http://youimg1.c-ctrip.com/target/tg/688/660/259/20eedbcd17834ef3ab9730a5dab424d5.jpg"
            },
        ],
        //导航栏内容
        menulist: [{
            title: '首页',
            url: '/home'
        }, {
            title: '新闻',
            url: '/news'
        }, {
            title: '文创',
            url: '/wc'
        }, {
            title: '图书馆',
            url: '/books'
        }, {
            title: '视听馆',
            url: '/listenAudio'
        }, {
            title: '数字文物库',
            url: '/szwwk'
        }, {
            title: '博物院活动',
            url: '/festival'
        }, {
            title: '关于',
            url: '/about'
        }],
        // 主页数字文物库展示
        homeSzwwkImgInfo: [
            {id: Number, src: String, title: String, dynasty: String, description: String},
            {id: Number, src: String, title: String, dynasty: String, description: String},
            {id: Number, src: String, title: String, dynasty: String, description: String},],
        //博物馆活动地图显示状态
        shadingMapShow: false,
        //文创图片显示状态
        wcAnimationShow: false
    },
    mutations: {
        setShadingMapShow(state, isTrue) {
            state.shadingMapShow = isTrue

        },
        setWcAnimationShow(state, isTrue) {
            state.wcAnimationShow = isTrue

        }
    },
    getters: {
        getNewsInfo(state) {
            return state.newsInfo
        },
        getBulletinInfo(state) {
            return state.bulletinInfo
        },
        getCollectionQuantity(state) {
            return state.collectionQuantity
        },
        getScreenWidth(state) {
            return state.screenWidth
        },
        getScreenHeight(state) {
            return state.screenHeight
        },
        getMenuList(state) {
            return state.menulist
        },
        getHomeSzwwkImgInfo(state) {
            return state.homeSzwwkImgInfo
        },
        getShadingMapShow(state) {
            return state.shadingMapShow
        },
        getWcAnimationShow(state) {
            return state.wcAnimationShow
        }

    },
    actions: {},
    modules: {}
})
