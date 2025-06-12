import axios from "axios";

export const enroll = async (userId: string, courseId: string) => {
  const response = await axios.post(`/api/enrollments/${userId}/${courseId}`);
  return response.data;
};

export const unenroll = async (userId: string, courseId: string) => {
  const response = await axios.delete(`/api/enrollments/${userId}/${courseId}`);
  return response.data;
};

export const findUsersInCourse = async (courseId: string) => {
  const response = await axios.get(`/api/enrollments/${courseId}`);
  return response.data;
};