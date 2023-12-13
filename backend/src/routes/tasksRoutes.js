//Imports
const express = require("express");
const taskRoutes = express.Router();
const tasksController = require("../controllers/tasksController");
const taskMiddleware = require("../middlewares/tasksMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//Routes
taskRoutes.get("/tasks", tasksController.getAll);
taskRoutes.post(
  "/tasks",
  
  //Validação de token desativada até implementação da v2.0 do frontend
  // authMiddleware.validateToken,
  taskMiddleware.validateFieldTitle,
  tasksController.createTask
);
taskRoutes.delete("/tasks/:id", tasksController.deleteTask);
taskRoutes.put(
  "/tasks/:id",
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validateFieldStatus,
  tasksController.updateTask
);

//Module exports
module.exports = taskRoutes;
