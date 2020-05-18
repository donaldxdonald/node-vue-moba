module.exports = router => {
  const mongoose = require('mongoose')
  const Article = mongoose.model('Article')
  router.get('/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id).lean()
    article.related = await Article.find().where({
      categories: {$in: article.categories}
    }).limit(2)
    res.send(article)
  })
}