import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addTask.css'; // Import the CSS

function AddTask() {
  const [form, setForm] = useState({ title: "", description: "", status: "todo", dueDate: "" });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title) return alert("Title is required");
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    navigate("/");
  };

  return (
    <div className="add-task-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add Task</h2>

        <input
          className="form-input"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          className="form-textarea"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <select
          className="form-select"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <input
          className="form-input"
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleChange}
        />

        <button className="form-button" type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddTask;
