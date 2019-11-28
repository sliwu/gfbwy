<style lang="less" >
html,body{

}
</style>
<template>
    <div>
        <topbar></topbar>
        <sortbar :height="sortHeight"></sortbar>
        <imgcardview :height="imgHeight" :width="imgWidth"></imgcardview>
    </div>
</template>

<script>
    //组件懒加载
    const topbar = () => import('@/components/szwwk/topview/topbar.vue')
    const sortbar = () => import('@/components/szwwk/collsortview/sortbar.vue')
    const imgcardview = () => import('@/components/szwwk/imgview/imgcardview.vue')


    //图片路径导入
    // import bgImg from "@/assets/homeimg/1.jpg";
    // import bgImg2 from "@/assets/homeimg/2.jpg";

    export default {
        name: 'szwwk',
        components: {
            topbar,
            sortbar,
            imgcardview
        },
        data() {
            return {
                imgWidth: Number,
                imgHeight: Number,
                sortHeight:Number
            }
        },
        mounted() {
            window.onresize=()=>{
                this.imgWidth=window.innerWidth-210 //窗口宽度
                this.imgHeight=window.innerHeight-70 //窗口宽度
                this.sortHeight=window.innerHeight-70
            }

        },
        created() {
            this.imgWidth=window.innerWidth-210 //窗口宽度
            this.imgHeight=window.innerHeight-70 //窗口宽度
            this.sortHeight=window.innerHeight-70
        }
    }
</script>
  