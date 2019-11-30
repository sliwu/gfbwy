<style lang="less">

</style>
<template>
    <div>
        <topbar :menuStruc='menulist'></topbar>
        <carousel :imgSrc='imgSrc' :height="m_screenHeight"></carousel>
        <maincontens></maincontens>
        <botbar></botbar>
    </div>
</template>

<script>
    //组件懒加载
    const topbar = () => import('@/components/home/topbar/topbar.vue')
    const carousel = () => import('@/components/home/carousel/carousel.vue')
    const maincontens = () => import('@/components/home/maincontens/maincontens.vue')
    const botbar = () => import('@/components/home/botbar/botbar.vue')

    //图片路径导入
    import bgImg1 from "@/assets/homeimg/1.jpg";
    import bgImg2 from "@/assets/homeimg/2.jpg";
    import bgImg3 from "@/assets/homeimg/3.jpg";
    import bgImg4 from "@/assets/homeimg/4.jpg";


    export default {
        name: 'home',
        components: {
            topbar,
            carousel,
            maincontens,
            botbar
        },
        data() {
            return {
                //导航栏内容
                menulist: [{
                    title: '首页',
                    url: '/home'
                }, {
                    title: '导览',
                    url: '/home'
                }, {
                    title: '展览',
                    url: '/home'
                }, {
                    title: '教育',
                    url: '/home'
                }, {
                    title: '探索',
                    url: '/home'
                }, {
                    title: '学术',
                    url: '/home'
                }, {
                    title: '文创',
                    url: '/home'
                }, {
                    title: '关于',
                    url: '/home'
                }, {
                    title: '数字文物库',
                    url: '/szwwk'
                }],
                //图片地址
                imgSrc: [
                    {
                        id: 0,
                        src: bgImg1,
                        url: '/szwwk'
                    },
                    {
                        id: 1,
                        src: bgImg2,
                        url: '/szwwk'
                    },
                    {
                        id: 2,
                        src: bgImg3,
                        url: '/szwwk'
                    },
                    {
                        id: 3,
                        src: bgImg4,
                        url: '/szwwk'
                    }
                ],
                //  屏幕大小信息
                m_screenWidth: Number,
                m_screenHeight: Number
            }
        },
        mounted() {
            //监听窗口变化改变轮播图大小
            window.onresize = () => { // 定义窗口大小变更通知事件
                this.m_screenWidth = window.innerWidth //窗口宽度
                this.m_screenHeight = window.innerHeight //窗口高度

            }
        },
        created() {
            //刚刚打开页面时重置图片大小
            this.m_screenWidth = window.innerWidth //窗口宽度
            this.m_screenHeight = window.innerHeight //窗口高度
        }
    }
</script>
