const express = require('express')
const path = require('path')

const app = express()
// 这个值应该是要放在环境变量里，此处暂时这么用
app.set('secret', 'asd12qwez123oj')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


require('./plugins/mongo')(app)
require('./routes/admin/index.js')(app)
require('./routes/web/index.js')(app)



app.listen(3000, () => {
  console.log('运行成功~ http://localhost:3000');
  
})