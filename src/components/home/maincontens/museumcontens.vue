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
        .shadingCloud {
            position: relative;
            left: 580px;
            top: -400px;
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

        transition: all 2s linear;
        -moz-transition:all 2s linear;/* Firefox 4 */
        -webkit-transition: all 2s linear; /* Safari 和 Chrome */
        -o-transition:all 2s linear; /* Opera */
    }
    .shadingCloud-enter,.shadingCloud-leave-to{
        opacity: 0.0;
        transform: translate(0px,480px);
    }
    .shadingCloud-enter-active,.shadingCloud-leave-active{
        transition: all 2s ease;
        -moz-transition:all 2s ease;/* Firefox 4 */
        -webkit-transition: all 2s ease; /* Safari 和 Chrome */
        -o-transition:all 2s ease; /* Opera */
    }

    .museTitle {
        width: 40%;
        position: relative;
        top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        a {

            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 1.8em;
            margin-left: 10px;
            margin-right: 10px;
        }

        a:hover {
            color: rgb(230, 168, 34);
        }

        .icoRight {
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); /* IE 9 */
            -moz-transform: rotate(180deg); /* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); /* Opera */
        }
    }
</style>
<template>
    <el-row type="flex" justify="center" style="margin-bottom: 80px;">
        <el-col :span="6" class="middleBR">
            <div :style="middleBRImg">

            </div>
        </el-col>


        <a name="museum"></a>
        <el-col :span="18" class="middleBL" name="museum">
            <!--                标题内容-->

            <div :style="middleBLImg" >
                <div class="museTitle">
                    <img class="icoLeft" :src="shadingBack" alt="">
                    <a href="/festival" title="点击进入更多活动">
                        古风
                        <img :src="shadingBackEmico" alt="">
                        活动
                    </a>
                    <img class="icoRight" :src="shadingBack" alt="">
                </div>
                <transition name="shadingMap">
                    <img v-show="$store.getters.getShadingMapShow"  id="shadingMap" class="shadingMap" :src="shading" alt="">
                </transition>
                <transition name="shadingCloud">
                    <img v-show="$store.getters.getShadingMapShow"  class="shadingCloud" :src="shading_cloud" alt="">
                </transition>
            </div>
        </el-col>

    </el-row>
</template>

<script>
    import middleBLImg from "@/assets/background/red2.jpg";
    import middleBRImg from "@/assets/middleBR/1.jpg";
    import shading from "@/assets/background/shading_4.png";
    import shading_cloud from "@/assets/background/shading_5.png";

    import shadingBack from "@/assets/boxlefttop/ico.png";
    import shadingBackEmico from "@/assets/boxlefttop/emico.png";

    export default {
        name: "MuseumContens",
        data() {
            return {
                //标题小挂件
                shadingBack:shadingBack,
                shadingBackEmico:shadingBackEmico,

                shading_cloud:shading_cloud,
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

