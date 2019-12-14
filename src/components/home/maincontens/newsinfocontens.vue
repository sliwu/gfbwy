<style scoped lang="less">
    .boxcenter {
        width: 928px;
        height: 940px;

    }

    .boxlefttopL {

        width: 464px;
        height: 464px;
        border-radius: 10px 0 0 10px;
        /*声明*/

        .boxlefttopLZx {

            width: 380px;
            position: relative;
            top: 90px;
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

            a:hover {
                color: rgb(230, 168, 34);
            }

            span {
                line-height: 40px;
            }

            img {

                vertical-align: middle;
            }


        }

        /*新闻*/

        .boxlefttopLNew {
            width: 390px;
            margin-top: 30px;
            padding-top: 10px;
            border-top: 1px solid #ccc;

            position: relative;
            left: 40px;
            top: 80px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: white;


            ul {
                list-style: none;
                
            }

            li {
                margin-left: 10px;
                line-height: 35px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            p {
                font-size: 1.2em;
            }

            a {
                font-family: "Microsoft YaHei UI";
         
                font-size: 1.1em;
                text-decoration: none;
                color: white;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;

            }

            a:hover {
                color: rgb(230, 168, 34);
            }

            img {
                margin-right: 20px;
                vertical-align: middle;
            }

            .datePosition {
                float: right;
                font-size: 1.0em;
                margin-right: 8px;
            }

        }

        /*古风咨询*/

        .aTitle {
            width: 100%;
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


    }

    .boxlefttopR {
        border-radius: 0 10px 10px 0;
        width: 464px;
        height: 464px;
        background-color: black;
    }

    .boxleftB {
        margin-top: 40px;
        width: 928px;
        height: 434px;
        box-shadow: 8px 8px 4px 1px #ccc;
    }

    .boxleftBL {
        width: 464px;
        height: 434px;
        /*屏风*/

        .img_1 {

            position: absolute;
            left: 550px;
            top: 150px;
        }

        /*扇子*/

        .img_2 {

            position: absolute;
            left: 230px;
            top: 40px;

        }

        /*titile*/

        .img_3 {
            position: absolute;
            left: 260px;
            top: 300px;
        }

        /*诗句*/

        .img_4 {
            position: absolute;
            left: 700px;
            top: 50px;
        }

        /*竹子*/

        .img_5 {
            position: absolute;
            left: -25px;
            top: 32px;
        }
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

        border-radius: 10px 10px 10px 10px;
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

        .marginSpacing {
            margin-top: 15px;
        }

    }

    .boxrightL {
        border-radius: 10px 10px 10px 10px;
        box-shadow: 8px 8px 4px 1px #ccc;
        background-color: #606746;
        width: 204px;
        height: 292px;

    }

    .boxrightM {
        border-radius: 10px 10px 10px 10px;
        box-shadow: 8px 8px 4px 1px #ccc;
        background-color: #575d3f;
        width: 204px;
        height: 292px;

    }

    .boxrightR {
        border-radius: 10px 10px 10px 10px;
        box-shadow: 8px 8px 4px 1px #ccc;
        background-color: #606746;
        width: 204px;
        height: 292px;

    }

    .boxrightB {
        border-radius: 10px 10px 10px 10px;
        margin-top: 40px;
        width: 612px;
        height: 608px;

        font-family: "Microsoft YaHei UI";
        font-size: 2em;
        font-weight: bold;
        color: white;

        overflow: hidden;

        .titleText {
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 60px;
            transform: translate(-50%);
        }

        .headText {
            font-size: 0.6em;
            position: absolute;
            top: 130px;
            left: 50px;

            ul {
                list-style: none;
            }

            li {
                display: inline;
                margin-right: 30px;
            }

            .enterTime {

                li {
                    display: inline;
                    padding-left: 15px;
                    padding-right: 15px;
                }
            }
        }

        .descText {
            position: absolute;
            top: 250px;
            left: 50px;
            font-size: 0.7em;
            width: 85%;

            ul {
                font-size: 0.7em;
                list-style: none;
            }

            li {
                margin-top: 4px;

            }
        }
    }

    .fan-enter, .fan-leave-to {
        opacity: 0;
        transform: translate(0px, 120px);
    }

    .fan-enter-active, .fan-leave-active {
        transition: all 2s ease-in;
        -moz-transition: all 2s ease-in; /* Firefox 4 */
        -webkit-transition: all 2s ease-in; /* Safari 和 Chrome */
        -o-transition: all 2s ease-in; /* Opera */
    }

    .screen-enter, .screen-leave-to {
        opacity: 0.0;
        transform: translate(220px, 0px);
    }

    .screen-enter-active, .screen-leave-active {
        transition: all 2s ease-in;
        -moz-transition: all 2s ease-in; /* Firefox 4 */
        -webkit-transition: all 2s ease-in; /* Safari 和 Chrome */
        -o-transition: all 2s ease-in; /* Opera */
    }

    .fh-enter, .fh-leave-to {
        opacity: 0.0;
        transform: translate(120px, 0px);
    }

    .fh-enter-active, .fh-leave-active {
        transition: all 2s ease-out;
        -moz-transition: all 2s ease-out; /* Firefox 4 */
        -webkit-transition: all 2s ease-out; /* Safari 和 Chrome */
        -o-transition: all 2s ease-out; /* Opera */
    }
</style>

<template>
    <el-row type="flex" justify="center" style=" margin-top: 40px;margin-bottom: 40px;">
        <!--            新闻模块-->
        <el-col class="boxcenter" :span="16">
            <!-- 左上角模块 -->
            <el-row style="box-shadow: 8px 8px 4px 1px #ccc;border-radius: 10px 10px 10px 10px;">
                <!--                    左新闻图-->
                <el-col :span="12" class="boxlefttopL" :style="boxLeftTopLTitleIco2">
                    <!--                    背景底纹-->
                    <div :style="boxLeftTopLTitleIco3">
                        <!-- 古风咨询-->
                        <div class="aTitle">
                            <img class="icoLeft" :src="boxLeftTopLTitleSrc" alt="">
                            <a href="/news" title="点击进入更多新闻">
                                古风
                                <img :src="boxLeftTopLIcoSrc" alt="">
                                咨询
                            </a>
                            <img class="icoRight" :src="boxLeftTopLTitleSrc" alt="">
                        </div>

                        <div>
                            <!--                            新闻主体内容-->
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
                                        <a :href="item.src" :title="item.title">
                                            <span class="datePosition">{{item.date}}</span>
                                            <img :src="boxLeftTopLIcoSrc" alt="">
                                            <span>{{item.title}}</span>
                                            <br>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </el-col>
                <!--                    视频-->
                <el-col :span="12" class="boxlefttopR"
                        style="display: flex;justify-content: center;align-items: center">
                    <div>
                        <keep-alive>
                            <component :is="changeVideo" @changeFlag="palyVideo"></component>
                        </keep-alive>
                        <a href="javascript:" title="播放">
                            <img v-show="!videoPalyflag" :src="videoPaly" alt="播放" @click="palyVideo"
                                 style="opacity:0.8;">
                        </a>
                    </div>

                </el-col>

            </el-row>
            <!-- 左下角 -->
            <el-row class="boxleftB" :style="boxleftBBgimgSrcStyle">
                <el-col :span="24" class="boxleftBL">
                    <div id="wcAnimation">
                        <a href="/wc">
                            <transition name="screen">
                                <img v-show="$store.getters.getWcAnimationShow" class="img_1" :src="wcImgSrc_1" alt="">
                            </transition>
                            <transition name="fan">
                                <img v-show="$store.getters.getWcAnimationShow" class="img_2" :src="wcImgSrc_2" alt="">
                            </transition>
                            <img class="img_3" :src="wcImgSrc_3" alt="">
                        </a>
                        <transition name="fh">
                            <img v-show="$store.getters.getWcAnimationShow" class="img_4" :src="wcImgSrc_4" alt="">
                        </transition>
                        <img class="img_5" :src="wcImgSrc_5" alt="">
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <!--            订票、地图、博物馆活动-->
        <el-col :span="8" class="boxright">
            <!-- 右上角內容 -->
            <el-row class="boxrightText">
                <!--                 订票、地图、博物馆活动模块-->
                <el-col :span="8" class="boxrightL"
                        :style="boxrightLIco4">
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
                        :style="boxrightLIco5">
                    <a href="/about">
                        <div :style="boxrightLIco2" class="boxrightSize boxrightLAnimation"
                             @mouseleave="boxrightLAnimatioOver" @mouseenter="boxrightLAnimatioEnter">
                        </div>
                        <div class="marginSpacing">
                            <em>博物馆信息</em>
                        </div>
                    </a>
                </el-col>
                <el-col :span="8" class="boxrightR"
                        :style="boxrightLIco4">
                    <a href="/festival">
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
                <el-col :span="24" class="boxrightB" style="box-shadow: 8px 8px 4px 1px #ccc;">
                    <div :style="boxrightBImg">
                        <!--                        设置底纹-->
                        <div :style="boxrightBIco2"></div>
                        <div class="titleText">
                            <span>时间 · 票务</span>
                        </div>
                        <div class="headText">
                            <ul>
                                <li>开馆时间</li>
                                <li>开始售票</li>
                                <li>停止售票</li>
                                <li>停止进入</li>
                                <li>闭馆时间</li>
                            </ul>
                            <br/>
                            <ul class="enterTime">
                                <li>全年</li>
                                <li>9:00</li>
                                <li>16:00</li>
                                <li>17:00</li>
                                <li>18:00</li>
                            </ul>

                        </div>
                        <div class="descText">
                            <div style="text-align: center;font-size: 1.2em;border-top: #ccc solid 1px;padding-top: 20px">票务政策</div>
                            <br/>
                            <ul>
                                <span>1.门票价格：</span>
                                <li>（1）如意苑大门票150元/人；</li>
                                <li>（2）乐殿门票150元/ 人；</li>
                                <li>（3）通票（含如意苑、乐殿）：260元/人。</li>
                            </ul>
                            <br>
                            <ul>
                                <span>2.优惠政策：</span>
                                <li>（1）身高1米2以下儿童免票；身高1米4以下儿童半票；</li>
                                <li>（2）70岁以上（含70岁）老人免票；</li>
                                <li>（3）在校学生、持有社会保障金领取证人员和残疾人群体门票半价优惠；</li>
                                <li>（4）“三八”妇女节，妇女享受门票半价优惠；</li>
                                <li>（5）“八一”建军节，现役军人凭有效证件，免费参观。</li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    //加载视频模块
    const showvideo = () => import('@/components/home/maincontens/showvideo.vue')

    import videoPaly from "@/assets/boxlefttop/video_play.png";
    //新闻模块小图标
    import boxLeftTopLIcoSrc from "@/assets/boxlefttop/emico.png";
    import boxLeftTopLTitleIco1 from "@/assets/boxlefttop/ico.png";
    //新闻背景色
    import boxLeftTopLTitleIco2 from "@/assets/background/red2.jpg";
    //新闻底纹
    import boxLeftTopLTitleIco3 from "@/assets/background/shading_2.png";
    //右边三大板块
    import boxrightLIco1 from "@/assets/boxrightL/1.png";
    import boxrightLIco2 from "@/assets/boxrightL/2.png";
    import boxrightLIco3 from "@/assets/boxrightL/3.png";
    //背景色
    import boxrightLIco4 from "@/assets/background/blue1.jpg";
    import boxrightLIco5 from "@/assets/background/blue2.jpg";
    //票务系统背景
    import boxrightBIco1 from "@/assets/background/blue2.jpg";
    import boxrightBIco2 from "@/assets/background/shading_1.png";

    //文创背景
    import boxleftBBgimgSrc from "@/assets/background/blue2.jpg";
    //文创背景作品
    import wcImgSrc_1 from "@/assets/wc/wc_1.png";
    import wcImgSrc_2 from "@/assets/wc/wc_2.png";
    import wcImgSrc_3 from "@/assets/wc/wc_3.png";
    import wcImgSrc_4 from "@/assets/wc/wc_4.png";
    import wcImgSrc_5 from "@/assets/wc/wc_5.png";

    export default {
        name: "middlecontens",
        data() {
            return {
                //订票系统、地图、博物馆活动
                boxrightLIco1: {
                    'background': `url(${boxrightLIco1}) center center no-repeat`,
                },
                boxrightLIco2: {
                    'background': `url(${boxrightLIco2}) center center no-repeat`,

                },
                boxrightLIco3: {
                    'background': `url(${boxrightLIco3}) center center no-repeat`,

                },

                //背景色
                boxrightLIco4: {
                    'background': `url(${boxrightLIco4})`,
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                },
                boxrightLIco5: {
                    'background': `url(${boxrightLIco5})`,
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                },
                boxLeftTopLTitleIco2: {
                    'background': `url(${boxLeftTopLTitleIco2})`,
                },
                boxLeftTopLTitleIco3: {
                    'background': `url(${boxLeftTopLTitleIco3}) 100% 100% no-repeat`,

                    width: '464px',
                    height: '464px',
                },
                //票务系统
                boxrightBImg: {
                    'background': `url(${boxrightBIco1})`,
                    'border-radius': '10px 10px 10px 10px',
                    width: '612px',
                    height: '608px',

                },
                //票务系统底纹
                boxrightBIco2: {
                    'background': `url(${boxrightBIco2}) 100% 100% no-repeat`,
                    opacity: '0.6',
                    "background-size": "419px 588px",
                    width: '612px',
                    height: '608px'
                },

                //文创图片
                boxleftBBgimgSrcStyle: {
                    'background-image': `url(${boxleftBBgimgSrc}) `,
                    'border-radius': '10px 10px 10px 10px',
                    width: '928px',
                    height: '434px'
                },
                wcImgSrc_1: wcImgSrc_1,
                wcImgSrc_2: wcImgSrc_2,
                wcImgSrc_3: wcImgSrc_3,
                wcImgSrc_4: wcImgSrc_4,
                wcImgSrc_5: wcImgSrc_5,
                //古风咨询
                boxLeftTopLIcoSrc: boxLeftTopLIcoSrc,
                boxLeftTopLIco1Src: boxLeftTopLIcoSrc,
                boxLeftTopLTitleSrc: boxLeftTopLTitleIco1,

                //播放图标
                videoPaly: videoPaly,
                //播放标记
                videoPalyflag: false,
                //结构定义
                newsInfo: this.$store.getters.getNewsInfo,
                bulletinInfo: this.$store.getters.getBulletinInfo,

            }
        },
        components: {
            showvideo,
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
    }
</script>

