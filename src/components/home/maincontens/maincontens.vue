<!-- 主体内容宽度一共1580px -->
<style lang='less' scoped>

    .boxcenter {
        width: 928px;
        height: 940px;
    }

    .boxlefttopL {
        width: 464px;
        height: 464px;

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
            border-top:1px solid #ccc;

            position: relative;
            left: 40px;
            top: 50px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: white;

            ul{
                list-style: none;

            }
            li{

                line-height:35px ;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            p{
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

    }

    .boxrightL {
        width: 204px;
        height: 292px;

    }

    .boxrightM {
        width: 204px;
        height: 292px;

    }

    .boxrightR {
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
        margin-top: 30px;
        margin-bottom: 30px;
        height: 280px;
    }

    .bottomB1 {
        width: 316px;
        height: 280px;

    }

    .bottomB2 {
        width: 316px;
        height: 280px;

    }

    .bottomB3 {
        width: 316px;
        height: 280px;

    }

    .bottomB4 {
        width: 316px;
        height: 280px;

    }

    .bottomB5 {
        width: 316px;
        height: 280px;

    }

</style>

<template>
    <div>
        <!-- 最下面内容 -->
        <el-row type="flex" justify="center" class="bottomC">
            <el-col :span="4" class="bottomB1">
                <div :style="bottomCImg1">

                </div>
            </el-col>
            <el-col :span="4" class="bottomB2">
                <div :style="bottomCImg2">

                </div>
            </el-col>
            <el-col :span="4" class="bottomB3">
                <div :style="bottomCImg3">

                </div>
            </el-col>
            <el-col :span="4" class="bottomB4">
                <div :style="bottomCImg4">

                </div>
            </el-col>
            <el-col :span="4" class="bottomB5">
                <div :style="bottomCImg5">

                </div>
            </el-col>
        </el-row>

        <!-- 上半部内容 -->
        <el-row type="flex" justify="center" style="margin-top: 40px;margin-bottom: 40px;">
            <el-col class="boxcenter" :span="16">
                <!-- 左上角模块 -->
                <el-row>
                    <!--                    左新闻图-->
                    <el-col :span="12" class="boxlefttopL">
                        <div :style="boxlefttopLsrcStyle">
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

                                        <a :href="item.src" :title="item.title" >
                                            <img :src="boxLeftTopLIcoSrc" alt="">
                                            <span>{{item.title}}</span>
                                            <br>
                                        </a>

                                    </li>
                                </ul>
                            </div>

                        </div>
                    </el-col>
                    <!--                    右图-->
                    <el-col :span="12" class="boxlefttopR">
                        <div :style="boxlefttopRsrcStyle">
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
            <el-col :span="8" class="boxright">
                <!-- 右上角內容 -->
                <el-row>
                    <el-col :span="8" class="boxrightL">
                        <div :style="boxrightLIco1">

                        </div>
                    </el-col>
                    <el-col :span="8" class="boxrightM">
                        <div :style="boxrightLIco2">

                        </div>
                    </el-col>
                    <el-col :span="8" class="boxrightR">
                        <div :style="boxrightLIco3">

                        </div>
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
    import boxLeftTopLSrc from "@/assets/boxlefttop/bgimg.jpg";
    import boxLeftTopLIcoSrc from "@/assets/boxlefttop/emico.png";
    import boxLeftTopLTitleSrc from "@/assets/boxlefttop/title.png";
    import boxLeftTopRSrcStyle from "@/assets/boxlefttop/zx.jpg";
    import boxleftBBgimgSrc from "@/assets/boxleftB/szdbg.jpg";
    import boxrightLIco1 from "@/assets/boxrightL/1.jpg";
    import boxrightLIco2 from "@/assets/boxrightL/2.jpg";
    import boxrightLIco3 from "@/assets/boxrightL/3.jpg";
    import boxrightBImg from "@/assets/boxrightB/1.jpg";
    import middleCLImg1 from "@/assets/middleCL/1.jpg";
    import middleCLImg2 from "@/assets/middleCL/2.jpg";
    import middleCLImg3 from "@/assets/middleCL/3.jpg";
    import middleBLImg from "@/assets/middleBL/1.jpg";
    import middleBRImg from "@/assets/middleBR/1.jpg";
     import bottomCImg1 from "@/assets/bottomC/1.png";
    // import bottomCImg2 from "@/assets/bottomC/2.jpg";
    // import bottomCImg3 from "@/assets/bottomC/3.jpg";
    // import bottomCImg4 from "@/assets/bottomC/4.jpg";
    // import bottomCImg5 from "@/assets/bottomC/5.jpg";


    export default {
        name: 'maincontens',
        data() {
            return {
                //套件小图标
                collectionIcoSrc: collectionIcoSrc,
                collectionIcoSrc1: collectionIcoSrc1,
                collectionIcoSrc2: collectionIcoSrc2,
                boxLeftTopLIcoSrc: boxLeftTopLIcoSrc,
                boxLeftTopLTitleSrc: boxLeftTopLTitleSrc,

                //修改背景图src
                collectionQuantityImgStyle: {
                    'background-image': 'url(' + collectionQuantitySrc + ')',
                    width: '386px',
                    height: '464px'
                },
                boxlefttopLsrcStyle: {
                    'background-image': 'url(' + boxLeftTopLSrc + ')',
                    width: '464px',
                    height: '464px'
                },
                boxlefttopRsrcStyle: {
                    'background-image': 'url(' + boxLeftTopRSrcStyle + ')',
                    width: '464px',
                    height: '464px'
                },
                boxleftBBgimgSrcStyle:{
                    'background-image': 'url(' + boxleftBBgimgSrc + ')',
                    width: '928px',
                    height: '434px'
                },
                boxrightLIco1:{
                    'background-image': 'url(' + boxrightLIco1 + ')',
                    width: '204px',
                    height: '292px'
                },
                boxrightLIco2:{
                    'background-image': 'url(' + boxrightLIco2 + ')',
                    width: '204px',
                    height: '292px'
                },
                boxrightLIco3:{
                    'background-image': 'url(' + boxrightLIco3 + ')',
                    width: '204px',
                    height: '292px'
                },
                boxrightBImg:{
                    'background-image': 'url(' + boxrightBImg + ')',
                    width: '612px',
                    height: '608px'

                },
                middleCLImg1:{
                    'background-image': 'url(' + middleCLImg1 + ')',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg2:{
                    'background-image': 'url(' + middleCLImg2 + ')',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg3:{
                    'background-image': 'url(' + middleCLImg3 + ')',
                    width: '386px',
                    height: '464px'
                },
                middleBLImg:{
                    'background-image': 'url(' + middleBLImg + ')',
                    width: '1112px',
                    height:'478px'

                },
                middleBRImg:{
                    'background-image': 'url(' + middleBRImg + ')',
                    width: '430px',
                    height:'478px'
                },
                bottomCImg1:{
                    'background-image': 'url(' + bottomCImg1 + ')',
                    "background-color":'#2e7283',
                    width: '316px',
                    height:'280px'
                },
                bottomCImg2:{
                    // 'background-image': 'url(' + bottomCImg2 + ')',
                    "background-color":'#255c6a',
                    width: '316px',
                    height:'280px'
                },
                bottomCImg3:{
                    // 'background-image': 'url(' + bottomCImg3 + ')',
                    "background-color":'#1d4650',
                    width: '316px',
                    height:'280px'
                },
                bottomCImg4:{
                    // 'background-image': 'url(' + bottomCImg4 + ')',
                    "background-color":'#255c6a',
                    width: '316px',
                    height:'280px'
                },
                bottomCImg5:{
                    // 'background-image': 'url(' + bottomCImg5 + ')',
                    "background-color":'#2e7283',
                    width: '316px',
                    height:'280px'
                },
                //结构定义
                newsInfo: this.$store.state.newsInfo,
                bulletinInfo: this.$store.state.bulletinInfo,

                //在store中获取修改藏品总数量
                collectionQuantity: this.$store.state.collectionQuantity,

            }
        },
    }
</script>
