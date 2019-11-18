<style scoped>
.topbar{
        width: 100%;
        height: 49px;
        background-color: burlywood;
}
.serachIco{
  height: 40px;
  width: 260px;
}
</style>

<template>
  <div>
    <el-row class="topbar" type="flex" align='middle'>
        <el-col :span="4" style="margin-left: 30px;">
            <a href="javascript:void(0)">
                <img :src="logoImgSrc" style="height: 46px;" />
            </a>
        </el-col>
        <el-col :span="8" push="14">
            <el-input
            class="serachIco"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2">
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
    };
  },
   methods: {
    
  },
  props: {}
}
</script>

