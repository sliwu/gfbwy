<style>
    * {
        padding: 0;
        margin: 0;
    }

    .topbar {
        position: absolute;
        width: 100%;
        min-width: 1024px;
        height: 49px;
        background-color: rgb(0, 0, 0, 0.5);
        z-index: 10;
    }

    .menufont-size{
        font-size: 16px;
        color: white;
        text-decoration:none;

    }
    .menufont-size:hover{
        color: rgb(230, 168, 34);
    }
</style>

<template>
    <el-row class="topbar"  type="flex" align='middle' >
        <el-col :span="4">
            <a href="javascript:void(0)">
                <img :src="logoImgSrc" style="height: 46px;" />
            </a>
        </el-col>
        <el-col :span='1' :push="4" v-for="item in menuStruc" :key="item.title">
                <a :href="item.url" class="menufont-size">{{item.title}}</a>
        </el-col>
    </el-row>
</template>

<script>
    import imglogoSrc from "@/assets/logo/logo.png";
    export default {
        name: 'topbar',
        data() {
            return {
                logoImgSrc: imglogoSrc,
            }
        },
        components: {

        },
        methods: {

        },
        props: {
            menuStruc: {
                title: String,
                url: String
            }
        }
    }
</script>