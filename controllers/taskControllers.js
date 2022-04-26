const Task = require('../model/taskModel')

exports.createTask = async (req, res) => {
    try {
      const newTask = await Task.create(req.body);
      res.status(201).json({ status: "success", data: newTask });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: err,
      });
    }
  };
  
exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json({ status: "success", data:tasks });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: "Invalid data send",
      });
    }
  };
  
exports.updateTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      res.status(200).json({ status: "success", data: task });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: "Invalid data send",
      });
    }
  };
  
exports.deleteTask = async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
  
      res.status(200).json({ status: "success" });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: "Invalid data send",
      });
    }
  };
  