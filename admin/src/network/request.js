import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  // baseURL: 'http://192.168.0.15:3000/admin/api'
})

// 全局拦截请求添加token
request.interceptors.request.use(config => {
  if (sessionStorage.token) {
  config.headers.Authorization = 'Bearer ' + (sessionStorage.token || '')
  }
  return config
}, err => {
  console.log(err);
})


// 全局拦截错误请求并弹窗显示
request.interceptors.response.use(res => {
  return res
},err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }
  if (err.response.status === 401) {
    router.push('/login')
    
  }
})

export default request