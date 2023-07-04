import Axios, { type AxiosRequestConfig } from 'axios';

import { STORAGE_TOKEN } from './constants';
import { getApiBaseUrl } from './helpers';

/**
 * Axios instance with auth and base URL
 * For use with Orval generated API
 * @see https://github.com/anymaniax/orval/blob/master/samples/react-app/src/api/mutator/custom-instance.ts
 */
export const AXIOS_INSTANCE = Axios.create({ baseURL: getApiBaseUrl() });

AXIOS_INSTANCE.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(STORAGE_TOKEN);
  if (token) {
    // console.log('ORVAL AXIOS REQUEST TOKEN', token);
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return AXIOS_INSTANCE(config).then(({ data }) => data);
};

export default customInstance;
