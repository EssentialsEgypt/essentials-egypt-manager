import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading Dashboard...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {data.cards.map((card, idx) => (
          <div key={idx}>
            <strong>{card.title}</strong>: {card.value}
          </div>
        ))}
      </div>
      <div>
        <h3>Charts:</h3>
        {data.charts.map((chart, idx) => (
          <div key={idx}>{chart.name}: {chart.data.join(', ')}</div>
        ))}
      </div>
    </div>
  );
}