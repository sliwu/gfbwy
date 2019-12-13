import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//elementUI导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/css/global.css'
Vue.use(ElementUI);

// axios插件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
