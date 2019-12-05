<style scoped lang="less">

    .videoFrame {
        border-radius: 10px 10px 10px 10px;
        position: absolute;
        left: 0;
        top: 0;

        background: rgba(0, 0, 0, 0.7);

        video {
            width: 928px;
            height: 464px;
            border-radius: 10px 10px 10px 10px;
        }

        .videoSzie {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 928px;
            height: 464px;
        }

        .close {
            z-index: 100;
            position: absolute;
            right: 12px;
            top: 12px;
            font-weight: bold;
            color: white;

            span {
                border: #ccc solid 1px;
                font-size: 1.2em;
                padding-left: 2px;
                padding-right: 3px;
            }
        }
    }
</style>

<template>
    <div class="videoFrame">
        <div class="videoSzie">
            <video preload="metadata" controls controlslist="nodownload" @contextmenu="rightClick"
                   style="object-fit:fill">
                <source :src="xc_video" type="video/mp4">
                您的浏览器不支持 video 标签。
            </video>
            <a href="javascript:">
                <div class="close" @click="closeComp">
                    <span>关闭视频</span>
                </div>
            </a>
        </div>


    </div>
</template>

<script>

    //视频导入
    import xc_video from "@/assets/video/xc.mp4";

    export default {
        name: "showvideo",
        data() {
            return {
                //video视频路径
                xc_video: xc_video,
            }
        },
        methods: {
            //屏蔽右键菜单
            rightClick(obj) {
                obj.returnValue = false
            },
            //关闭组件
            closeComp() {
                this.$emit('changeFlag')

            }
        }
    }
</script>

