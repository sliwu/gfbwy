<style scoped lang="less">

    .topbarNoFixed{
 
        width: 100%;
        height: 49px;
        z-index: 10;
        text-align: center;
        img {
            height: 46px;
        }
    }
    .topbar {
        position: fixed;
        width: 100%;
        height: 49px;
        z-index: 10;
        text-align: center;
        img {
            height: 46px;
        }
    }

    /*导航栏*/
    .navbar{
        font-family:"Microsoft YaHei UI";
        font-weight:500 ;
        a{
            font-size: 1.0em;
            color: white;
            text-decoration: none;
        }
        a:hover{
            color: rgb(230, 168, 34);
        }
        li{
            display: inline;
            list-style: none;
            margin: 0 15px 0 15px
        }
    }



</style>

<template>
    <el-row :class="hasFixed ? 'topbarNoFixed' : 'topbar'" type="flex" align='middle' :style='{"background-color":"rgba(0, 0, 0,"+opacityA+")"}'>
        <el-col  :span="2">
            <a href="javascript:void(0)">
                <img :src="logoImgSrc"/>
            </a>
        </el-col>
<!--        导航栏-->
        <el-col :span='22' :psuh="4" class="navbar">
            <ul>
                <li  v-for="item in menuStruc" :key="item.title" >
                    <a :href="item.url">{{item.title}}</a>
                </li>
            </ul>
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
        components: {},
        methods: {},
        props: {
            // 设置菜单列表
            menuStruc: {
                title: String,
                url: String
            },
            // 设置背景颜色透明度
            opacityA: {
                default: 0.5

            },
            hasFixed:{
                default:true
            }
        }
    }
</script>
