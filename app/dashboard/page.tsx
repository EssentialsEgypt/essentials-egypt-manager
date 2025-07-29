'use client'
import { useEffect, useState } from 'react';
import { Chart } from '../../components/ui/Chart';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Dashboard: Orders, Revenue, Engagement</h1>
      <Chart />
    </div>
  );
}