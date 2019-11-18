const path = require('path')

//合并路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

// 项目的主要配置文件
module.exports = {
  // webpack 配置进行更细粒度的修改
  chainWebpack: (config) => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer:{
    open:true,
    host:'localhost',
    port:8000,/* 本机端口号 */
    https:false,
    /* 上面接口为本地接口，下面为服务端接口允许跨域请求 */
    proxy:{
      "/api":{
        target:"http://localhost:8080/api/",/* 协议+主机IP+端口 后台接口*/
        ws:true,
        changeOrigin:true,/* 运行跨域 */
        pathRewrite:{
          /* 请求的时候使用这个api就可以 */
          /* 请求接口 后台接口5001 本地接口8080, 
          所以我们需要去到vue.config.js配置跨域 http://localhost:5001/api/
          this.$axios.post('/api/users/register',this.user).then(res =>{alert('注册成功!');this.$router.push('/login');console.log(res)})}*/
          '^/api':''
        }
      }
    }
  }
}
