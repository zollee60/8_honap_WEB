const express = require('express')
const app = express()
const port = 3000

const todoController = require('./controllers/todoController')

app.use(express.json());

app.use('/', express.static('public'))

app.use('/todo', todoController);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})