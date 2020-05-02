module.exports = app => {
  const express = require('express')
  
  const router = express.Router({
    mergeParams: true
  })


  // 通用CRUD接口
  require('./crud')(app,router)

  // 上传图片接口
  require('./upload')(app)

  // 登录接口
  require('./login')(app)

  // 验证token中间件
  const auth = require('./auth')
  
  // 识别resource的中间件
  const resource = require('./resource')

  // 测试用
  router.get('/all', async (req, res) => {
    let data = await req.Model.find()
    res.send(data)
  })

  router.delete('/deleteall', async (req, res) => {
    await req.Model.deleteMany({})
    
  })

  
  // 统一做错误处理
  app.use(async (err, req, res, next) => {
    
    res.status(err.status).send({
      message: err.message
    })
    
    // if (err.response.data.message) {
    //   Vue.prototype.$message({
    //     type: 'error',
    //     message: err.response.data.message
    //   })
    // }
    
    await next()
  })
  
  app.use('/admin/api/rest/:resource', auth(app), resource(), router)
}