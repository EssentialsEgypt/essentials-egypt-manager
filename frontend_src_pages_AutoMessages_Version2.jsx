import React, { useEffect, useState } from 'react';

export default function AutoMessages() {
  const [data, setData] = useState({ templates: [] });

  useEffect(() => {
    fetch('/api/auto-messages')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Auto Messages & Replies</h2>
      <ul>
        {data.templates.map((tpl, idx) => (
          <li key={idx}>
            <strong>{tpl.trigger}</strong>: {tpl.reply}
          </li>
        ))}
      </ul>
    </div>
  );
}