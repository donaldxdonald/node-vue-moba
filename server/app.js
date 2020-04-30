const express = require('express')
const path = require('path')

const app = express()

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


require('./plugins/mongo')(app)
require('./routes/admin/index.js')(app)



app.listen(3000, () => {
  console.log('运行成功~ http://localhost:3000');
  
})