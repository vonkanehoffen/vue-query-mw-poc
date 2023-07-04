import { API_URL_DEV, STORAGE_TOKEN } from './constants'

export function getApiBaseUrl() {
  // TODO: Switching
  return API_URL_DEV
}

/**
 * Get authed state. Problem with this is it doesn't update components even when view changes.
 * So we need pinia after all.
 */
export const getIsAuthenticated = () => {
  const token = localStorage.getItem(STORAGE_TOKEN)
  console.log('isAuthenticated', token)
  return !!token
}
