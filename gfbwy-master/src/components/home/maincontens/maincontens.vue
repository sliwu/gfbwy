<!-- 主体内容宽度一共1580px -->
<style lang='less' scoped>

</style>

<template>
    <div>
        <!-- 上面5块内容 -->
        <topcontens></topcontens>
        <!-- 上半部内容 -->
        <middlecontens></middlecontens>
        <!-- 数字文物库 -->
        <szwwkcontens></szwwkcontens>
        <!-- 博物馆 -->
        <museumcontens></museumcontens>

    </div>
</template>

<script>
    //导入组件

    const topcontens=()=>import('@/components/home/maincontens/topcontens.vue')
    const middlecontens=()=>import('@/components/home/maincontens/newsinfocontens.vue')
    const szwwkcontens=()=>import('@/components/home/maincontens/szwwkcontens.vue')
    const museumcontens=()=>import('@/components/home/maincontens/museumcontens.vue')
    export default {
        name: 'maincontens',
        data() {
            return {

            }
        },

        components: {
            topcontens,
            middlecontens,
            szwwkcontens,
            museumcontens,
        }

    }
</script>
