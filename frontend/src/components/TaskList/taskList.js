import React from 'react';
import { Link } from 'react-router-dom';
import './taskList.css';

function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) return <p className="no-tasks">No tasks found.</p>;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3 className="task-title">{task.title}</h3>
          {task.description && <p className="task-desc">{task.description}</p>}
          <p className="task-status">Status: <span>{task.status}</span></p>
          {task.dueDate && (
            <p className="task-due">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          )}
          <div className="task-actions">
            <Link to={`/edit/${task.id}`} className="edit-btn">Edit</Link>
            <button onClick={() => onDelete(task.id)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
