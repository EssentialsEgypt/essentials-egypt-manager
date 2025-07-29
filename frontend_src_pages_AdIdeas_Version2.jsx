import React, { useEffect, useState } from 'react';

export default function AdIdeas() {
  const [data, setData] = useState({ ideas: [] });

  useEffect(() => {
    fetch('/api/ad-ideas')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Ad Idea Generator</h2>
      <ul>
        {data.ideas.map((idea, idx) => (
          <li key={idx}>
            <strong>{idea.concept}</strong> - Targeting: {idea.targeting}
          </li>
        ))}
      </ul>
    </div>
  );
}