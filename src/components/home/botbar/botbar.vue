<<<<<<< HEAD
<style scoped>
    .botbar {
        background-color: black;
        width: 100%;
        height: 100px;
        overflow:hidden;
=======
<style lang="less" scoped>
    .botbar {
        background-color: black;
        width: 100%;
        height: auto;
        overflow: hidden;
>>>>>>> 主页图片布局完成
    }

    .botbar p {
        font-size: 14px;
        color: white;
    }

<<<<<<< HEAD
    .textcenter p {
        text-align: center;
        margin: 4px;
=======
    .textcenter {
        line-height: 23px;
        p {
            text-align: center;
            margin: 4px;
        }
>>>>>>> 主页图片布局完成
    }
</style>

<template>
    <el-row class="botbar" type="flex" justify="center" align="middle">
        <el-col :span="6">
            <div class="textcenter">
                <p>
                    Mail/邮箱：gfbwy@gfbwy.com
                </p>
                <p>
                    Tel/联系电话：0854-3228082
                </p>
                <p>
                    ©2019 古风博物院版权所有
                </p>
                <p>
                    黔ICP备19011326号
                </p>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'botbar',
        data() {
<<<<<<< HEAD
            return {

            }
=======
            return {}
>>>>>>> 主页图片布局完成
        },
    }
</script>