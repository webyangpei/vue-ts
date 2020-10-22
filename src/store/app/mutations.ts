import { MutationTree} from 'vuex';
import { AppState } from '@/store/app/types';

export const mutations: MutationTree<AppState> = {
    profileLoaded(state: any, payload: any) {
        // state.sidebar = payload;
    }
};
