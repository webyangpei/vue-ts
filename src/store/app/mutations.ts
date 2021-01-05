import { MutationTree} from 'vuex';
import { AppState } from '@/store/app/types';

export const mutations: MutationTree<AppState> = {
    SET_ROUTERS(state: AppState, payload: any[]) {
        state.permission_routers = payload;
    },
    SET_USER(state: AppState, payload: string) {
        state.user_info = payload;
    }
};
