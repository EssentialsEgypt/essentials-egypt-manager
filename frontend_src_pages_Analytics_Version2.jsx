import React, { useEffect, useState } from 'react';

export default function Analytics() {
  const [data, setData] = useState({ traffic: [], trends: [], metrics: {} });

  useEffect(() => {
    fetch('/api/analytics')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Website Analytics</h2>
      <div>Traffic: {data.traffic.join(', ')}</div>
      <div>Trends: {data.trends.join(', ')}</div>
      <div>Metrics: {JSON.stringify(data.metrics)}</div>
    </div>
  );
}