import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddTask from './pages/AddTask/addTask';
import Home from './pages/Home/home';
import EditTask from './pages/EditTask/editTask';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <nav className="app-nav">
        <Link to="/" className="nav-link">Home</Link>
        <span className="nav-separator">|</span>
        <Link to="/add" className="nav-link">Add Task</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
