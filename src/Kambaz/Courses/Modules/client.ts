import axios from "axios";

export const findModules = async (courseId: string) => {
  const res = await axios.get(`/api/courses/${courseId}/modules`, {
    withCredentials: true,
  });
  return res.data;
};

export const createModule = async (courseId: string, module: any) => {
  const res = await axios.post(`/api/courses/${courseId}/modules`, module, {
    withCredentials: true,
  });
  return res.data;
};

export const deleteModule = async (_courseId: string, moduleId: string) => {
  const res = await axios.delete(`/api/modules/${moduleId}`, {
    withCredentials: true,
  });
  return res.data;
};