<style scoped>

</style>

<template>
<<<<<<< HEAD
    <div><el-carousel 
        height="900px" 
        indicator-position="none"
        arrow='never'
        :interval="4000"
        ><el-carousel-item v-for="item in imgSrc" :key="item.src">
                <el-image 
                style="width: 100%; height: 100%"
                :src='item.src'
                fit='cover'
                ></el-image></el-carousel-item></el-carousel></div>
=======
    <div>
        <el-carousel
                :height='m_screenHeight+"px"'
                arrow='hover'
                :interval="4000"
        >
            <el-carousel-item v-for="item in imgSrc" :key="item.id">
                <a :href="item.url">
                    <el-image
                            style="width: 100%; height: 100%"
                            :src='item.src'
                            fit='cover'
                    ></el-image>
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
>>>>>>> 主页图片布局完成
</template>
<script>
    export default {
        name: 'carousel',
        data() {
            return {
<<<<<<< HEAD

=======
                m_screenWidth: '',
                m_screenHeight: ''
>>>>>>> 主页图片布局完成
            }
        },
        props: {
            imgSrc: {
                src: String
            }
<<<<<<< HEAD
        }
    }
</script>
=======
        },
        mounted() {
            //监听窗口变化改变轮播图大小
            window.onresize = () => { // 定义窗口大小变更通知事件
                this.$store.state.screenWidth = window.innerWidth //窗口宽度
                this.$store.state.screenHeight = window.innerHeight //窗口高度
                this.m_screenWidth = window.innerWidth //窗口宽度
                this.m_screenHeight = window.innerHeight //窗口高度
                // console.log(this.$store.state.screenWidth)
                // console.log('------------------------------')
                // console.log(this.$store.state.screenHeight)
            }
        },
        created(){
            //刚刚打开页面时重置图片大小
            this.m_screenWidth = window.innerWidth //窗口宽度
            this.m_screenHeight = window.innerHeight //窗口高度
        }

    }
</script>
>>>>>>> 主页图片布局完成
