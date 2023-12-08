const express = require("express")
const taskRoutes = require ("./routes/tasksRoutes")
const usersRoutes = require ("./routes/usersRoutes")

const app = express()

app.use(express.json())
app.use(taskRoutes, usersRoutes)

module.exports = app