import axios from 'axios';
import { BASE_API_URL } from '../config/apiConfig';     


const API_URL = `${BASE_API_URL}/departments/all-departments`;

export const fetchAllDepartments = () => {
  return axios.get(API_URL);
};