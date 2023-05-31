import axios from "axios";
import { baseURL } from "../common/constant";

export const loginApi = async (payload) => {
  return await axios.post(`${baseURL}/api/login`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
