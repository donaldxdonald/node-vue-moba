module.exports = app => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
  return async (req, res, next) => {
    // 验证token
    const token = String(req.headers.authorization).split(' ').pop()
    if (token == 'undefined') {
      res.status(401).send({
        message: '请提供jwt token'
      })
    }
    
    const tokenData = jwt.verify(token, app.get('secret'))
    assert(tokenData, 422, '无效的jwt token')
    req.user = AdminUser.findById(tokenData.id)
    assert(req.user, 422, '未能找到用户')
    await next()
  }
}