const express = require('express')
const gameController = require('./controllers/gameController')
const app = express()
const port = 3000

app.set('views', './views')

app.set('view engine', 'pug')

app.use('/', gameController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})