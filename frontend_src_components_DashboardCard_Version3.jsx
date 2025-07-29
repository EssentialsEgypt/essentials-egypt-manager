import React from 'react';

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="dashboard-card">
      <span className="icon">{icon}</span>
      <div>
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}