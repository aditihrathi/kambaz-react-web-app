import axios from 'axios';

// Create axios instance with proper cookie configuration
const api = axios.create({
  baseURL: 'https://kambaz-node-server-app-7xbg.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor to ensure cookies are always sent
api.interceptors.request.use((config) => {
  config.withCredentials = true;
  return config;
});

export const signin = async (credentials: any) => {
  const response = await api.post('/api/users/signin', credentials);
  return response.data;
};

export const profile = async () => {
  const response = await api.get('/api/users/profile');
  return response.data;
};

export const findMyCourses = async () => {
  const response = await api.get('/api/users/current/courses');
  return response.data;
};

export const updateProfile = async (profileData: any) => {
  const response = await api.put('/api/users/profile', profileData);
  return response.data;
};

export const signout = async () => {
  const response = await api.post('/api/users/signout');
  return response.data;
};

export const signup = async (userData: any) => {
  const response = await api.post('/api/users/signup', userData);
  return response.data;
};