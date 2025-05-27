import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addDepartment, getDepartmentById, updateDepartment } from '../../services/departmentService';

function EditDepartment() {
  const { deptid, mode } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    deptname: ''
  });
  const [message, setMessage] = useState('');
  const isEdit = !!deptid && mode !== 'view';
  const isView = mode === 'view';

  useEffect(() => {
    if (deptid) {
      getDepartmentById(deptid)
        .then(res => setForm({ deptname: res.data.deptname }))
        .catch(() => setMessage('Failed to load department.'));
    }
  }, [deptid]);

  const handleChange = (e) => {
    if (isView) return;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateDepartment(deptid, form)
        .then(() => {
          alert('Department updated successfully!');
          navigate('/department-list');
        })
        .catch(() => alert('Failed to update department.'));
    } else {
      addDepartment(form)
        .then(() => {
          alert('Department added successfully!');
           navigate('/department-list');
    })
        .catch(() => alert('Failed to add department.'));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{isView ? 'View Department' : isEdit ? 'Edit Department' : 'Add Department'}</h1>
        <input type='button' value='Department List' onClick={() => navigate('/department-list')} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department Name: </label>
          <input
            name="deptname"
            value={form.deptname}
            onChange={handleChange}
            readOnly={isView}
            required
          />
        </div>
        {!isView && (
          <button type="submit">{isEdit ? 'Update Department' : 'Add Department'}</button>
        )}
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditDepartment;