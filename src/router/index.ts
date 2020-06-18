import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (y: any):any => { y: 0 },
  base: process.env.BASE_URL,
  routes
});

export default router;
