<style  >
    html, body {
        min-width:1080px;
    }
</style>

<template>
    <div>
        <topbar :menuStruc='this.$store.getters.getMenuList'></topbar>
        <aboutbody></aboutbody>
        <botbar></botbar>
    </div>
</template>

<script>
    const topbar = () => import('@/components/home/topbar/topbar.vue')
    const botbar = () => import('@/components/home/botbar/botbar.vue')
    const aboutbody = () => import('@/components/about/aboutbody.vue')
    export default {
        name: "about",
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            topbar,
            botbar,
            aboutbody
        }
    }

</script>
