import axios from 'axios';

// Configure axios
const API_BASE = 'https://kambaz-node-server-app-7xbg.onrender.com';
axios.defaults.baseURL = API_BASE;
axios.defaults.withCredentials = true;

// Course functions
export const findMyCourses = async () => {
  const response = await axios.get('/api/users/current/courses');
  return response.data;
};

export const getAllCourses = async () => {
  const response = await axios.get('/api/courses');
  return response.data;
};

export const fetchAllCourses = async () => {
  return getAllCourses(); // Alias
};

export const createCourse = async (courseData: any) => {
  const response = await axios.post('/api/courses', courseData);
  return response.data;
};

export const updateCourse = async (courseId: string, courseData: any) => {
  const response = await axios.put(`/api/courses/${courseId}`, courseData);
  return response.data;
};

export const deleteCourse = async (courseId: string) => {
  const response = await axios.delete(`/api/courses/${courseId}`);
  return response.data;
};

// Enrollment functions
export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`/api/users/${userId}/enrollments`, { courseId });
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(`/api/users/${userId}/enrollments/${courseId}`);
  return response.data;
};

// Module functions
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`/api/courses/${courseId}/modules`);
  return response.data;
};

export const getModules = async (courseId: string) => {
  return findModulesForCourse(courseId); // Alias
};

export const createModule = async (courseId: string, moduleData: any) => {
  const response = await axios.post(`/api/courses/${courseId}/modules`, moduleData);
  return response.data;
};

export const updateModule = async (moduleId: string, moduleData: any) => {
  const response = await axios.put(`/api/modules/${moduleId}`, moduleData);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`/api/modules/${moduleId}`);
  return response.data;
};

// Assignment functions
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`/api/courses/${courseId}/assignments`);
  return response.data;
};

export const getAssignments = async (courseId: string) => {
  return findAssignmentsForCourse(courseId); // Alias
};

export const createAssignment = async (courseId: string, assignmentData: any) => {
  const response = await axios.post(`/api/courses/${courseId}/assignments`, assignmentData);
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignmentData: any) => {
  const response = await axios.put(`/api/assignments/${assignmentId}`, assignmentData);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`/api/assignments/${assignmentId}`);
  return response.data;
};