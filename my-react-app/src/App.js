import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftPanel from './components/LeftPanel';   
import EmployeeList from './components/pages/EmployeeList';
import EditEmployee from './components/pages/EditEmployee';
import DepartmentList from './components/pages/DepartmentList';       
import EditDepartment from './components/pages/EditDepartment';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ display: 'flex', flex: 1 }}>
          <LeftPanel />
          <main style={{ flex: 1, padding: '1rem' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employee-list" element={<EmployeeList />} />
              <Route path="/edit-employee/:empid?/:mode?" element={<EditEmployee />} />
              <Route path="/department-list" element={<DepartmentList />} />
              <Route path="/edit-department/:deptid?/:mode?" element={<EditDepartment />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;