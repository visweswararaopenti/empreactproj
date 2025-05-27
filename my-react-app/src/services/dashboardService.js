import axios from 'axios';
import { BASE_API_URL } from '../config/apiConfig';

export const fetchDashboardSummary = () => {
  return axios.get(`${BASE_API_URL}/dashboard/summary`);
};