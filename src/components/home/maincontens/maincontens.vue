<!-- 主体内容宽度一共1580px -->
<style lang='less' scoped>

    .boxcenter {
        width: 928px;
        height: 940px;
    }

    .boxlefttopL {
        width: 464px;
        height: 464px;
        background-color: #7a2221;
        .boxlefttopLZx {

            width: 380px;

            position: relative;
            top: 60px;
            left: 40px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: white;

            a {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
                color: white;
                font-size: 1.2em;
                display: block;
            }

            span {
                line-height: 40px;
            }

            img {

                vertical-align: middle;
            }


        }

        .boxlefttopLNew {
            width: 390px;
            margin-top: 30px;
            padding-top: 10px;
            border-top: 1px solid #ccc;

            position: relative;
            left: 40px;
            top: 50px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: white;

            ul {
                list-style: none;

            }

            li {

                line-height: 35px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            p {
                font-size: 1.2em;
            }

            a {
                font-size: 1.0em;
                text-decoration: none;
                color: white;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;

            }

            img {
                margin-right: 20px;
                vertical-align: middle;
            }

            .datePosition {
                float: right;

            }

        }

        .aTitle {
            position: relative;
            left: 50%;
            top: 30px;
            transform: translate(-25%);
        }


    }

    .boxlefttopR {
        width: 464px;
        height: 464px;
        background-color: black;
    }

    .boxleftB {
        margin-top: 40px;
        width: 928px;
        height: 434px;
    }

    .boxleftBL {
        width: 464px;
        height: 434px
    }

    .boxright {
        margin-left: 40px;
        width: 612px;
        height: 940px;
        font-weight: bold;
        text-shadow: 2px 2px 4px #000000;
    }

    //动画定义
    @keyframes boxrightLAnimation {
        from {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg); /* IE 9 */
            -webkit-transform: rotate(0deg); /* Safari and Chrome */
            -o-transform: rotate(0deg); /* Opera */
            -moz-transform: rotate(0deg); /* Firefox */
        }
        to {
            transform: rotate(360deg);
            -ms-transform: rotate(360deg); /* IE 9 */
            -webkit-transform: rotate(360deg); /* Safari and Chrome */
            -o-transform: rotate(360deg); /* Opera */
            -moz-transform: rotate(360deg); /* Firefox */
        }
    }

    @-moz-keyframes boxrightLAnimation /* Firefox */ {
        from {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg); /* IE 9 */
            -webkit-transform: rotate(0deg); /* Safari and Chrome */
            -o-transform: rotate(0deg); /* Opera */
            -moz-transform: rotate(0deg); /* Firefox */
        }
        to {
            transform: rotate(360deg);
            -ms-transform: rotate(360deg); /* IE 9 */
            -webkit-transform: rotate(360deg); /* Safari and Chrome */
            -o-transform: rotate(360deg); /* Opera */
            -moz-transform: rotate(360deg); /* Firefox */
        }
    }

    @-webkit-keyframes boxrightLAnimation /* Safari 和 Chrome */ {
        from {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg); /* IE 9 */
            -webkit-transform: rotate(0deg); /* Safari and Chrome */
            -o-transform: rotate(0deg); /* Opera */
            -moz-transform: rotate(0deg); /* Firefox */
        }
        to {
            transform: rotate(360deg);
            -ms-transform: rotate(360deg); /* IE 9 */
            -webkit-transform: rotate(360deg); /* Safari and Chrome */
            -o-transform: rotate(360deg); /* Opera */
            -moz-transform: rotate(360deg); /* Firefox */
        }
    }

    @-o-keyframes boxrightLAnimation /* Opera */ {
        from {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg); /* IE 9 */
            -webkit-transform: rotate(0deg); /* Safari and Chrome */
            -o-transform: rotate(0deg); /* Opera */
            -moz-transform: rotate(0deg); /* Firefox */
        }
        to {
            transform: rotate(360deg);
            -ms-transform: rotate(360deg); /* IE 9 */
            -webkit-transform: rotate(360deg); /* Safari and Chrome */
            -o-transform: rotate(360deg); /* Opera */
            -moz-transform: rotate(360deg); /* Firefox */
        }
    }

    .boxrightLAnimation {
        /*设置动画绑定*/
        animation: boxrightLAnimation 20s;
        -moz-animation: boxrightLAnimation 20s; /* Firefox */
        -webkit-animation: boxrightLAnimation 20s; /* Safari 和 Chrome */
        -o-animation: boxrightLAnimation 20s; /* Opera */
        /*设置动画无线循环*/
        animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite; /* Firefox */
        -webkit-animation-iteration-count: infinite; /* Safari 和 Chrome */
        -o-animation-iteration-count: infinite; /* Opera */
        /*播放速度平滑*/
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear; /* Safari 和 Chrome */
        -moz-animation-timing-function: linear; /* Firefox */
        -o-animation-timing-function: linear; /* Opera */

    }

    .boxrightSize {
        width: 175px;
        height: 175px;

    }

    .boxrightText {
        box-shadow: 8px 8px 4px 1px #ccc;
        text-align: center;


        a {
            text-decoration: none;

            em {
                color: white;
                font-style: normal;
                font-size: 1.2em;
            }
        }

        a:hover {
            em {
                color: rgb(230, 168, 34);
            }
        }
        .marginSpacing{
            margin-top: 15px;
        }

    }

    .boxrightL {
        background-color: #884c00;
        width: 204px;
        height: 292px;

    }

    .boxrightM {
        background-color: #774300;
        width: 204px;
        height: 292px;

    }

    .boxrightR {
        background-color: #884c00;
        width: 204px;
        height: 292px;

    }

    .boxrightB {
        margin-top: 40px;
        width: 612px;
        height: 608px;

    }

    .middleC {
        width: 386px;
        height: 464px;
        margin-right: 40px;

        .collectionQuantity {
            font-family: Microsoft YaHei UI, serif;
            font-size: 2.8em;
            color: white;
            /*设置div距离*/
            position: absolute;
            top: 180px;
            width: 386px;
            height: 60px;
            /*文字居中*/
            text-align: center;
            overflow: hidden;

            img {
                /*设置图片对齐DIV顶部使图片居中*/
                vertical-align: top;

                /*固定图标在右边位置不受文字影响*/
                position: absolute;
                left: 80%;
            }
        }

        .collectionIco1 {

            width: 386px;
            height: 48px;
            position: absolute;
            top: 260px;

            display: flex;
            align-items: center;
            justify-content: center;

            a {
                text-decoration: none;
                color: white;
            }

            a:hover {
                color: rgb(230, 168, 34);
            }

            span {

                font-size: 1.2em;
                position: absolute;
                left: 50%;
                top: 50%;
                /*移动自身*/
                transform: translate(-50%, -50%);
            }

            img {
                vertical-align: bottom;
            }

        }

        .collectionIco2 {
            position: absolute;
            top: 380px;

            width: 386px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            a {
                text-decoration: none;
                color: white;
            }

            a:hover {
                color: rgb(230, 168, 34);
            }

            span {

                font-size: 1.2em;
                position: absolute;
                left: 50%;
                top: 50%;
                /*移动自身*/
                transform: translate(-50%, -50%);
            }

            img {
                vertical-align: middle;

            }
        }

    }

    .middleCL {
        width: 386px;
        height: 464px;

    }

    .middleCM {
        width: 386px;
        height: 464px;

    }

    .middleCR {
        width: 386px;
        height: 464px;

    }

    .middleBL {
        width: 1112px;
        height: 478px;

        margin-right: 40px;
    }

    .middleBR {
        width: 430px;
        height: 478px;

    }

    .bottomC {
        font-weight: bold;
        text-shadow: 2px 2px 4px #000000;
        margin-top: 30px;
        margin-bottom: 30px;
        height: 280px;

        a {
            text-decoration: none;
        }
    }

    .bottomB1 {
        width: 316px;
        height: 280px;
        background-color: #2e7283;
        box-shadow: 8px 8px 4px 1px #ccc;
        text-align: center;

        div em {
            color: white;
            font-style: normal;
            font-size: 1.5em;
            position: relative;
            top: 230px;
            letter-spacing: 10px;
        }

        a:hover {
            em {
                color: rgb(230, 168, 34);
            }
        }
    }

    .bottomB2 {
        width: 316px;
        height: 280px;
        background-color: #2a6776;
        box-shadow: 8px 8px 4px 1px #ccc;
        text-align: center;

        div em {
            color: white;
            font-style: normal;
            font-size: 1.5em;
            position: relative;
            top: 230px;
            letter-spacing: 10px;
        }

        a:hover {
            em {
                color: rgb(230, 168, 34);
            }
        }
    }

    .bottomB3 {
        width: 316px;
        height: 280px;
        background-color: #2e7283;
        box-shadow: 8px 8px 4px 1px #ccc;
        text-align: center;

        div em {
            color: white;
            font-style: normal;
            font-size: 1.5em;
            position: relative;
            top: 230px;
            letter-spacing: 5px;
        }

        a:hover {
            em {
                color: rgb(230, 168, 34);
            }
        }

    }

    .bottomB4 {
        width: 316px;
        height: 280px;
        background-color: #2a6776;
        box-shadow: 8px 8px 4px 1px #ccc;
        text-align: center;

        div em {
            color: white;
            font-style: normal;
            font-size: 1.5em;
            position: relative;
            top: 230px;
            letter-spacing: 10px;
        }

        a:hover {
            em {
                color: rgb(230, 168, 34);
            }
        }
    }

    .bottomB5 {
        width: 316px;
        height: 280px;
        background-color: #2e7283;
        box-shadow: 8px 8px 4px 1px #ccc;
        text-align: center;

        div em {
            color: white;
            font-style: normal;
            font-size: 1.5em;
            position: relative;
            top: 230px;
            letter-spacing: 10px;
        }

        a:hover {
            em {
                color: rgb(230, 168, 34);
            }
        }
    }

