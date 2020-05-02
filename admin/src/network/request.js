import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js'

const request = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// 全局拦截请求添加token
request.interceptors.request.use(config => {
  if (localStorage.token) {
  config.headers.Authorization = 'bearer ' + (localStorage.token || '')
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