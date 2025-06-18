import axios from "axios";
import type { AxiosInstance } from "axios";

const CreateInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: 1000,
});

export const GetApiData = async (url: any) => {
  const res = await CreateInstance.get(url);
  return res.data;
};
