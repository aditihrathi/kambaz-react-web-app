import axios from "axios";

const API_BASE = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000/api";
axios.defaults.withCredentials = true;

export const enroll = async ({ userId, courseId }: { userId: string; courseId: string }) => {
  const response = await axios.post(`${API_BASE}/enrollments`, { userId, courseId });
  return response.data;
};

export const unenroll = async ({ userId, courseId }: { userId: string; courseId: string }) => {
  const response = await axios.delete(`${API_BASE}/enrollments`, {
    data: { userId, courseId },
  });
  return response.data;
};

export const getEnrollments = async (userId: string) => {
  const response = await axios.get(`${API_BASE}/enrollments/${userId}`);
  return response.data;
};
