<template>
    <div><img :src='imgsrc' alt=""></div>
</template>

<script>
    // 加载图片
    import notfountImg from "@/assets/404/404.jpg"

    export default {
        name: "notfount",
        data() {
            return {
                imgsrc: notfountImg
            }
        }
    }
</script>

<style scoped>
    div {
        width: 1024px;
        height: 320px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
</style>