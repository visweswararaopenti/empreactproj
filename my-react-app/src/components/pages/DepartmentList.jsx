import React, { useEffect, useState } from 'react';
import { fetchAllDepartments, deleteDepartment } from '../../services/departmentService';
import { useNavigate } from 'react-router-dom';

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllDepartments()
      .then((res) => {
        setDepartments(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = (deptid) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      deleteDepartment(deptid)
        .then(() => {
          setDepartments(departments.filter(dept => dept.deptid !== deptid));
          alert('Department deleted successfully!');
        })
        .catch(() => alert('Failed to delete department.'));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Department Management</h1>
          <input type='button' value='Add Department' onClick={() =>{ navigate("/edit-department")}} />
        </div>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(dept => (
            <tr key={dept.deptid}>
              <td>{dept.deptid}</td>
              <td>{dept.deptname}</td>
              <td>
                <input
                  type="button"
                  value="view"
                  style={{ marginRight: "5px" }}
                  onClick={() => navigate(`/edit-department/${dept.deptid}/view`)}
                />
                <input
                  type="button"
                  value="edit"
                  style={{ marginRight: "5px" }}
                  onClick={() => navigate(`/edit-department/${dept.deptid}`)}
                />
                <input
                  type="button"
                  value="delete"
                  onClick={() => handleDelete(dept.deptid)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentList;