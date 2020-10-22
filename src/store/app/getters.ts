import {GetterTree} from 'vuex';
import {AppState, Route} from '@/store/app/types';
import {RootState} from '../types';

export const getters: GetterTree<AppState, RootState> = {
    sidebar(state: AppState): string {
        return state.sidebar;
    },
    // 权限数据
    permission_routers(state: AppState): Route[] | undefined {
        return state.permission_routers;
    }
};
