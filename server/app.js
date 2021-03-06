const express = require('express')
const path = require('path')

const app = express()
// 这个值应该是要放在环境变量里，此处暂时这么用
app.set('secret', 'asd12qwez123oj')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/admin', express.static(path.join(__dirname, '/admin')))
app.use('/', express.static(path.join(__dirname, '/web')))
app.use('/mall', express.static(path.join(__dirname, '/mall')))


require('./plugins/mongo')(app)
require('./routes/admin/index.js')(app)
require('./routes/web/index.js')(app)



app.listen(3333, () => {
  console.log('运行成功~ http://localhost:3333');
  
})