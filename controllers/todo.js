const {todos} = require("../models/todo")

module.exports = {
  getTodos: (req,res) => {
    res.send(todos)
  },

  getTodosById: (req,res) => {
    res.send(todos)
  },

  postTodos: (req,res) => {
    res.send(todos)
  },

  deleteTodos: (req,res) => {
    res.send(todos)
  },

}