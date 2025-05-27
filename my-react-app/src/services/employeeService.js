import axios from 'axios';
import { BASE_API_URL } from '../config/apiConfig';

const API_URL = `${BASE_API_URL}/employees/all-employees`;

export const fetchAllEmployees = () => {
  return axios.get(API_URL);
};

export const addEmployee = (employee) => {
  return axios.post(`${BASE_API_URL}/employees/add`, employee);
};

export const getEmployeeById = (empid) => {
  return axios.get(`${BASE_API_URL}/employees/${empid}`);
};

export const updateEmployee = (empid, employee) => {
  return axios.put(`${BASE_API_URL}/employees/${empid}`, employee);
};

export const deleteEmployee = (empid) => {
  return axios.delete(`${BASE_API_URL}/employees/${empid}`);
};