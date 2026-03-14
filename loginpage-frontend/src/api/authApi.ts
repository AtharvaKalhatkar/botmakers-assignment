import axiosInstance from "./axiosInstance";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => {
  const response = await axiosInstance.post("/api/auth/register", data);
  return response.data;
};



export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/api/auth/login", data);
  return response.data;
};



export const getUserContent = async () => {
  const response = await axiosInstance.get("/api/user");
  return response.data;
};



export const getAdminContent = async () => {
  const response = await axiosInstance.get("/api/admin");
  return response.data;
};