<style lang="less" scoped>
.botbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  overflow: hidden;
}

.posBotbar {
  position: fixed;
  right: 0px;
  bottom: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
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
  <div :class="isActive ? 'posBotbar' : 'botbar' " :style="{'background-color':color}">
    <div class="textcenter">
      <div>
        <span>Mail/邮箱：gfbwy@gfbwy.com</span>
        <span>Tel/联系电话：0854-3228082</span>
      </div>

      <div>
        <span>©2019 古风博物院版权所有</span>
        <span>黔ICP备19011326号</span>
        <div>
          <span style="color:white">建议分辨率：1920*1080</span>
          <span>建议浏览器：IE10 Chrome</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "botbar",
  data() {
    return {
        isActive:false,
    };
  },
  props: {
    color: {
      type: String,
      default: "#000"
    }
  },
  methods: {

    
  },
  mounted() {
    //   判断当前是否有滚动条设置botbar是否固定在最低端
    //   const hasScrollbar = document.body.scrollHeight > window.innerHeight || document.body.scrollHeight >document.documentElement.clientHeight      
    // if (hasScrollbar) {
    //     this.isActive=false
    // }
    // else{
    //     this.isActive=true
    // }
  },
};
</script>