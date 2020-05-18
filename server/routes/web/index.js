module.exports = app => {
  const router = require('express').Router()
  // 新闻相关
  require('./news')(router)
  // 英雄相关
  require('./hero')(router)
  // 文章相关
  require('./article')(router)

  app.use('/web/api', router)
}