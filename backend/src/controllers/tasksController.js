const tasksModel = require("../models/tasksModel");
const jwt = require("../security/jwt");

const getAll = async (request, response) => {
  const { authentication } = request.headers;
  const validToken = jwt.validateToken(authentication);

  const tasks = await tasksModel.getAll();

  return response
    .status(200)
    .json({ task: tasks, token: authentication, valid: validToken });
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);

  const fieldsReq = request.body;

  return response
    .status(201)
    .json({ insertId: createdTask, fields: fieldsReq });
};

const deleteTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.deleteTask(id);
  return response.status(204).json();
};

const updateTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
