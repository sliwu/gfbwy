<style scoped>
    .topbar {
        position:fixed;
        width: 100%;
        height: 49px;
        z-index: 10;
    }
    /* 不设置宽度会被挤小 */
    .menusize{
        width: 80px;
        height: 21px;
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
    <el-row class="topbar"  type="flex" align='middle' :style='{"background-color":"rgba(0, 0, 0,"+opacityA+")"}'>
        <el-col :span="4" style="margin-left: 30px;">
            <a href="javascript:void(0)">
                <img :src="logoImgSrc" style="height: 46px;" />
            </a>
        </el-col>
        <el-col :span='1' :push="4" v-for="item in menuStruc" :key="item.title" class="menusize">
                <a :href="item.url" class="menufont-size">{{item.title}}</a>
        </el-col>
    </el-row>
</template>

<script>
    import imglogoSrc from "@/assets/logo/logo.png"
    export default {
        name: 'topbar',
        data() {
            return {
                logoImgSrc: imglogoSrc
            }
        },
        components: {

        },
        methods: {
            
        },
        props: {
            // 设置菜单列表
            menuStruc: {
                title: String,
                url: String
            },
            // 设置背景颜色透明度
            opacityA:{
                default:0.5
                
            }    
        }
    }
</script>
