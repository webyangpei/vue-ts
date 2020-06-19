import Vue from 'vue';
import store from './store';
import router from './router';
import API_Login from '@/api/login.ts';
// import { domain } from '~/ui-domain';

const whiteList: string[] = ['/login'];

async function routerBeforeEach(to: any, from: object, next: any) {
    const refreshToken: boolean = true;
    if (refreshToken) {
        if (to.path === '/login') {
            // next({ path: '/' });
            next();
        } else {
            // next();
            next('/login');
            // 获取用户登录状态
            // const status = await API_Login.getUserInfo()
            // if (status) {
            //     next()
            //     const shopInfo = Storage.getItem('seller_shop')
            //     if (!shopInfo) await store.dispatch('getShopInfoAction')
            //     if (store.getters.addRouters.length === 0) {
            //         store.dispatch('GenerateRoutes').then(() => {
            //             router.addRoutes(store.getters.addRouters)
            //             next({ ...to, replace: true })
            //         }).catch(() => {
            //             errorMsg('验证失败，请重新登录！', '登录出错')
            //         })
            //     } else {
            //         next()
            //     }
            // }
        }
    } else {
        if (whiteList.includes(to.path)) {
           // next();
           next('/login');
        } else {
           next('/login');
        }
    }
}

router.beforeEach(routerBeforeEach);
