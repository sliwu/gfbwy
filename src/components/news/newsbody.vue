<style lang="less" scoped>

.backImg {
  height: 100%;
  display: flex;
  justify-content: center;
}

.content{
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;

}
  .mainContent{
    width: 80%;
    min-width: 1080px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  }
  .topMain{
    width: 100%;
    height: 360px;
  }
  .botMain{
    width: 100%;

  }
</style>>

<template>
  <div>
    <div class="backImg">
      <el-image :src="backImg" fit='cover'></el-image>
    </div>
    <div class="content">
      <div class="mainContent">
          <div class="topMain">
            <div class="leftNews">

            </div>
            <div class="rightImg">
              
            </div>
          </div>
          <div class="botMain">

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import backImg from '@/assets/news/backimg.png';
export default {
  name: "newsbody",
  data() {
    return {
      backImg:backImg,

    };
  },
  methods: {}
};
</script>

