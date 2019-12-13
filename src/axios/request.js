import axios from 'axios'
const SERVER_IPADDR =  '192.168.0.155'

// 请求新闻
export function requestNews(config) {

    const instance = axios.create({
        baseURL:SERVER_IPADDR
    })
    // 请求拦截
    // instance.interceptors.request.use();
    // instance.interceptors.response.use();
// 返回的是一个promise值
    return instance(config)
}

// 请求用户信息
export function requestUser(config) {

    const instance = axios.create({
        baseURL:SERVER_IPADDR
    })
    // 请求拦截
    // instance.interceptors.request.use();
    // instance.interceptors.response.use();
// 返回的是一个promise值
    return instance(config)
}