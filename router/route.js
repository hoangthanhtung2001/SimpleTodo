const route = require('express').Router();
const todoClt = require('../controller/todoClt')
route.get("/info", todoClt.getAllTodo)
route.get("/completed",todoClt.GetCompltedTodo)
route.get("/active",todoClt.GetActiveToDo)
route.post("/add",todoClt.addTodo)
route.patch('/update/:id',todoClt.EditTodo)
route.delete('/delete/:id',todoClt.DeleteTodo)
module.exports = route