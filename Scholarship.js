import React, { useState } from 'react';
import '../index.css';

function Scholarship() {
  const [gpa, setGpa] = useState('');
  const [message, setMessage] = useState('');

  const handleApply = e => {
    e.preventDefault();
    if (parseFloat(gpa) >= 3.5) {
      setMessage("Congratulations! You are eligible.");
    } else {
      setMessage("Sorry, you are not eligible.");
    }
  };

  return (
    <div className="container">
      <h2>Scholarship Form</h2>
      <form onSubmit={handleApply}>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Registration No" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Year" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Branch" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Section" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Enter GPA" value={gpa} onChange={e => setGpa(e.target.value)} />
        <button type="submit">Apply</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Scholarship;
