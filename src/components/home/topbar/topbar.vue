<style scoped lang="less">
    /*小于812px*/
    @media screen and  (max-width: 812px) {
        .topbar {
            a {
                margin-left: 0px;
            }
        }
        .navbar{
            li{
                margin-left: 15px;
            }
        }
    }
    /*大于812px*/
    @media screen and  (min-width: 812px) {
        .topbar {
            a {
                margin-left: 30px;
            }
        }
        .navbar{
            li{
                margin-left: 10px;
            }
        }
    }
    .topbar {
        position: fixed;
        width: 100%;
        height: 49px;
        z-index: 10;

        img {
            height: 46px;
        }
    }
    /*导航栏*/
    .navbar{
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
            width: 80px;
            height: 21px;

        }

        ul{
            position: relative;
            left: 50%;
            transform: translate(-25%);
        }
    }



</style>

<template>
    <el-row class="topbar" type="flex" align='middle' :style='{"background-color":"rgba(0, 0, 0,"+opacityA+")"}'>
        <el-col :xs="1" :sm="2">
            <a href="javascript:void(0)">
                <img :src="logoImgSrc"/>
            </a>
        </el-col>
<!--        导航栏-->
        <el-col :sm='22' class="navbar">
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

            }
        }
    }
</script>
