const express = require("express");
const router = express.Router();
const bookService = require("../services/bookService");

router.post("/create", (req, res) => {
  const book = req.body;
  bookService.save(book);
  res.json({ book: book });
});

router.get("/all", (req, res) => {
  res.json({ books: bookService.getBookList() });
});

router.delete("/del/:id", (req, res) => {
  bookService.delete(parseFloat(req.params.id));
  res.json({ books: bookService.getBookList() });
});

router.get("/:id", (req, res) => {
  const book = bookService.getBook(parseFloat(req.params.id));
  res.json(book);
});

router.put("/update/:id", (req, res) => {
  bookService.updateBook(req.params.id, req.body);
  res.json(book);
});

module.exports = router;
