import axios from 'axios';
import { BASE_API_URL } from '../config/apiConfig';

const API_URL = `${BASE_API_URL}/departments`;

export const fetchAllDepartments = () => {
  return axios.get(`${API_URL}/all-departments`);
};

export const getDepartmentById = (deptid) => {
  return axios.get(`${API_URL}/${deptid}`);
};

export const addDepartment = (department) => {
  return axios.post(`${API_URL}/add`, department);
};

export const updateDepartment = (deptid, department) => {
  return axios.put(`${API_URL}/${deptid}`, department);
};

export const deleteDepartment = (deptid) => {
  return axios.delete(`${API_URL}/${deptid}`);
};