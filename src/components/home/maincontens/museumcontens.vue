<style scoped lang="less">
    .middleBL {
        width: 1112px;
        height: 478px;
        border-radius: 10px 10px 10px 10px;
        margin-left: 40px;
        box-shadow: 8px 8px 4px 1px #ccc;

        .shadingMap {
            position: relative;
            left: 450px;
            top: 130px;

        }
    }

    .middleBR {
        border-radius: 10px 10px 10px 10px;
        width: 430px;
        height: 478px;
        box-shadow: 8px 8px 4px 1px #ccc;
    }
/*shadingMap动画特效*/
    @keyframes mapMove
    {
        from {
            top:60px;
            opacity: 0;
        }
        to {
            top:130px;
            opacity: 1;
        }
    }
    @-moz-keyframes mapMove /* Firefox */
    {
        from {
            top:60px;
            opacity: 0;
        }
        to {
            top:130px;
            opacity: 1;
        }
    }
    @-webkit-keyframes mapMove /* Safari 和 Chrome */
    {
        from {
            top:60px;
            opacity: 0;
        }
        to {
            top:130px;
            opacity: 1;
        }
    }
    @-o-keyframes mapMove /* Opera */
    {
        from {
            top:60px;
            opacity: 0;
        }
        to {
            top:130px;
            opacity: 1;
        }
    }
    .shadingMapAnimation {
        /*设置动画绑定*/
        animation: mapMove 5s;
        -moz-animation: mapMove 5s; /* Firefox */
        -webkit-animation: mapMove 5s; /* Safari 和 Chrome */
        -o-animation: mapMove 5s; /* Opera */
        animation-play-state:paused;


    }

</style>
<template>
    <el-row type="flex" justify="center" style="margin-bottom: 80px;">
        <el-col :span="6" class="middleBR">
            <div :style="middleBRImg">

            </div>
        </el-col>

        <el-col :span="18" class="middleBL">
            <div :style="middleBLImg">
                <img id="shadingMap" class="shadingMap shadingMapAnimation" :src="shading" alt="">

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

