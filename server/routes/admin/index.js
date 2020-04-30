module.exports = app => {
  const express = require('express')

  const router = express.Router({
    mergeParams: true
  })

  // 通用CRUD接口
  require('./crud')(router)

  // 上传图片接口
  require('./upload')(app)

  // 测试用
  router.get('/all', async (req, res) => {
    let data = await req.Model.find()
    res.send(data)
  })

  router.delete('/deleteall', async (req, res) => {
    await req.Model.deleteMany({})
    
  })

  
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    // 将resource转化为类名
    const modelName = require('inflection').classify(req.params.resource)
    // 识别models文件夹下的对应model，并将其赋值给req的Model，以便router访问
    req.Model = require(`../../models/${modelName}`)
    await next()
  }, router)
}