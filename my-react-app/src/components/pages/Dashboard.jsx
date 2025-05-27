import React, { useEffect, useState } from 'react';
import { fetchDashboardSummary } from '../../services/dashboardService';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardSummary()
      .then(res => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!stats) return <div>No data available.</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h3>Total Employees</h3>
          <p>{stats.totalEmployees}</p>
        </div>
        <div>
          <h3>Total Departments</h3>
          <p>{stats.totalDepartments}</p>
        </div>
        <div>
          <h3>Recent Hires</h3>
          <p>{stats.recentHires}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;