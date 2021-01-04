import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@/styles/index.styl'; // global css
import './permission.ts';
import $echarts from 'echarts';

Vue.prototype.$echarts = $echarts;

(window as any).__POWERED_BY_QIANKUN__ = true;
// let timer: any = null;
// timer = setInterval(() => {
// 	console.log(document.getElementById('#app'), 'have')
// 	if(document.getElementById('#app')) {
// 		// 启动乾坤
// 		startQiankun();
// 		clearInterval(timer);
// 		timer = null;
// 	}
// }, 500)



import Component from 'vue-class-component';

Component.registerHooks(['setup', 'beforeRouteUpdate', 'beforeRouteEnter', 'beforeRouteLeave']);

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#admin-app');



