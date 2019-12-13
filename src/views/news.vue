<style lang="less">
html,
body {
  min-width: 1080px;
}
</style>

<template>
  <div>
    <topbar :menuStruc="this.$store.getters.getMenuList" ></topbar>
    <newsbody></newsbody>
    <botbar></botbar>
  </div>
</template>

<script>
const topbar = () => import("@/components/home/topbar/topbar.vue");
const botbar = () => import("@/components/home/botbar/botbar.vue");
const newsbody = () => import("@/components/news/newsbody.vue");

export default {
  name: "news",
  data() {
    return {};
  },
  methods: {},
  components: {
    topbar,
    botbar,
    newsbody
  }
};
</script>

