import {ActionTree} from 'vuex';
import {RootState} from '@/store/types';
import {AppState} from '@/store/app/types';
import {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {getUserMenus} from '@/api/user';
import {asyncRouter} from '@/router';
import Storage from '@/utils/storage';
import * as API_Login from '@/api/login';

export const actions: ActionTree<AppState, RootState> = {
    // 执行登录事件
    loginAction({commit}, params): any {
        return new Promise((resolve, reject) => {
            API_Login.Login(params).then((res: AxiosResponse) => {
                const { username } = res.data;
                commit('SET_USER', username);
                resolve(res);
            }).catch(reject);
        });
    },
    // 获取动态权限菜单
    GenerateRoutes({commit}): any {
        return new Promise((resolve, reject) => {
            commit('SET_ROUTERS', asyncRouter);
            resolve(1);
        });
        /*        const user = Storage.getItem('user');
                if (!user) {
                    return Promise.reject();
                }
                const roleId = 0;
                // let roleId = user.roleId
                // if (user.founder === 1) roleId = 0
                return new Promise((resolve, reject) => {
                    if (roleId === 0) {
                        commit('SET_ROUTERS', asyncRouter);
                        resolve();
                    } else {
                        getUserMenus(roleId).then((response: any) => {
                            const accessedRouters: any[] = filterRoleRouter(asyncRouter, response);
                            commit('SET_ROUTERS', accessedRouters);
                            resolve();
                        }).catch(reject);
                    }
                });*/
    }
};

/**
 * 递归筛选出有权限的路由
 * @param routers
 * @param names
 * @returns {Array}
 */
function filterRoleRouter(routers: any[], names: any[]) {
    const resultRouters: any[] = [];
    routers.forEach((item) => {
        if (names.includes(item.name) || item.hidden) {
            if (item.children) {
                item.children = filterRoleRouter(item.children, names);
            }
            resultRouters.push(item);
        }
    });
    return resultRouters;
}
