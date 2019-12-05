<style scoped lang="less">

</style>

<template>

        <el-carousel
                :height='height+"px"'
                arrow='hover'
                :interval="4000">
            <el-carousel-item v-for="item in imgSrc" :key="item.id">
                <a :href="item.url">
                    <el-image
                            style="height: 100%"
                            :src='item.src'
                            fit='cover'
                    ></el-image>
                </a>
            </el-carousel-item>
        </el-carousel>

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
                id:Number,
                src: String,
                url:String
            },
            height: Number
        }

    }
</script>
