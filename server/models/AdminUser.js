const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {type: String},
  password: {
    type: String,
    select: false,//请求数据是默认不带此项，可用于登录页面修改账户密码时默认不显示  
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)