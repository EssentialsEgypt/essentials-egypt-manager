'use client';
import { useEffect, useRef } from 'react';
import ChartJS from 'chart.js/auto';

export function Chart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Revenue',
          data: [1200, 1900, 3000, 2200],
          backgroundColor: '#facc15'
        }]
      }
    });
  }, []);

  return <canvas ref={chartRef} className="max-w-xl" />;
}