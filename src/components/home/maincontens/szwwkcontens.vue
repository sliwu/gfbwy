<style scoped lang="less">
    .middleC {
        width: 386px;
        height: 464px;
        margin-left: 40px;
        box-shadow: 8px 8px 4px 1px #ccc;
        border-radius:10px 10px 10px 10px;
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

    .middleContens {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1158px;

    }
    .middleCL{
        display: inline-block;
        width: 386px;
        height: 464px;
    }

    .middleCM {
        display: inline-block;
        width: 386px;
        height: 464px;
    }

    .middleCR {
        display: inline-block;
        width: 386px;
        height: 464px;
    }
</style>

<template>
    <el-row type="flex" justify="center" style="margin-bottom: 40px;">

        <el-col :span="18" class="middleContens">
            <div class="middleCL" :style="middleCLImg1"></div>
            <div  class="middleCR" :style="middleCLImg2"></div>
            <div  class="middleCM" :style="middleCLImg3"></div>
        </el-col>

        <el-col :span="6" class="middleC" :style="collectionQuantityImgShadingStyle">
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
    </el-row>
</template>

<script>
    import collectionQuantitySrc from "@/assets/background/red2.jpg";
    //背景底纹
    import shading from "@/assets/background/shading_3.png";

    import collectionIcoSrc from "@/assets/middlebottom/gf_collectionIco.png";
    import collectionIcoSrc1 from "@/assets/middlebottom/gf_collectionIco1.png";
    import collectionIcoSrc2 from "@/assets/middlebottom/gf_collectionIco2.png";
    import middleCLImg1 from "@/assets/middleCL/1.jpg";
    import middleCLImg2 from "@/assets/middleCL/2.jpg";
    import middleCLImg3 from "@/assets/middleCL/3.jpg";

    export default {
        name: "szwwkcontens",
        data() {
            return {
                //古风藏品模块
                collectionQuantityImgShadingStyle:{
                    'background': `url(${collectionQuantitySrc})`,
                },
                collectionQuantityImgStyle: {
                    'background': `
                    url(${shading}) 100% 100% no-repeat,
                    url(${shading}) 50% 100% no-repeat,
                    url(${shading}) 0% 100% no-repeat`,
                    'background-size':'106px 128px,133px 160px,106px 128px',
                    'border-radius':'10px 10px 10px 10px',
                    width: '386px',
                    height: '464px'
                },
                collectionIcoSrc: collectionIcoSrc,
                collectionIcoSrc1: collectionIcoSrc1,
                collectionIcoSrc2: collectionIcoSrc2,
                //藏品分类图片
                middleCLImg1: {
                    'background': `url(${middleCLImg1}) center center no-repeat`,
                    'border-radius':'10px 10px 10px 10px',
                    'box-shadow':'8px 8px 4px 1px #ccc',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg2: {
                    'background': `url(${middleCLImg2}) center center no-repeat`,
                    'border-radius':'10px 10px 10px 10px',
                    'box-shadow':'8px 8px 4px 1px #ccc',
                    width: '386px',
                    height: '464px'
                },
                middleCLImg3: {
                    'background': `url(${middleCLImg3}) center center no-repeat`,
                    'border-radius':'10px 10px 10px 10px',
                    'box-shadow':'8px 8px 4px 1px #ccc',
                    width: '386px',
                    height: '464px'
                },
                //在store中获取修改藏品总数量
                collectionQuantity: this.$store.getters.getCollectionQuantity,
                // 主页数字文物库展示
                homeSzwwkImgInfo: [
                    {id: 0, src: String, title: '青铜车马', dynasty: '秦',
                        description: `  车马青铜所制，是一座驷马单辕双轮车，通长4300cm，车宽136cm，车高133cm，马长113cm，马高96.5cm。
                            铜车马在制作上运用了铸造、焊接、镶嵌、粘接以及子母扣、纽环扣、锥度配合、销钉连接等各种工艺。铜车马各主体是事先铸造而成，后又经细部加工，工艺水平非常之高，对研究中国古代车马制度、雕刻艺术和冶炼技术等，都具有极其重要的历史价值。`},
                    {id: 1, src: String, title: String, dynasty: String, description: String},
                    {id: 2, src: String, title: String, dynasty: String, description: String},]
            }
        }
    }
</script>

