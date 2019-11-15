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

  }
}
