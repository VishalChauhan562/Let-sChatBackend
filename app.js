const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/taskRoutes");
const app = express();

console.log("app running");
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRouter);

module.exports = app;
