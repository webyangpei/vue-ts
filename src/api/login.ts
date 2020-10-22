import request from '@/utils/request'

// 参数对对象类型
export function getUserInfo(params?:any) {
  return request({
      url: '/api/list',
      method: 'get',
      params
  })
}