</style>

<template>
    <div>

        <!-- 最下面内容 -->
        <el-row type="flex" justify="center" class="bottomC">
            <el-col :span="4" class="bottomB1" style="display: flex;align-items: center;justify-content: center">
                <a href="">
                    <div :style="bottomCImg1">
                        <em>如意苑</em>
                    </div>
                </a>
            </el-col>
            <el-col :span="4" class="bottomB2" style="display: flex;align-items: center;justify-content: center">
                <a href="">
                    <div :style="bottomCImg2">
                        <em>乐 殿</em>
                    </div>
                </a>
            </el-col>
            <el-col :span="4" class="bottomB3" style="display: flex;align-items: center;justify-content: center">
                <a href="">
                    <div :style="bottomCImg3">
                        <em>文创产品</em>
                    </div>
                </a>
            </el-col>
            <el-col :span="4" class="bottomB4" style="display: flex;align-items: center;justify-content: center">
                <a href="">
                    <div :style="bottomCImg4">
                        <em>图书馆</em>
                    </div>

                </a>
            </el-col>
            <el-col :span="4" class="bottomB5" style="display: flex;align-items: center;justify-content: center">
                <a href="">
                    <div :style="bottomCImg5">
                        <em>试听馆</em>
                    </div>


                </a>
            </el-col>
        </el-row>

        <!-- 上半部内容 -->
        <el-row type="flex" justify="center" style=" margin-top: 40px;margin-bottom: 40px;">
