import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to Student Management System</h2>
      <p>Please login or register to continue.</p>
      <Link to="/"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
    </div>
  );
}

export default Home;
