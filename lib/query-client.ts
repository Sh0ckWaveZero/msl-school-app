import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Mobile optimizations
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (was cacheTime)
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false
        }
        // Retry up to 2 times for other errors
        return failureCount < 2
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      // Network mode for mobile
      networkMode: "offlineFirst",
      // Refetch on window focus (good for mobile app switching)
      refetchOnWindowFocus: true,
      // Don't refetch on reconnect immediately (mobile data saving)
      refetchOnReconnect: "always",
    },
    mutations: {
      // Mobile optimizations for mutations
      retry: 1,
      networkMode: "offlineFirst",
    },
  },
})
