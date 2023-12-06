//Imports
const express = require("express")
const router = express.Router()
const tasksController = require("./controllers/tasksController")
const taskMiddleware = require("./middlewares/tasksMiddleware")

//Routes
router.get("/tasks", tasksController.getAll)
router.post("/tasks", taskMiddleware.validateFieldTitle, tasksController.createTask)
router.delete("/tasks/:id", tasksController.deleteTask)
router.put("/tasks/:id", 
    taskMiddleware.validateFieldTitle,
    taskMiddleware.validateFieldStatus, 
    tasksController.updateTask)

//Module exports
module.exports = router