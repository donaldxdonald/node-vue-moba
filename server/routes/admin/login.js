module.exports = app => {
  const AdminUser = require('../../models/AdminUser')
  const jwt = require('jsonwebtoken')
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名查找用户
    const user = await AdminUser.findOne({username}).select('password')
    require('http-assert')(user, 422, '用户不存在')

    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    require('http-assert')(isValid, 422, '密码错误')

    // 3.返回token
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})
  })
}