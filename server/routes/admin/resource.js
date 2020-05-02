module.exports = option => {
  return async (req, res, next) => {
    // 将resource转化为类名
    const modelName = require('inflection').classify(req.params.resource)
    // 识别models文件夹下的对应model，并将其赋值给req的Model，以便router访问
    req.Model = require(`../../models/${modelName}`)
    await next()
  }
}