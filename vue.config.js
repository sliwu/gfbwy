const path = require('path')

//合并路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

// 项目的主要配置文件
module.exports = {
  publicPath: './',//根路径
  outputDir: 'dist',//打包的时候生成的一个文件名
  assetsDir: 'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
  // webpack 配置进行更细粒度的修改
  chainWebpack: (config) => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,/* 本机端口号 */
    https: false,
    hotOnly: false,         //热模块更新的一种东西,webpack中自动有过配置,但如果我们下载一些新的模块可以更好的给我更新一些配置
    /* 上面接口为本地接口，下面为服务端接口允许跨域请求 */
    proxy: {
      "/api": {
        target: "http://localhost:8080/api/",/* 协议+主机IP+端口 后台接口*/
        ws: true,
        changeOrigin: true,/* 运行跨域 */
        pathRewrite: {
          /* 请求的时候使用这个api就可以 */
          /* 请求接口 后台接口5001 本地接口8080, 
          所以我们需要去到vue.config.js配置跨域 http://localhost:5001/api/
          this.$axios.post('/api/users/register',this.user).then(res =>{alert('注册成功!');this.$router.push('/login');console.log(res)})}*/
          '^/api': ''
        }
      }
    }
<<<<<<< HEAD
  }
=======
  },
  //设置浏览器favicon图标
  pwa:{
    iconPath:{
      favicon32     : 'favicon.ico',
      favicon16     : 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon      : 'favicon.ico',
      msTileImage   : 'favicon.ico'
    }
  }

>>>>>>> 主页图片布局完成
}
