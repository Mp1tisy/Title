import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'
import jsonbigint from 'json-bigint'

export default axios

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('userID')
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.defaults.transformResponse = [function (data) {
  return jsonbigint.parse(data)
}]

axios.interceptors.response.use(function (res) {
  if (res) {
    return res.data
  } else {
    return {}
  }
}, function (error) {
  let status = error.response.status
  let message = '未知错误'
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '403 refresh_token未携带或已过期'
      window.localStorage.removeItem('userID')
      router.push('/login')
      break
    case 401:
      message = 'token过期或未登出'
      window.localStorage.removeItem('userID')
      router.push('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 404:
      message = '错误的手机号'
      break
    default:
      break
  }
  Message({ message: message, type: 'warning' })
})
