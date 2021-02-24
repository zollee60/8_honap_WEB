const express = require('express');
const router = express.Router();
const bookService = require('../services/bookService');

router.post("/add", (req,res)=>{
    const book = req.body;
    const newBookID = bookService.save(book);
    res.json(bookService.getBook(newBookID));
});

router.get("/all", (req,res)=>{
    res.json({books: bookService.getBooklist()})
});

router.delete("/:id",(req,res)=>{
    bookService.delete(parseFloat(req.params.id))
    res.json({books:bookService.getBooklist()})
});

router.get("/:id", (req,res)=>{
    const book = bookService.getBook(parseFloat(req.params.id));
    res.json(book);
});

router.put("/update/:id", (req, res) => {
    const id = parseFloat(req.params.id);
    const newBookInfo = req.body;
    const success = bookService.update(id,newBookInfo);
    if(success){
        res.json(bookService.getBook(id));
    }
    else{
        res.sendStatus(400);
    }
})

module.exports = router;