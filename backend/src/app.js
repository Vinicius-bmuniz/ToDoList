const express = require("express")
const cors = require("cors")

const taskRoutes = require ("./routes/tasksRoutes")
const usersRoutes = require ("./routes/usersRoutes")

const app = express()

app.use(express.json())
app.use(cors())
app.use(taskRoutes, usersRoutes)

module.exports = app