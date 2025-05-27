import React from 'react';
import { Link } from 'react-router-dom';

function LeftPanel() {
  return (
    <aside style={{ width: '200px', background: '#f0f0f0', padding: '1rem', minHeight: '80vh' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/dashboard">
              <button  style={{ width: '100%', marginBottom: '1rem' }}>Dashboard</button>
            </Link>
          </li>
          <li>
            <Link to="/employee-list">
              <button  style={{ width: '100%', marginBottom: '1rem' }}>Employee List</button>
            </Link>
          </li>
          <li>
            <Link to="/edit-employee">
                <button  style={{ width: '100%', marginBottom: '1rem' }}>Add/Edit Employee</button>
            </Link>
          </li>
          <li>
            <Link to="/department-list">
              <button style={{ width: '100%', marginBottom: '1rem' }}>Department List</button>
            </Link>
          </li>
          <li>
            <Link to="/edit-department">                 
                <button  style={{ width: '100%', marginBottom: '1rem' }}>Add/Edit Department</button>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default LeftPanel;