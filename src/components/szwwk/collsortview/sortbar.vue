<style lang="less" >
  .sortbar{
    width:210px ;
    background-color: #00636a;
    position: absolute;
    left: 0;
    top: 70px;
  }

</style>

<template>
  <div class="sortbar" :style="{height:height+'px'}">

  </div>
</template>


<script>


export default {
  name: "sortbar",
  components: {},
  data() {
    return {
      
    };
  },
   methods: {
  },
  props: {
    height:Number
  }
};
</script>

