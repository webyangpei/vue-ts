import Vue from 'vue';
import VueRouter, {RouteConfig } from 'vue-router';
import Layout from '@/views/Layout/index.vue';

Vue.use(VueRouter);

export const constantRouters: RouteConfig[] = [
    {
        path: '/',
        component: Layout,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'dashboard',
            meta: {title: 'dashboard', icon: 'dashboard'}
        }]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
	{
		path: '/industryTools/workbench',
		name: 'industryTools',
		meta: {
			isMicro: true,
			title: '行业'
		},
		component: Layout
	}
];

export const asyncRouter: RouteConfig[] = [
    // 用户管理 - 用户权限
    {
        path: '/user',
        component: Layout,
        redirect: '/user/user-list',
        name: 'user',
        meta: {
            title: '用户管理',
            icon: ''
        },
        children: [
            {
                path: 'user-list',
                component: () => import('@/views/user/userList.vue'),
                name: 'orderList',
                meta: {title: 'orderList'}
            }
        ]
    }
];

// @ts-ignore
const router = new VueRouter({
    mode: 'history',
    base: process.env.PREFIX_URL,
    routes: constantRouters
});

export default router;

