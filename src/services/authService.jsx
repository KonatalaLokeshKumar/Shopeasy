import axios from "axios";

const API_URL = "https://reqres.in/api";

export const loginUser = async (data) => {
  return await axios.post(`${API_URL}/login`, data);
};

export const registerUser = async (data) => {
  return await axios.post(`${API_URL}/register`, data);
};