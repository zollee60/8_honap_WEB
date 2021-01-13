const express = require('express')
const userController = require('./controllers/userController')
const app = express()
const port = 3000

app.set('views', './views')

app.set('view engine', 'pug')

app.use("/user", userController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})