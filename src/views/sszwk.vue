<template>
    <div>
        <topbar></topbar>
    </div>
  </template>
  
  <script>
    //组件懒加载
    const topbar = () => import('@/components/szwwk/topview/topbar.vue')

  
    //图片路径导入
    // import bgImg from "@/assets/homeimg/1.jpg";
    // import bgImg2 from "@/assets/homeimg/2.jpg";
    
    export default {
      name: 'szwwk',
      components: {
        topbar
      },
      data() {
        return {
        
         }
        }
    }
  </script>
  