<style scoped lang="less">
    .middleC {
        font-family: "Microsoft YaHei UI";
        width: 386px;
        height: 464px;
        margin-left: 40px;
        box-shadow: 8px 8px 4px 1px #ccc;
        border-radius: 10px 10px 10px 10px;
    }


    /*藏品图片样式*/
    .middleContens {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1158px;

    }

    .imgBox {
        display: inline-block;
        width: 386px;
        height: 464px;
    }


    /*标题样式*/
    .collTitle {
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

    /*    文物介绍样式*/
    .descInfo {
        border-radius: 10px 10px 10px 10px;
        background: rgba(0, 0, 0, 0.8);
        width: 386px;
        height: 464px;
        position: relative;
        left: 0;
        top: 0;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .centent{
            width: 300px;
            height: 400px;
        }
    }

    /*    文物介绍动画*/
    .infoAnimatio-enter {
        opacity: 0.0;
        transform: translate(-80px, 0px);
    }

    .infoAnimatio-leave-to {
        opacity: 0.0;
        transform: translate(80px, 0px);
    }

    .infoAnimatio-enter-active, .infoAnimatio-leave-active {
        transition: all 1s ease;
        -moz-transition: all 1s ease; /* Firefox 4 */
        -webkit-transition: all 1s ease; /* Safari 和 Chrome */
        -o-transition: all 1s ease; /* Opera */
    }

    .descColl{
        position: relative;
        top: 80px;
        padding-left: 50px;
        padding-right: 50px;
        text-indent:2em;
        color: white;
    }
</style>

<template>
    <el-row type="flex" justify="center" style="margin-bottom: 40px;">

        <el-col :span="18" class="middleContens">


            <div class="imgBox" id="imgbox1" :style="middleCLImg1" @mouseleave="imgAnimatioOver"
                 @mouseenter="imgAnimatioEnter">
                <transition name="infoAnimatio">
                    <div v-show="img1Flag" class="descInfo">
                        <div class="centent">
                            <span>{{homeSzwwkImgInfo[0].title}}</span>
                            <br>
                            <br>
                            <span> {{homeSzwwkImgInfo[0].dynasty}}</span>
                            <br>
                            <br>
                            <span> {{homeSzwwkImgInfo[0].description}}</span>
                        </div>
                    </div>
                </transition>

            </div>
            <div class="imgBox" id="imgbox2" :style="middleCLImg2" @mouseleave="imgAnimatioOver"
                 @mouseenter="imgAnimatioEnter">
                <transition name="infoAnimatio">
                    <div v-show="img2Flag" class="descInfo">
                        <div class="centent">
                            <span>{{homeSzwwkImgInfo[1].title}}</span>
                            <br>
                            <br>
                            <span> {{homeSzwwkImgInfo[1].dynasty}}</span>
                            <br>
                            <br>
                            <span> {{homeSzwwkImgInfo[1].description}}</span>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="imgBox" id="imgbox3" :style="middleCLImg3" @mouseleave="imgAnimatioOver"
                 @mouseenter="imgAnimatioEnter">
                <transition name="infoAnimatio">
                    <div v-show="img3Flag" class="descInfo">
                        <div class="centent">
                            <span>{{homeSzwwkImgInfo[2].title}}</span>
                            <br>
                            <br>
                            <span> {{homeSzwwkImgInfo[2].dynasty}}</span>
                            <br>
                            <br>
                            <span> {{homeSzwwkImgInfo[2].description}}</span>
                        </div>
                    </div>
                </transition>
            </div>
        </el-col>

        <el-col :span="6" class="middleC" :style="backColoreStyle">
            <!--            背景底纹-->
            <div :style="backShadingStyle">
                <!--                标题内容-->
                <div class="collTitle">
                    <img class="icoLeft" :src="shadingBack" alt="">
                    <a href="#" title="点击进入藏品库">
                        古风
                        <img :src="shadingBackEmico" alt="">
                        藏品
                    </a>
                    <img class="icoRight" :src="shadingBack" alt="">
                </div>
                <div class="descColl">
                    <span>古风博物院旗下的乐殿博物馆和如意苑博物馆，分别展出汉唐时期音乐舞蹈类的珍贵藏品，清宫如意等福寿吉祥文化的藏品以及唐宋到清代的佛教艺术珍品。两馆馆藏达600余件。</span>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import backColore from "@/assets/background/red2.jpg";
    //背景底纹
    import shading from "@/assets/background/shading_3.png";
    import shadingBack from "@/assets/boxlefttop/ico.png";
    import shadingBackEmico from "@/assets/boxlefttop/emico.png";

    import middleCLImg1 from "@/assets/middleCL/1.jpg";
    import middleCLImg2 from "@/assets/middleCL/2.jpg";
    import middleCLImg3 from "@/assets/middleCL/3.jpg";

    export default {
        name: "szwwkcontens",
        data() {
            return {
                //古风藏品模块

                backColoreStyle: {
                    'background': `url(${backColore})`,
                },
                backShadingStyle: {
                    'background': `
                    url(${shading}) 100% 100% no-repeat,
                    url(${shading}) 50% 100% no-repeat,
                    url(${shading}) 0% 100% no-repeat`,
                    'background-size': '106px 128px,133px 160px,106px 128px',
                    'border-radius': '10px 10px 10px 10px',
                    width: '100%',
                    height: '464px'

                },
                //标题小挂件
                shadingBack: shadingBack,
                shadingBackEmico: shadingBackEmico,
                //藏品分类图片

                middleCLImg1: {
                    'background': `url(${middleCLImg1}) center center no-repeat`,
                    'border-radius': '10px 10px 10px 10px',
                    'box-shadow': '8px 8px 4px 1px #ccc',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg2: {
                    'background': `url(${middleCLImg2}) center center no-repeat`,
                    'border-radius': '10px 10px 10px 10px',
                    'box-shadow': '8px 8px 4px 1px #ccc',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg3: {
                    'background': `url(${middleCLImg3}) center center no-repeat`,
                    'border-radius': '10px 10px 10px 10px',
                    'box-shadow': '8px 8px 4px 1px #ccc',
                    width: '386px',
                    height: '464px'
                },

                //是否展示文物介绍
                img1Flag: false,
                img2Flag: false,
                img3Flag: false,
                // 主页数字文物库展示
                homeSzwwkImgInfo: [
                    {
                        id: 0, src: String, title: '青铜车马', dynasty: '秦',
                        description: `  车马青铜所制，是一座驷马单辕双轮车，通长4300cm，车宽136cm，车高133cm，马长113cm，马高96.5cm。铜车马在制作上运用了铸造、焊接、镶嵌、粘接以及子母扣、纽环扣、锥度配合、销钉连接等各种工艺。铜车马各主体是事先铸造而成，后又经细部加工，工艺水平非常之高，对研究中国古代车马制度、雕刻艺术和冶炼技术等，都具有极其重要的历史价值。`
                    },
                    {
                        id: 1, src: String, title:'金錾刻鱼子地龙凤纹笙', dynasty: '唐代', description: '全身用金子打造，灿烂夺目，主要作用于室内摆设。器身錾刻鱼子纹铺地，工艺复杂、精细。笙斗三面分别雕饰凤衔灵芝、龙腾、玄武等饰纹，栩栩如生，有祥瑞的寓意。藏品底部刻有“大唐贞观”四字，是贞观年间的物件。'
                    },
                    {
                        id: 2, src: String, title: '乾隆金累丝镶翡翠饰烧蓝葫芦瓶', dynasty: '清•乾隆', description: `以累丝工艺和烧蓝工艺制成，镶嵌各色翡翠。瓶身饰梅兰竹菊“四君子”，寿桃、“福”“禧”二字，承载长寿福禄之期许。顶部点缀一片由镂空金累丝和翠绿珐琅制成的绿叶，与瓶身相衬，协调美观。`
                    },]

            }
        },
        methods: {
            imgAnimatioOver(el) {


                if (el.target.id == 'imgbox1') {
                    this.img1Flag = false
                }
                if (el.target.id == 'imgbox2') {
                    this.img2Flag = false
                }
                if (el.target.id == 'imgbox3') {
                    this.img3Flag = false
                }
            },
            imgAnimatioEnter(el) {

                if (el.target.id == 'imgbox1') {
                    this.img1Flag = true
                }
                if (el.target.id == 'imgbox2') {
                    this.img2Flag = true
                }
                if (el.target.id == 'imgbox3') {
                    this.img3Flag = true
                }
            }
        }
    }
</script>

