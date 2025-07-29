import React, { useEffect, useState } from 'react';

export default function CashLog() {
  const [data, setData] = useState({ entries: [], totalProfit: 0 });
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetch('/api/cashlog')
      .then(res => res.json())
      .then(setData);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/cashlog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, amount: Number(amount) }),
    })
      .then(res => res.json())
      .then(() => {
        fetch('/api/cashlog')
          .then(res => res.json())
          .then(setData);
        setAmount('');
      });
  }

  return (
    <div>
      <h2>Cash Log</h2>
      <form onSubmit={handleSubmit}>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Entry</button>
      </form>
      <h3>Total Profit: {data.totalProfit}</h3>
      <ul>
        {data.entries.map(entry => (
          <li key={entry.id}>
            {entry.type}: {entry.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}