"use client"

import { createContext, useContext, useEffect, type ReactNode } from "react"
import { useAuthStore } from "@/lib/stores/auth-store"

interface AuthContextType {
  user: any
  isAuthenticated: boolean
  isLoading: boolean
  login: (username: string, password: string, role: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated, isLoading, login, logout, setLoading } = useAuthStore()

  useEffect(() => {
    // Initialize auth state
    setLoading(false)
  }, [setLoading])

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
