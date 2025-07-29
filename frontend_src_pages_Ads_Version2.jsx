import React, { useEffect, useState } from 'react';

export default function Ads() {
  const [data, setData] = useState({ ads: [], suggestions: [] });

  useEffect(() => {
    fetch('/api/ads')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Ad Performance</h2>
      <ul>
        {data.ads.map((ad, idx) => (
          <li key={idx}>{ad.platform}: {ad.status} - ${ad.spend}</li>
        ))}
      </ul>
      <h3>Suggestions</h3>
      <ul>
        {data.suggestions.map((sug, idx) => (
          <li key={idx}>{sug}</li>
        ))}
      </ul>
    </div>
  );
}