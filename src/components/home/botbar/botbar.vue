<style lang="less" scoped>
    .botbar {
        background-color: black;
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .botbar p {
        font-size: 14px;
        color: white;
    }

    .textcenter {
        line-height: 23px;
        p {
            text-align: center;
            margin: 4px;
        }
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
            return {}
        },
    }
</script>