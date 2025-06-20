import React from 'react';
import './TaskForm.css'; // Import CSS styles

function TaskForm({ formData, onChange, onSubmit, isEdit = false }) {
    return (
        <div className="task-form-container">
            <form className="task-form" onSubmit={onSubmit}>
                <h2 className="form-title">{isEdit ? "Edit Task" : "Add Task"}</h2>

                <input
                    className="form-input"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={onChange}
                    required
                />

                <textarea
                    className="form-textarea"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={onChange}
                />

                <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={onChange}
                >
                    <option value="todo">Todo</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <input
                    className="form-input"
                    name="dueDate"
                    type="date"
                    value={formData.dueDate?.split("T")[0] || ""}
                    onChange={onChange}
                />

                <button className="form-button" type="submit">
                    {isEdit ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
