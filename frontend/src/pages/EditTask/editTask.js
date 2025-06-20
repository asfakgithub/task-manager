import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './editTask.css';

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", status: "todo", dueDate: "" });

  useEffect(() => {
    fetch(`https://task-manager-0mvc.onrender.com`)
      .then(res => res.json())
      .then(data => {
        const task = data.find(t => String(t.id) === id);
        if (task) setForm(task);
      });
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(`https://task-manager-0mvc.onrender.com/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    navigate("/");
  };

  return (
    <div className="edit-task-container">
      <form className="edit-task-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Edit Task</h2>

        <input
          className="form-input"
          name="title"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />

        <textarea
          className="form-textarea"
          name="description"
          value={form.description}
          placeholder="Description"
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
          value={form.dueDate?.split("T")[0] || ""}
          onChange={handleChange}
        />

        <button className="form-button" type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditTask;
