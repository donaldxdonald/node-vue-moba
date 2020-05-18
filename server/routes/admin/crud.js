module.exports = (app,router) => {
  
  
  const auth = require('./auth')

  router.post('/', auth(app), async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  router.get('/', auth(app), async (req, res) => {
    let popName = ['parent', 'categories']
    let model = await req.Model.find().populate(popName)
    
    res.send(model)
  })

  router.put('/:id', auth(app), async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/:id', auth(app), async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })


  router.get('/edit/:id', auth(app), async (req, res) => {
    let model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  
}