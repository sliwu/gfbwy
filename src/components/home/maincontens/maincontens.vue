<!-- 主体内容宽度一共1572px -->
<style scoped>
    .boxcenter {
        width: 928px;
        height: 940px;
        
    }

    .boxleft {
        width: 928px;
        height: 464px;
        background-color: blue;
    }
    .boxleftB {
        margin-top: 40px;
        width: 928px;
        height: 434px;
        background-color: rgb(221, 139, 45);
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
    .boxrightL{
        width: 204px;
        height: 292px;
        background-color: chartreuse;    
    }
    .boxrightM{
        width: 204px;
        height: 292px;
        background-color: rgb(39, 228, 187);    
    }
    .boxrightR{
        width: 204px;
        height: 292px;
        background-color: rgb(245, 193, 81);    
    }
    .boxrightB{
        margin-top: 40px;
        width: 612px;
        height: 608px;
        background-color: darkgoldenrod;
    }


    .middleC{
        width: 384px;
        height: 464px;
        margin-right: 40px;
        background-color: darkgreen;
    }
    .middleCL{
        width: 386px;
        height: 464px;
        background-color: rgb(243, 71, 71);
    }
    .middleCM{
        width: 386px;
        height: 464px;
        background-color: rgb(250, 218, 76);
    }
    .middleCR{
        width: 386px;
        height: 464px;
        background-color: rgb(55, 114, 241);
    }

    .middleBL{
        width: 1112px;
        height: 478px;
        background-color: brown;
        margin-right: 40px;
    }
    .middleBR{
        width: 430px;
        height: 478px;
        background-color: rgb(228, 133, 133);
    }
    .bottomB1{
        width: 266px;
        height: 238px;
        background-color: dodgerblue;
    }
    .bottomB2{
        width: 266px;
        height: 238px;
        background-color: rgb(130, 187, 243);
    }
    .bottomB3{
        width: 266px;
        height: 238px;
        background-color: rgb(30, 255, 188);
    }
    .bottomB4{
        width: 266px;
        height: 238px;
        background-color: rgb(171, 238, 14);
    }
    .bottomB5{
        width: 266px;
        height: 238px;
        background-color: rgb(182, 17, 174);
    }

</style>

<template>
    <div>
        <!-- 上半部内容 -->
        <el-row type="flex" justify="center" style="margin-top: 40px;margin-bottom: 40px;">

            <el-col class="boxcenter" :span="16">
                <!-- 左上角模块 -->
                <el-row class="boxleft">
                    <el-col :span="24">
                        <div>
                            图片
                        </div>
                    </el-col>
                </el-row>
                <!-- 左下角 -->
                <el-row class="boxleftB">
                    <el-col :span="12">
                        <div class="boxleftBL">
                            图片左
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                            图片右
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8" class="boxright">
                <!-- 右上角內容 -->
                <el-row>
                    <el-col :span="8" class="boxrightL">
                        <div>123</div>
                    </el-col>
                    <el-col :span="8" class="boxrightM" >
                        <div>456</div>
                    </el-col>
                    <el-col :span="8" class="boxrightR">
                        <div>789</div>
                    </el-col>
                </el-row>
                <!-- 右下角 -->
                <el-row class="boxrightB">
                    <el-col :span="24">
                        <div>00000</div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!-- 中上内容 -->
        <el-row type="flex" justify="center" style="margin-bottom: 40px;">
            <el-col :span="6" class="middleC">
                <div >123</div>
            </el-col>
            <el-col :span="6" class="middleCL">
                <div>456</div>
            </el-col>
            <el-col :span="6" class="middleCM">
                    <div>789</div>
            </el-col>
            <el-col :span="6" class="middleCR">
                    <div>100</div>
            </el-col>               
        </el-row>
        <!-- 中下内容 -->
        <el-row  type="flex" justify="center" style="margin-bottom: 40px;">
            <el-col :span="18" class="middleBL">
                <div>123456</div>
            </el-col>
            <el-col :span="6" class="middleBR">
                <div>789654</div>
            </el-col>
        </el-row>
        <!-- 最下面内容 -->
        <el-row type="flex" justify="center" style="margin-bottom: 40px;">
            <el-col :span="4" class="bottomB1" >
                <div>123</div>
            </el-col>
            <el-col :span="4"  class="bottomB2">
                <div>456</div>
            </el-col>
            <el-col :span="4"  class="bottomB3">
                <div>789</div>
            </el-col>
            <el-col :span="4"  class="bottomB4">
                <div>0123</div>
            </el-col>
            <el-col :span="4"  class="bottomB5">
                <div>456</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'maincontens',
        data() {
            return {

            }
        },
    }
</script>
