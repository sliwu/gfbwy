<template>
    <div>
        <topbar></topbar>
<<<<<<< HEAD
=======
        <sortbar></sortbar>
        <imgcardview></imgcardview>
>>>>>>> 主页图片布局完成
    </div>
  </template>
  
  <script>
    //组件懒加载
    const topbar = () => import('@/components/szwwk/topview/topbar.vue')
<<<<<<< HEAD
=======
    const sortbar = () => import('@/components/szwwk/collsortview/sortbar.vue')
    const imgcardview = () => import('@/components/szwwk/imgview/imgcardview.vue')
>>>>>>> 主页图片布局完成

  
    //图片路径导入
    // import bgImg from "@/assets/homeimg/1.jpg";
    // import bgImg2 from "@/assets/homeimg/2.jpg";
    
    export default {
      name: 'szwwk',
      components: {
<<<<<<< HEAD
        topbar
=======
        topbar,
          sortbar,
          imgcardview
>>>>>>> 主页图片布局完成
      },
      data() {
        return {
        
         }
        }
    }
  </script>
  