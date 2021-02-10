const express = require('express');
const router = express.Router();
const charService = require('../Services/charService');

router.post("/add", (req,res)=>{
    console.log(req.body);
    const char = req.body;
    console.log(char);
    charService.save(char);
    res.json({char:char});
});

router.get("/all", (req,res)=>{
    res.json({chars: charService.getCharlist()})
});

router.delete("/:id",(req,res)=>{
    charService.delete(parseFloat(req.params.id))
    res.json({chars:charService.getCharlist()})
});

router.get("/:id", (req,res)=>{
    const char = charService.getChar(parseFloat(req.params.id));
    res.json(char);
});

module.exports = router;