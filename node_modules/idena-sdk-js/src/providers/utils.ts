import axios from 'axios';

export function createAxiosInstance(url: string, apiKey: string) {
  const res = axios.create({ baseURL: url });
  res.interceptors.request.use(function (config) {
    config.data.key = apiKey;
    return config;
  });
  return res;
}
