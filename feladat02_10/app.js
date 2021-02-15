const express = require("express");
const cors = require("cors");

const app = express();
const port = 9000;

const router = require("./controllers/bookController");

app.use(cors());
app.use(express.json());

app.use("/", express.static("public"));

app.use("/book", router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
