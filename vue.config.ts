const path = require('path');
function resolve (dir: string) {
  // @ts-ignore
    return path.join(__dirname, dir)
}
module.exports = {
  // 自动保存
  lintOnSave: true,
  // webpack配置
  chainWebpack: (config: any)=>{
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
  }
}
