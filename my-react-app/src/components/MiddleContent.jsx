import React from 'react';
import { Outlet } from 'react-router-dom';

function MiddleContent() {
  return (
    <main style={{ flex: 1, padding: '1rem' }}>
      <Outlet />
    </main>
  );
}

export default MiddleContent;