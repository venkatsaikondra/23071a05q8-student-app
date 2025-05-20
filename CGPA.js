import React from 'react';
import '../index.css';

function CGPA() {
  return (
    <div className="container">
      <input placeholder="1st year 1semister" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="1st year 2semister" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="2nd year 1semister" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="2nd year 2semister" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="3rd year 1semister" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="3rd year 2semister" onChange={e => setForm({ ...form, name: e.target.value })} />
        //calculate cgpa 
    </div>
  );
}

export default CGPA;
