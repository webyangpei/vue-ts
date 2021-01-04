import Vue from 'vue';
import VueRouter, {RouteConfig } from 'vue-router';
import Layout from '@/views/Layout/index.vue';

Vue.use(VueRouter);

export const constantRouters: RouteConfig[] = [
    {
        path: '/',
        component: Layout,
		redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/Dashboard/index.vue'),
            name: 'dashboard',
            meta: {title: 'dashboard', icon: 'dashboard'}
        }]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
	{
		path: '*',
		name: '404',
		component: () => import('@/views/404.vue')
	},
	// {
	// 	path: '/industryTools/workbench',
	// 	name: 'industryTools',
	// 	meta: {
	// 		isMicro: true,
	// 		title: '行业'
	// 	},
	// 	component: Layout
	// }
];

export const asyncRouter: RouteConfig[] = [
    // 用户管理 - 用户权限
    {
        path: '/user',
        component: Layout,
        name: 'user',
        meta: {
            title: '用户管理',
            icon: ''
        },
        children: [
            {
                path: 'user-list',
                component: () => import('@/views/User/userList.vue'),
                name: 'orderList',
                meta: {
                	title: '用户列表'
                }
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.PREFIX_URL,
    routes: constantRouters
});

export default router;

