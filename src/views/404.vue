<template>
    <div>
        <notfount></notfount>
    </div>
</template>

<script>

    // 热加载
    const notfount =()=>import('@/components/notfount/notfount.vue')

    export default {
        name: "404",
        components: {
            notfount
        }
    }
</script>

<style scoped>

</style>