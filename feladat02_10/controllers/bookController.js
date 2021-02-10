const express = require("express");
const router = express.Router();
const bookService = require("../services/bookService");

router.post("/create", (req, res) => {
  console.log(req.body);
  const book = req.body;
  console.log(book);
  bookService.save(book);
  res.json({ book: book });
});

router.get("/all", (req, res) => {
  res.json({ books: bookService.getCharlist() });
});

router.delete("/del/:id", (req, res) => {
  bookService.delete(parseFloat(req.params.id));
  res.json({ books: bookService.getCharlist() });
});

router.get("/:id", (req, res) => {
  const book = bookService.getChar(parseFloat(req.params.id));
  res.json(book);
});

router.put("/update/:id", (req, res) => {
  bookService.updateBook(req.body);
});

module.exports = router;
