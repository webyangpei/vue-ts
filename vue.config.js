const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 自动保存
  lintOnSave: true,
  // webpack配置
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
