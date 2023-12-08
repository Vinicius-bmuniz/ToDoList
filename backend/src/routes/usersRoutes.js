const express = require("express");
const usersRoutes = express.Router();
const usersController = require("../controllers/usersController");
const usersMiddleware = require("../middlewares/usersMiddleware");

//Routes
usersRoutes.post(
  "/register",
  usersMiddleware.validateFieldName,
  usersMiddleware.validateFieldEmail,
  usersMiddleware.validateFieldPassword,
  usersController.createUser
);

usersRoutes.post("/login", usersController.loginUser);

usersRoutes.get("/users", usersController.getAllUsers);

module.exports = usersRoutes;
