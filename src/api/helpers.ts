import { API_URL_DEV } from './constants';

// We'd be switching environments here if this was for real ;-)
export function getApiBaseUrl() {
  return API_URL_DEV;
}
