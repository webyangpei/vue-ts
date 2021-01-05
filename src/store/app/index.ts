import {Module} from 'vuex';
import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';
import {AppState} from './types';
import {RootState} from '@/store/types';

export const state: AppState = {
	// 侧边栏存储 是否展开
    sidebar: '',
	// 拥有权限的路由
    permission_routers: [],
    // 用户信息
    user_info: ''
};

const namespaced: boolean = false;

export const app: Module<AppState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
