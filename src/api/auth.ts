import { useGetV2Community } from '@/api/v2/generated/community/community'
import { computed } from 'vue'

export function useAuth() {
  const { isLoading, failureReason } = useGetV2Community({
    query: {
      retry: false
    }
  })
  const isAuthenticated = computed(() => {
    const failStatus = failureReason?.value?.response?.status
    console.log('isAuthenticated failStatus', failStatus)
    return failStatus !== 401
  })

  return {
    isLoading,
    isAuthenticated
  }
}
