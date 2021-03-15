import Axios from 'axios'
import config from './config'

const AxiosUtil = Axios.create(config)
// // 响应拦截器
AxiosUtil.interceptors.response.use(
  response => {
    if (response.data.success === true) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    return Promise.reject(error.response)
  })

export default AxiosUtil
