import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById, updateEmployee } from '../../services/employeeService';
import { useNavigate } from 'react-router-dom';

function EditEmployee() {
  const { empid, mode } = useParams();
  const [form, setForm] = useState({
    empname: '',
    dob: '',
    dateOfJoining: '',
    department: {
      deptid: '',
      deptname: '',
    }
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const isEdit = !!empid && mode !== 'view';
  const isView = mode === 'view';

  useEffect(() => {
    if (isEdit || isView) {
      getEmployeeById(empid)
        .then(res => setForm(res.data))
        .catch(() => setMessage('Failed to load employee.'));
    }
  }, [empid, isEdit, isView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'deptid' || name === 'deptname') {
      setForm({
        ...form,
        department: {
          ...form.department,
          [name]: value
        }
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      department: {
        ...form.department,
        deptid: Number(form.department.deptid)
      }
    };
    if (isEdit) {
      updateEmployee(empid, payload)
        .then(() => {
          alert('Employee updated successfully!');
          navigate('/employee-list');
        })
        .catch(() => alert('Failed to update employee.'));
    } else {
      addEmployee(payload)
        .then(() => alert('Employee added successfully!'))
        .catch(() => alert('Failed to add employee.'));
    }
  };

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1> {isView ? 'View Employee' : isEdit ? 'Edit Employee' : 'Add Employee'}</h1>
        <input type='button' value='Employee List' onClick={() => navigate('/employee-list')} />
      </div>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="empname" value={form.empname} onChange={handleChange} readOnly={isView} required />
        </div>
        <div>
          <label>Date of Birth: </label>
          <input name="dob" type="date" value={form.dob} onChange={handleChange} readOnly={isView} required />
        </div>
        <div>
          <label>Date of Joining: </label>
          <input name="dateOfJoining" type="datetime-local" value={form.dateOfJoining} onChange={handleChange} readOnly={isView} required />
        </div>
        <div>
          <label>Department ID: </label>
          <input name="deptid" value={form.department.deptid} onChange={handleChange} readOnly={isView} required />
        </div>
        <div>
          <label>Department Name: </label>
          <input name="deptname" value={form.department.deptname} onChange={handleChange} readOnly={isView} required />
        </div>
        { !isView && (
          <button type="submit">{isEdit ? 'Update Employee' : 'Add Employee'}</button>
        )
        }
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditEmployee;