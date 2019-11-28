const express = require('express')
const route = express.Router()

const {
  getTodos,
  getTodosById,
  postTodos,
  deleteTodos} = require("../controllers/todo")

route.get("/", getTodos)
route.get("/", getTodosById)
route.post("/", postTodos)
route.delete("/", deleteTodos)

module.exports = route