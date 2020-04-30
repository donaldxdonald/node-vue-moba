module.exports = app => {
  const multer = require('multer')
  const path = require('path')
  const upload = multer({dest: path.join(__dirname, '/../../uploads')})
  app.post('/admin/api/uploads', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}