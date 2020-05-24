const axios = require('axios')

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://192.168.0.15:3000/web/api'
})

module.exports = request