import React, { useEffect, useState } from 'react';
import { fetchAllDepartments } from '../../services/departmentService';

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllDepartments()
      .then((res) => {
        setDepartments(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Department List</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(dept => (
            <tr key={dept.deptid}>
              <td>{dept.deptid}</td>
              <td>{dept.deptname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentList;