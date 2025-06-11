import axios from "axios";
const API_BASE = "/api/courses";

export const findModules = async (courseId: string) => {
  const response = await axios.get(`${API_BASE}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post(`${API_BASE}/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axios.delete(`${API_BASE}/${courseId}/modules/${moduleId}`);
  return response.data;
};