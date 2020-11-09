import request from '@/utils/request';

/**
 * 获取用户权限菜单信息
 * @param params
 */
export function getUserMenus(params?: any) {
    return request({
        url: '/api/menu/list',
        method: 'get',
        params
    });
}
