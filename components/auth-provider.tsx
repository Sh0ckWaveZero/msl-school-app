"use client"

import type React from "react"
import { createContext, useContext, useEffect } from "react"
import { useAuthStore } from "@/lib/stores/auth-store"

interface AuthContextType {
  // Re-export store methods for backward compatibility
  user: ReturnType<typeof useAuthStore>["user"]
  login: ReturnType<typeof useAuthStore>["login"]
  logout: ReturnType<typeof useAuthStore>["logout"]
  isLoading: ReturnType<typeof useAuthStore>["isLoading"]
  isAuthenticated: ReturnType<typeof useAuthStore>["isAuthenticated"]
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authStore = useAuthStore()

  useEffect(() => {
    // Initialize auth state on mount
    const initAuth = async () => {
      // Check if user is already logged in from persisted state
      if (authStore.user && !authStore.isAuthenticated) {
        authStore.setUser(authStore.user)
      }
    }

    initAuth()
  }, [authStore])

  const contextValue: AuthContextType = {
    user: authStore.user,
    login: authStore.login,
    logout: authStore.logout,
    isLoading: authStore.isLoading,
    isAuthenticated: authStore.isAuthenticated,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Direct hook to Zustand store (recommended for new code)
export { useAuthStore }
