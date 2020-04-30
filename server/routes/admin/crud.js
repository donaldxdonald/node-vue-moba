module.exports = router => {
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  router.get('/', async (req, res) => {
    let model = await req.Model.find().populate('parent').limit(10)
    
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })


  router.get('/edit/:id', async (req, res) => {
    let model = await req.Model.findById(req.params.id)
    res.send(model)
  })
}