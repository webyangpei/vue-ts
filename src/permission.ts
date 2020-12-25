import store from './store';
import router from './router';
import {MessageBox} from 'element-ui';
import * as API_Login from '@/api/login.ts';

// 白名单
const whiteList: string[] = ['/login'];

async function routerBeforeEach(to: any, from: object, next: any) {
	const refreshToken: boolean = true;
	if (refreshToken) {
		if (to.path === '/login') {
			next({path: '/'});
		} else {
			// 获取用户登录状态
			// const status = await API_Login.getUserInfo();
			const status = true;
			if (status) {
				// 强制进行路由存储
				if (store.getters.permission_routers.length === 0) {
					store.dispatch('GenerateRoutes').then((res) => {
						router.addRoutes(store.getters.permission_routers);
						next({path: to.path, replace: true});
					}).catch((res) => {
						MessageBox.alert('验证失败，请重新登录', '登录出错');
					});
				} else {
					next();
				}
			}
		}
	} else {
		if (whiteList.includes(to.path)) {
			next();
		} else {
			next('/login');
		}
	}
}

router.beforeEach(routerBeforeEach);
