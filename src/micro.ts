import {
	registerMicroApps,
	addGlobalUncaughtErrorHandler,
	start,
} from 'qiankun';

registerMicroApps([{
	name: 'kwaishop-gravity-micro-diagnosis',
	entry: '//localhost:3000',
	container: '#frame',
	activeRule: '/industryTools',
}], {
	// qiankun 生命周期钩子 - 微应用加载前
	beforeLoad: (app: any) => {
		// 加载微应用前，加载进度条
		// NProgress.start();
		console.log('before load', app.name);
		return Promise.resolve();
	},
	// qiankun 生命周期钩子 - 微应用挂载后
	afterMount: (app: any) => {
		// 加载微应用前，进度条加载完成
		// NProgress.done();
		console.log('after mount', app.name);
		return Promise.resolve();
	},
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
	console.error(event);
	const { message: msg } = event as any;
	// 加载失败时提示
	if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
		console.log('微应用加载失败，请检查应用是否可运行');
		// message.error("微应用加载失败，请检查应用是否可运行");
	}
});

// 导出 qiankun 的启动函数
export default start;
