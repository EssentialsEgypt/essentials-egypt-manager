import React, { useEffect, useState } from 'react';

export default function Audience() {
  const [data, setData] = useState({ demographics: {}, responseRates: {} });

  useEffect(() => {
    fetch('/api/audience')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Audience Tracker</h2>
      <div>
        <strong>Demographics:</strong> {JSON.stringify(data.demographics)}
      </div>
      <div>
        <strong>Response Rates:</strong> {JSON.stringify(data.responseRates)}
      </div>
    </div>
  );
}