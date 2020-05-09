const axios = require('axios')

const request = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

module.exports = request