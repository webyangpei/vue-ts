import request from '@/utils/request';


/**
 * 登录API
 * @param params
 * @constructor
 */
export function Login(params?: { username: string, password: string }) {
	return request({
		url: '/user/login',
		// url: 'http://localhost:3008/api/user/login',
		method: 'get',
		params
	});
}
