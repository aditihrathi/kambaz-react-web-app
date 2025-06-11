import axios from 'axios';

// Configure axios to always send cookies
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://kambaz-node-server-app-7xbg.onrender.com';

export const signin = async (credentials: any) => {
  const response = await axios.post('/api/users/signin', credentials, {
    withCredentials: true  // Explicitly set for this request
  });
  return response.data;
};

export const profile = async () => {
  const response = await axios.get('/api/users/profile', {
    withCredentials: true
  });
  return response.data;
};

export const findMyCourses = async () => {
  const response = await axios.get('/api/users/current/courses', {
    withCredentials: true
  });
  return response.data;
};

export const updateProfile = async (profileData: any) => {
  const response = await axios.put('/api/users/profile', profileData, {
    withCredentials: true
  });
  return response.data;
};

export const signout = async () => {
  const response = await axios.post('/api/users/signout', {}, {
    withCredentials: true
  });
  return response.data;
};

export const signup = async (userData: any) => {
  const response = await axios.post('/api/users/signup', userData, {
    withCredentials: true
  });
  return response.data;
};