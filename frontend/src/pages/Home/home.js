import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="home-container">
      <h2 className="home-title">All Tasks</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available.</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="task-card">
            <h3 className="task-title">{task.title}</h3>
            {task.description && <p className="task-desc">{task.description}</p>}
            <p className="task-status">Status: <span>{task.status}</span></p>
            {task.dueDate && (
              <p className="task-date">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            )}
            <div className="task-actions">
              <Link to={`/edit/${task.id}`} className="edit-btn">Edit</Link>
              <button onClick={() => handleDelete(task.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
