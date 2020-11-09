import request from '@/utils/request';

/**
 * 获取用户信息
 * @param params
 */
export function getUserInfo(params?: any) {
  return request({
      url: '/api/list',
      method: 'get',
      params
  });
}
