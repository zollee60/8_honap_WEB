const express = require('express')
const app = express()
const port = 3000;
const controller = require("./controllers/controller")

app.use("/", express.static("public"));

app.use(express.json());

app.use("/api", controller);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})