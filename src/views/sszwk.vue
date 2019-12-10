<style lang="less" >
    html, body {
        min-width: 850px;
    }
</style>
<template>
    <div>
        <topbar></topbar>
        <sortbar :height="compHeight"></sortbar>
        <imgcardview :height="compHeight"></imgcardview>
        <botbar color="#005359"></botbar>
    </div>
</template>

<script>
    //组件懒加载
    const topbar = () => import('@/components/szwwk/topview/topbar.vue')
    const sortbar = () => import('@/components/szwwk/collsortview/sortbar.vue')
    const imgcardview = () => import('@/components/szwwk/imgview/imgcardview.vue')
    const botbar = () => import('@/components/home/botbar/botbar.vue')



    export default {
        name: 'szwwk',
        components: {
            topbar,
            sortbar,
            imgcardview,
            botbar
        },
        data() {
            return {
                compHeight:Number
            }
        },
        mounted() {
            window.onresize=()=>{
               this.compHeight= window.innerHeight-70-60
            }
        },
        created() {
            this.compHeight=window.innerHeight-70-60
        }
    }
</script>
  