import axios from 'axios';
import { getAuthToken } from './auth.js';

const API_BASE_URL = 'https://b1rjpflk3e.execute-api.us-west-2.amazonaws.com/pdf';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await getAuthToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const postPDF = async (payload) => {
  const response = await apiClient.post('/', payload);
  return response.data;
};

export const getPDF = async (payload) => {
  const response = await apiClient.get('/', { data: payload });
  return response.data;
};
