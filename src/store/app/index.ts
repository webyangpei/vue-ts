import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AppState } from './types';
import { RootState } from "@/store/types";

export const state: AppState = {
    device: 'pc',
    sidebar: ''
}

const namespaced: boolean = false;

export const app: Module<AppState, RootState> = {
    namespaced,
    state,
    getters,
    mutations,
    actions
};
