<style  lang="less" scoped>
    .middleBL {
        width: 1112px;
        height: 478px;
        border-radius: 10px 10px 10px 10px;
        margin-left: 40px;
        box-shadow: 8px 8px 4px 1px #ccc;

        .shadingMap {
            position: relative;
            left: 380px;
            top: 130px;

        }
    }

    .middleBR {
        border-radius: 10px 10px 10px 10px;
        width: 430px;
        height: 478px;
        box-shadow: 8px 8px 4px 1px #ccc;
    }

    .shadingMap-enter,.shadingMap-leave-to{
        opacity: 0.0;
        transform: translate(0px,-180px);

    }
    .shadingMap-enter-active,.shadingMap-leave-active{

        transition: all 4s linear;
        -moz-transition:all 4s linear;/* Firefox 4 */
        -webkit-transition: all 4s linear; /* Safari 和 Chrome */
        -o-transition:all 4s linear; /* Opera */
    }
</style>
<template>
    <el-row type="flex" justify="center" style="margin-bottom: 80px;">
        <el-col :span="6" class="middleBR">
            <div :style="middleBRImg">

            </div>
        </el-col>

        <el-col :span="18" class="middleBL">
            <div :style="middleBLImg" >
                <transition name="shadingMap">
                    <img v-show="$store.getters.getShadingMapShow"  id="shadingMap" class="shadingMap" :src="shading" alt="">
                </transition>
            </div>
        </el-col>

    </el-row>
</template>

<script>
    import middleBLImg from "@/assets/background/red2.jpg";
    import middleBRImg from "@/assets/middleBR/1.jpg";
    import shading from "@/assets/background/shading_4.png";

    export default {
        name: "MuseumContens",
        data() {
            return {
                shading: shading,
                //博物馆活动模块
                middleBLImg: {
                    'background': `url(${middleBLImg})`,
                    width: '1112px',
                    height: '478px',
                    'border-radius': '10px 10px 10px 10px'
                },
                //博物馆活动图片
                middleBRImg: {
                    'background': `url(${middleBRImg}) center center no-repeat`,
                    width: '430px',
                    height: '478px',
                    'border-radius': '10px 10px 10px 10px'
                },

            }
        },
    }
</script>

