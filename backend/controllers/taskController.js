const taskModel = require("../models/taskModel");

exports.getTasks = (req, res) => {
    res.json(taskModel.getAllTasks());
};

exports.createTask = (req, res) => {
    const { title, description, status, dueDate } = req.body;
    if (!title || !["todo", "in_progress", "done"].includes(status)) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const task = taskModel.createTask({ title, description, status, dueDate });
    res.status(201).json(task);
};

exports.updateTask = (req, res) => {
    const task = taskModel.updateTask(req.params.id, req.body);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
};

exports.deleteTask = (req, res) => {
    const success = taskModel.deleteTask(req.params.id);
    if (!success) return res.status(404).json({ error: "Task not found" });
    res.status(204).send();
};
