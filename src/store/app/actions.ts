import { ActionTree } from "vuex";
import axios from 'axios';
import { RootState } from "@/store/types";
import { AppState } from "@/store/app/types";

export const action:ActionTree<RootState, AppState> = {
    fetchData({ commit }): any {
        axios({
            url: 'https://....'
        }).then((response) => {
            // const payload: User = response && response.data;
            const payload: any = response && response.data;
            commit('profileLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('profileError');
        });
    }
}
