"use client"

import type React from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState, useEffect } from "react"
import { queryClient } from "@/lib/query-client"

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Mobile-specific optimizations
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Refetch critical data when app becomes visible
        queryClient.refetchQueries({
          type: "active",
          stale: true,
        })
      }
    }

    const handleOnline = () => {
      // Refetch all queries when coming back online
      queryClient.refetchQueries()
    }

    const handleOffline = () => {
      // Pause queries when offline
      queryClient
        .getQueryCache()
        .getAll()
        .forEach((query) => {
          query.setState((old) => ({
            ...old,
            fetchStatus: "idle",
          }))
        })
    }

    // Add event listeners for mobile optimization
    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom-right"
        // Hide devtools on mobile
        buttonPosition="bottom-right"
      />
    </QueryClientProvider>
  )
}
