/*eslint-disable*/
import AxiosUtil from '@/api/AxiosUtil'

/**
 * 用户登录
 * @param params {userName,userPass}
 * @returns {*}
 */
export function login (params) {
  return AxiosUtil({
    url: '/User/login',
    method: 'post',
    params
  })
}

/**
 * 用户注册
 * @param params {userName,email,userPass,avatarURL}
 * @returns {*}
 */
export function register (params) {
  return AxiosUtil({
    url: '/User/register',
    method: 'post',
    params
  })
}