<!--            新闻模块-->
            <el-col class="boxcenter" :span="16">
                <!-- 左上角模块 -->
                <el-row>
                    <!--                    左新闻图-->
                    <el-col :span="12" class="boxlefttopL">
                        <div >
                            <!-- 标题图片-->
                            <div class="aTitle">
                                <a href="#" title="点击进入更多新闻">
                                    <img :src="boxLeftTopLTitleSrc" alt="">
                                </a>
                            </div>
                            <!--                            主题内容-->
                            <div class="boxlefttopLZx">
                                <!--                                声明标题-->
                                <a :href="item.src" :title="item.title" v-for="item in bulletinInfo" :key="item.id">
                                    <img :src="boxLeftTopLIcoSrc" alt=""> <span>{{item.title}}</span>
                                    <br>
                                </a>

                            </div>
                            <!--                                新闻内容-->
                            <div class="boxlefttopLNew">
                                <ul>
                                    <li v-for="item in newsInfo"
                                        :key="item.id">
                                        <p class="datePosition">{{item.date}}</p>

                                        <a :href="item.src" :title="item.title">
                                            <img :src="boxLeftTopLIcoSrc" alt="">
                                            <span>{{item.title}}</span>
                                            <br>
                                        </a>

                                    </li>
                                </ul>
                            </div>

                        </div>
                    </el-col>
                    <!--                    视频-->
                    <el-col :span="12" class="boxlefttopR"
                            style="display: flex;justify-content: center;align-items: center">
                        <!--                        <div :style="boxlefttopRsrcStyle">-->
                        <!--                        </div>-->
                        <div>
                            <keep-alive>
                                <component :is="changeVideo" @changeFlag="palyVideo"></component>
                            </keep-alive>
                            <a href="javascript:" title="播放" >
                                <img :src="videoPaly" alt="播放" @click="palyVideo" style="opacity:0.8;">
                            </a>
                        </div>

                    </el-col>
                </el-row>
                <!-- 左下角 -->
                <el-row class="boxleftB" :style="boxleftBBgimgSrcStyle">
                    <el-col :span="12" class="boxleftBL">
                        <div>

                        </div>
                    </el-col>
                    <el-col :span="12" class="boxleftBL">
                        <div>

                        </div>
                    </el-col>
                </el-row>
            </el-col>
