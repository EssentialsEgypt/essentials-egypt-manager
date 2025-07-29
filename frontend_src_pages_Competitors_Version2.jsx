import React, { useEffect, useState } from 'react';

export default function Competitors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/competitors')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Competitor Tracking</h2>
      <ul>
        {data.map(comp => (
          <li key={comp.id}>
            {comp.name} - Viral Reels: {comp.viralReels} - Ideas: {comp.ideas.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}