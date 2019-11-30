<style lang="less" scoped>
    .botbar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        overflow: hidden;
    }

    .textcenter {
        line-height: 23px;

        span {
            font-size: 14px;
            color: white;
            text-align: center;
            margin: 4px;
        }

        div {
            text-align: center;
        }


    }
</style>

<template>
    <div class="botbar" :style="{'background-color':color}">
        <div class="textcenter">
                <span>
                    Mail/邮箱：gfbwy@gfbwy.com
                </span>
            <span>
                    Tel/联系电话：0854-3228082
                </span>
            <div>

                <span>
                    ©2019 古风博物院版权所有
                </span>
                    <span>黔ICP备19011326号</span>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'botbar',
        data() {
            return {}
        },
        props: {
            color: {
                type: String,
                default: '#000'
            }
        }
    }
</script>