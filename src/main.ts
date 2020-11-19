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


import Component from 'vue-class-component';

Component.registerHooks(['setup', 'beforeRouteUpdate', 'beforeRouteEnter', 'beforeRouteLeave']);

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
