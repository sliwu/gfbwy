<style scoped>
.topbar{
        width: 100%;
        height: 49px;
        background-color: burlywood;
}
.serachIco{
  width: 260px;
}
</style>

<template>
  <div>
    <!-- 头部导航信息 -->
    <el-row class="topbar" type="flex" align='middle'>
        <el-col :span="4" style="margin-left: 30px;">
            <a href="javascript:void(0)">
                <img :src="logoImgSrc" style="height: 46px;" />
            </a>
        </el-col>
        <el-col :span="5" push="14">
            <el-input
            size="small"
            class="serachIco"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="inputSerach">
            <el-button slot="append" @click="serachColl">搜索</el-button>
          </el-input>

        </el-col>
    </el-row>
  </div>
</template>


<script>
//定义logo文件地址
import imglogoSrc from "@/assets/logo/logo.png";

export default {
  name: "topbar",
  components: {},
  data() {
    return {
      logoImgSrc: imglogoSrc,/* logo地址 */
      inputSerach:''
    };
  },
   methods: {
      serachColl(){
        alert(this.inputSerach)
      }
  },
  props: {}
}
</script>