<!--            订票、地图、博物馆活动-->
            <el-col :span="8" class="boxright">
                <!-- 右上角內容 -->
                <el-row class="boxrightText">
                    <el-col :span="8" class="boxrightL"
                            style="display: flex;align-items: center;justify-content: center">
                        <a href="">
                            <div :style="boxrightLIco1" class="boxrightSize boxrightLAnimation"
                                 @mouseleave="boxrightLAnimatioOver" @mouseenter="boxrightLAnimatioEnter">
                            </div>
                            <div class="marginSpacing">
                                <em>订 票 系 统</em>
                            </div>
                        </a>

                    </el-col>
                    <el-col :span="8" class="boxrightM"
                            style="display: flex;align-items: center;justify-content: center">
                        <a href="">
                            <div :style="boxrightLIco2" class="boxrightSize boxrightLAnimation"
                                 @mouseleave="boxrightLAnimatioOver" @mouseenter="boxrightLAnimatioEnter">
                            </div>
                            <div class="marginSpacing">
                                <em>地 图</em>
                            </div>
                        </a>
                    </el-col>
                    <el-col :span="8" class="boxrightR"
                            style="display: flex;align-items: center;justify-content: center">
                        <a href="">
                            <div :style="boxrightLIco3" class="boxrightSize boxrightLAnimation"
                                 @mouseleave="boxrightLAnimatioOver" @mouseenter="boxrightLAnimatioEnter">
                            </div>
                            <div class="marginSpacing">
                                <em>博物馆活动</em>
                            </div>
                        </a>
                    </el-col>
                </el-row>
                <!-- 右下角 -->
                <el-row>
                    <el-col :span="24" class="boxrightB">
                        <div :style="boxrightBImg">

                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <!-- 中上内容 -->
        <el-row type="flex" justify="center" style="margin-bottom: 40px;">
            <el-col :span="6" class="middleC">
                <div :style="collectionQuantityImgStyle">
                    <div class="collectionIco1">
                        <a href="/szwwk">
                            <img :src="collectionIcoSrc1" alt="">
                            <span>藏品分类查询</span>
                        </a>
                    </div>
                    <div class="collectionIco2">
                        <a href="/szwwk">
                            <img :src="collectionIcoSrc2" alt="">
                            <span>数字文物库</span>
                        </a>
                    </div>
                    <div class="collectionQuantity">
                        <span>{{collectionQuantity}}</span>
                        <img :src="collectionIcoSrc" alt="">
                    </div>

                </div>
            </el-col>
            <el-col :span="6" class="middleCL">
                <div :style="middleCLImg1">

                </div>
            </el-col>
            <el-col :span="6" class="middleCM">
                <div :style="middleCLImg2">

                </div>
            </el-col>
            <el-col :span="6" class="middleCR">
                <div :style="middleCLImg3">

                </div>
            </el-col>
        </el-row>

        <!-- 中下内容 -->
        <el-row type="flex" justify="center" style="margin-bottom: 40px;">
            <el-col :span="18" class="middleBL">
                <div :style="middleBLImg">

                </div>
            </el-col>
            <el-col :span="6" class="middleBR">
                <div :style="middleBRImg">

                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>

    //导入图片
    import collectionQuantitySrc from "@/assets/middlebottom/gf_collection.jpg";
    import collectionIcoSrc from "@/assets/middlebottom/gf_collectionIco.png";
    import collectionIcoSrc1 from "@/assets/middlebottom/gf_collectionIco1.png";
    import collectionIcoSrc2 from "@/assets/middlebottom/gf_collectionIco2.png";

    import boxLeftTopLIcoSrc from "@/assets/boxlefttop/emico.png";
    import boxLeftTopLTitleSrc from "@/assets/boxlefttop/title.png";

    import boxleftBBgimgSrc from "@/assets/boxleftB/szdbg.jpg";
    import boxrightLIco1 from "@/assets/boxrightL/1.png";
    import boxrightLIco2 from "@/assets/boxrightL/2.png";
    import boxrightLIco3 from "@/assets/boxrightL/3.png";
    import boxrightBImg from "@/assets/boxrightB/1.jpg";
    import middleCLImg1 from "@/assets/middleCL/1.jpg";
    import middleCLImg2 from "@/assets/middleCL/2.jpg";
    import middleCLImg3 from "@/assets/middleCL/3.jpg";
    import middleBLImg from "@/assets/middleBL/1.jpg";
    import middleBRImg from "@/assets/middleBR/1.jpg";
    import bottomCImg1 from "@/assets/bottomC/1.png";
    import bottomCImg2 from "@/assets/bottomC/2.png";
    import bottomCImg3 from "@/assets/bottomC/3.png";
    import bottomCImg4 from "@/assets/bottomC/4.png";
    import bottomCImg5 from "@/assets/bottomC/5.png";
    import videoPaly from "@/assets/boxlefttop/video_play.png";

    //导入组件
    const showvideo = () => import('@/components/home/maincontens/showvideo.vue')

    export default {
        name: 'maincontens',
        data() {
            return {
                //订票系统、地图、博物馆活动
                boxrightLIco1: {
                    'background-image': 'url(' + boxrightLIco1 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',


                },
                boxrightLIco2: {
                    'background-image': 'url(' + boxrightLIco2 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',

                },
                boxrightLIco3: {
                    'background-image': 'url(' + boxrightLIco3 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',

                },

                //票务系统
                boxrightBImg: {
                    'background-image': 'url(' + boxrightBImg + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '612px',
                    height: '608px'

                },

                //古风藏品模块
                collectionQuantityImgStyle: {
                    'background-image': 'url(' + collectionQuantitySrc + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '386px',
                    height: '464px'
                },
                collectionIcoSrc: collectionIcoSrc,
                collectionIcoSrc1: collectionIcoSrc1,
                collectionIcoSrc2: collectionIcoSrc2,

                //古风咨询
                boxLeftTopLIcoSrc: boxLeftTopLIcoSrc,
                boxLeftTopLTitleSrc: boxLeftTopLTitleSrc,

                //数字文物库图片
                boxleftBBgimgSrcStyle: {
                    'background-image': 'url(' + boxleftBBgimgSrc + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '928px',
                    height: '434px'
                },

                //藏品分类图片
                middleCLImg1: {
                    'background-image': 'url(' + middleCLImg1 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg2: {
                    'background-image': 'url(' + middleCLImg2 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg3: {
                    'background-image': 'url(' + middleCLImg3 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '386px',
                    height: '464px'
                },

                //博物馆活动模块
                middleBLImg: {
                    'background-image': 'url(' + middleBLImg + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '1112px',
                    height: '478px'

                },

                //博物馆活动图片
                middleBRImg: {
                    'background-image': 'url(' + middleBRImg + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    width: '430px',
                    height: '478px'
                },

                //五个模块 如意苑、乐殿、文创产品、图书馆、试听馆
                bottomCImg1: {

                    'background-image': 'url(' + bottomCImg1 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px',


                },
                bottomCImg2: {

                    'background-image': 'url(' + bottomCImg2 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px',
                },
                bottomCImg3: {

                    'background-image': 'url(' + bottomCImg3 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px'
                },
                bottomCImg4: {

                    'background-image': 'url(' + bottomCImg4 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px'
                },
                bottomCImg5: {

                    'background-image': 'url(' + bottomCImg5 + ')',
                    'background-repeat': 'no-repeat',
                    'background-position-x': 'center',
                    'background-position-y': 'center',
                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px'
                },

                //结构定义
                newsInfo: this.$store.state.newsInfo,
                bulletinInfo: this.$store.state.bulletinInfo,

                //在store中获取修改藏品总数量
                collectionQuantity: this.$store.state.collectionQuantity,
                //播放图标
                videoPaly: videoPaly,
                //播放标记
                videoPalyflag: false

            }
        },
        methods: {
            boxrightLAnimatioOver(obj) {
                //鼠标离开运行动画
                obj.target.style.animationPlayState = 'running';

            },
            boxrightLAnimatioEnter(obj) {
                //鼠标在元素上暂停动画
                obj.target.style.animationPlayState = 'paused';
            },
            palyVideo() {
                //播放flag
                //更改标记
                this.videoPalyflag = !this.videoPalyflag

            }
        },
        computed: {
            changeVideo() {
                //播放flag=真就显示播放
                return this.videoPalyflag == true ? 'showvideo' : ''
            }
        },
        components: {
            showvideo
        }

    }
</script>
