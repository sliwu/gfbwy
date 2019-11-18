<template>
  <div>
    <topbar :menuStruc='menulist' >
    </topbar>
    <carousel :imgSrc='imgSrc'></carousel>
    <maincontens></maincontens>
    <botbar></botbar>
  </div>
</template>

<script>
  //组件懒加载
  const topbar = () => import('@/components/home/topbar/topbar.vue')
  const carousel = () => import('@/components/home/carousel/carousel.vue')
  const maincontens=()=>import('@/components/home/maincontens/maincontens.vue')
  const botbar=()=>import('@/components/home/botbar/botbar.vue')

  //图片路径导入
  import bgImg from "@/assets/homeimg/1.jpg";
  import bgImg2 from "@/assets/homeimg/2.jpg";
  
  export default {
    name: 'home',
    components: {
      topbar,
      carousel,
      maincontens,
      botbar
    },
    data() {
      return {
        menulist: [{
          title: '首页',
          url: 'home'
        }, {
          title: '导览',
          url: 'home'
        }, {
          title: '展览',
          url: 'home'
        }, {
          title: '教育',
          url: 'home'
        }, {
          title: '探索',
          url: 'home'
        }, {
          title: '学术',
          url: 'home'
        }, {
          title: '文创',
          url: 'home'
        }, {
          title: '关于',
          url: 'home'
        }],
        imgSrc: [{
            src: bgImg
          },
          {
            src: bgImg2
          }
        ]
      }
    }
  }
</script>
