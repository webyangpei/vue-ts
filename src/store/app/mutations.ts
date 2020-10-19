import { MutationTree} from 'vuex';
import { AppState } from '@/store/app/types';

export const mutations: MutationTree<AppState> = {
    profileLoaded(state, payload: any) {
        // state.device = false;
        // state.sidebar = payload;
    },
    profileError(state) {
        // state.device = true;
        // state.sidebar = undefined;
    }
};

