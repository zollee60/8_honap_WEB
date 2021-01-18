const express = require('express');
const gameService = require('../services/gameService')
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/start", (req, res) => {
    gameService.generateRandom();
    res.render("game", {result: 3})
});

router.get("/guess", (req, res) => {
    const guess = parseFloat(req.query.number);
    const result = gameService.checkAnswer(guess);
    if(result === 1){
        res.render("game", {result: 1})
    } else if(result === -1){
        res.render("game", {result: -1})
    } else{
        res.render("game", {result: 0})
    }
})

module.exports = router;