import store from './store';
import router from './router';
import { MessageBox } from 'element-ui';
import * as API_Login from '@/api/login.ts';

// 白名单
const whiteList: string[] = ['/login'];

async function routerBeforeEach(to: any, from: object, next: any) {
    const refreshToken: boolean = true;
    if (refreshToken) {
        if (to.path === '/login') {
            next({ path: '/' });
        } else {
            next();
            // 获取用户登录状态
            const status = await API_Login.getUserInfo();
            if (status) {
                next();
                if (store.getters.permission_routers.length === 0) {
                    store.dispatch('GenerateRoutes').then(() => {
                        router.addRoutes(store.getters.addRouters);
                        next({ ...to, replace: true });
                    }).catch(() => {
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
