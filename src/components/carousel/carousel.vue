<style scoped>

</style>
<template>
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
</template>
<script>
    export default {
        name: 'carousel',
        data() {
            return {

            }
        },
        props: {
            imgSrc: {
                src: String
            }
        }
    }
</script>