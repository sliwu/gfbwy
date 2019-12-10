<style lang="less">
    html, body {
        min-width: 850px;
    }
</style>

<template>
    <div>
        <topbar :menuStruc='this.$store.getters.getMenuList'></topbar>
        <botbar></botbar>
    </div>
</template>

<script>
    const topbar = () => import('@/components/home/topbar/topbar.vue')
    const botbar = () => import('@/components/home/botbar/botbar.vue')
    export default {
        name: "wc",
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            topbar,
            botbar
        }
    }

</script>
