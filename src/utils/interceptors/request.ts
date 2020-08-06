import axios, { AxiosRequestConfig } from 'axios';

export const requestInterceptor = axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    return config;
  },
  (error) => Promise.reject(error),
);
