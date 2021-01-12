const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 自动保存
    lintOnSave: true,
    // webpack配置
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api.webyangpei.com',
                ws: true,
				secure: false,
                changeOrigin: true
            }
        },
        disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
		headers: { 'Access-Control-Allow-Origin': '*' },
    },
	publicPath: '/'
}
