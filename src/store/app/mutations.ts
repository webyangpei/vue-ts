import { MutationTree} from 'vuex';
import { AppState } from '@/store/app/types';

export const mutations: MutationTree<AppState> = {
    SET_ROUTERS(state: any, payload: any[]) {
        state.permission_routers = payload;
    }
};
