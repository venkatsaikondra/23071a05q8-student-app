import React from 'react';
import '../index.css';

function Payment() {
  return (
    <div className="container">
      <h2>Payment Page</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Registration No" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Year" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Branch" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Section" onChange={e => setForm({ ...form, name: e.target.value })} />
      <p>Amount: $50000</p>
      <button onClick={() => alert("Payment Successful!")}>Pay Now</button>
    </div>
  );
}

export default Payment;
