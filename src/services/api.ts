import axios, { AxiosInstance } from "axios";

const BACKEND_URL = 'http://158.160.97.122:8080/api';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};