<style lang="less">
    html, body {
        min-width: 1650px;
    }
</style>
<template>
    <div>
        <topbar :menuStruc='this.$store.getters.getMenuList' :hasFixed='false' :opacityA="0.5"></topbar>
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
            //滚动条事件
            window.onscroll = () => {
                //给shadingMap显示的时候加上动画特效
                const shadingMap = document.getElementById('shadingMap')
                // 获取浏览器窗口可视化高度
                const clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                // 获取showp元素顶部到浏览器窗口顶部的距离
                const showTop = shadingMap.getBoundingClientRect().top;

                // 如果距离小于可视化窗口高度，就给showp元素添加动画效果
                if (showTop <= clientH) {
                    this.$store.commit('setShadingMapShow',true)
                    // console.log('setShadingMapShow='+ this.$store.getters.getShadingMapShow)
                }
                else
                {
                    this.$store.commit('setShadingMapShow',false)
                    // console.log('setShadingMapShow='+ this.$store.getters.getShadingMapShow)
                }

                //文创图片加上动画
                const wcAnimation = document.getElementById('wcAnimation')
                // 获取wcAnimation元素顶部到浏览器窗口顶部的距离
                var wcAnimationTop = wcAnimation.getBoundingClientRect().top;
                // 如果距离小于可视化窗口高度，就给wcAnimation元素添加动画效果
                if (wcAnimationTop<=clientH){
                    this.$store.commit('setWcAnimationShow',true)
                    // console.log('setWcAnimationShow='+ this.$store.getters.getWcAnimationShow)
                }
                else
                {
                    this.$store.commit('setWcAnimationShow',false)
                    // console.log('setWcAnimationShow='+ this.$store.getters.getWcAnimationShow)
                }
            }
            
        },
        created() {
            //刚刚打开页面时重置图片大小
            this.m_screenWidth = window.innerWidth //窗口宽度
            this.m_screenHeight = window.innerHeight //窗口高度
        }
    }
</script>
