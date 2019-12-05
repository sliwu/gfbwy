
<style scoped lang="less">
    .bottomC {
        font-weight: bold;
        text-shadow: 2px 2px 4px #000000;
        margin-top: 30px;
        margin-bottom: 30px;
        height: 280px;
        el-col{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        a {
            text-decoration: none;
        }
    }

    .bottomB1 {
        width: 316px;
        height: 280px;

        box-shadow: 8px 8px 4px 1px #ccc;
        text-align: center;

        border-radius:10px 0px 0px 10px;

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
        border-radius:0px 10px 10px 0px;
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
    <el-row type="flex" justify="center" class="bottomC">
        <el-col :span="4" class="bottomB1" :style="boxStyle1">
            <a href="">
                <div :style="bottomCImg1">
                    <em>如意苑</em>
                </div>
            </a>
        </el-col>
        <el-col :span="4" class="bottomB2" :style="boxStyle2">
            <a href="">
                <div :style="bottomCImg2">
                    <em>乐 殿</em>
                </div>
            </a>
        </el-col>
        <el-col :span="4" class="bottomB3" :style="boxStyle1">
            <a href="">
                <div :style="bottomCImg3">
                    <em>文创产品</em>
                </div>
            </a>
        </el-col>
        <el-col :span="4" class="bottomB4" :style="boxStyle2">
            <a href="">
                <div :style="bottomCImg4">
                    <em>图书馆</em>
                </div>

            </a>
        </el-col>
        <el-col :span="4" class="bottomB5" :style="boxStyle1">
            <a href="">
                <div :style="bottomCImg5">
                    <em>视听馆</em>
                </div>
            </a>
        </el-col>
    </el-row>
</template>

<script>
    import bottomCImg1 from "@/assets/bottomC/1.png";
    import bottomCImg2 from "@/assets/bottomC/2.png";
    import bottomCImg3 from "@/assets/bottomC/3.png";
    import bottomCImg4 from "@/assets/bottomC/4.png";
    import bottomCImg5 from "@/assets/bottomC/5.png";
     //背景图
     import bottomCIco1 from "@/assets/background/red1.jpg";
    import bottomCIco2 from "@/assets/background/red2.jpg";

    export default {
        name: "topcontens",
        data(){
            return{
                boxStyle1:{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content':'center',
                    'background': `url(${bottomCIco1})`,
                },
                boxStyle2:{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content':'center',
                    'background': `url(${bottomCIco2})`,

                },
                boxAlignStyle:{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content':'center',
                    'background': `url(${bottomCIco2})`,

                },
                //五个模块 如意苑、乐殿、文创产品、图书馆、试听馆
                bottomCImg1: {
                    'background': `url(${bottomCImg1}) center center no-repeat`,
                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px',


                },
                bottomCImg2: {
                    'background': `url(${bottomCImg2}) center center no-repeat`,

                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px',
                },
                bottomCImg3: {
                    'background': `url(${bottomCImg3}) center center no-repeat`,

                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px'
                },
                bottomCImg4: {
                    'background': `url(${bottomCImg4}) center center no-repeat`,

                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px'
                },
                bottomCImg5: {
                    'background': `url(${bottomCImg5}) center center no-repeat`,

                    'margin-bottom': '40px',
                    width: '316px',
                    height: '280px'
                },

            }
        }
    }
</script>
