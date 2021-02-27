const express = require("express");
const router = express.Router();
const bookService = require("../services/bookService");

router.post("/add", async (req, res) => {
  const book = req.body;
  const savedBook = await bookService.save(book);
  res.json(savedBook);
});

router.get("/all", async (req, res) => {
  res.json({ books: await bookService.getBooklist() });
});

router.delete("/:id", async (req, res) => {
  await bookService.delete(parseFloat(req.params.id));
  res.json({ books: await bookService.getBooklist() });
});

router.get("/:id", async (req, res) => {
  const book = await bookService.getBook(parseFloat(req.params.id));
  if(book !== 0){
    res.json(book);
  } else{
    res.sendStatus(400);
  }
});

router.put("/update/:id", async (req, res) => {
  const id = parseFloat(req.params.id);
  const newBookInfo = req.body;
  const success = await bookService.update(id, newBookInfo);
  if (success) {
    res.json(await bookService.getBook(id));
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
