const express = require('express');
const router = express.Router();
const todoService = require('../services/todoService')

router.post("/add", (req, res) => {
    const todo = req.body.todo;
    todoService.save(todo);
    res.json({todo: todo});
});

router.get("/all", (req, res) => {
    res.json({todos: todoService.getTodos()})
});

router.delete("/:id", (req, res) => {
    todoService.delete(parseFloat(req.params.id))
    res.json({todos: todoService.getTodos()})
});

module.exports = router;