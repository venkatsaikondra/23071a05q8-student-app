import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('student', JSON.stringify(form));
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Registration No" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Year" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Branch" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Section" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <input type="password" placeholder="Confirm Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button onClick={() => alert("Registered successfully!")}>Register</button>
      </form>
    </div>
  );
}

export default Register;
