import React, { useEffect, useState } from 'react';
import { fetchAllEmployees, deleteEmployee } from '../../services/employeeService';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllEmployees()
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = (empid) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(empid)
        .then(() => {
          setEmployees(employees.filter(emp => emp.empid !== empid));
          alert('Employee deleted successfully!');
        })
        .catch(() => alert('Failed to delete employee.'));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Employee Management</h1>
        <input type='button' value='Add Employee' onClick={() => navigate('/edit-employee')} />
      </div>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Date of Joining</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.empid}>
              <td>{emp.empid}</td>
              <td>{emp.empname}</td>
              <td>{emp.dob}</td>
              <td>{emp.dateOfJoining}</td>
              <td>{emp.department?.deptname}</td>
              <td>
                <input
                  type="button"
                  value="view"
                  style={{ marginRight: "5px" }}
                  onClick={() => navigate(`/edit-employee/${emp.empid}/view`)}
                />
                <input
                  type="button"
                  value="edit"
                  style={{ marginRight: "5px" }}
                  onClick={() => navigate(`/edit-employee/${emp.empid}`)}
                />
                <input
                  type="button"
                  value="delete"
                  onClick={() => handleDelete(emp.empid)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;