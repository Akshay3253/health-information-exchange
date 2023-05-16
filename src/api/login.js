import axios from "axios";

const baseURL = "http://localhost:5000";

export const loginApi = async (payload) => {
  return await axios.get(`${baseURL}/api/login/`, payload);
};
