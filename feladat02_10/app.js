const express = require("express");

const app = express();
const port = 3000;

const router = require("./controllers/bookController");

app.use(express.json());

app.use("/", express.static("public"));

app.use("/book", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
