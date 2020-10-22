import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/views/Layout/index.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'dashboard',
            meta: { title: 'dashboard', icon: 'dashboard' }
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
    }
];

const asyncRouter: RouteConfig[] = [
    {
        path: '*',
        redirect: '/404',
        component: () => import('@/views/404.vue')
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => { y: 0 },
  routes
});

export default router;
