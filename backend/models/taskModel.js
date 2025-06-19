const { v4: uuidv4 } = require("uuid");

let tasks = [];

function createTask({ title, description = "", status = "todo", dueDate = null }) {
    const newTask = {
        id: uuidv4(),
        title,
        description,
        status,
        dueDate,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    tasks.push(newTask);
    return newTask;
}

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

function updateTask(id, updatedFields) {
    const task = getTaskById(id);
    if (!task) return null;
    Object.assign(task, updatedFields, { updatedAt: new Date() });
    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};
