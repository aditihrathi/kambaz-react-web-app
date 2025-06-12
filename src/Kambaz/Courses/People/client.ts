import axios from "axios";

export const findAllUsers = async () => {
  const response = await axios.get("/api/users");
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post("/api/users", user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`/api/users/${user._id}`, user);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`/api/users/${userId}`);
  return response.status === 200;
};