import axios from 'axios'
import extend from 'extend'

const config = {
    baseURL: '//',
    timeout: 5000,
    // `withCredentials`指示是否跨站点访问控制请求
    withCredentials: true,
    paramsSerializer: function paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
    },
}

const net = axios.create(config)

//添加请求拦截器
net.interceptors.request.use(
    (request) => {
        return request
    }, ((error) => {
        Promise.reject(error)
    })
)

//添加响应拦截器
net.interceptors.response.use(
    (response) => {
        return Promise.reject(response);
    }, ((error) => {
        return Promise.reject(error)
    })
)

export default net