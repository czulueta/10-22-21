const express = require("express")
const todoRouter = express.Router()
const Todo = require("../models/todo.js")

todoRouter.get("/", (req, res, next) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

module.exports = todoRouter