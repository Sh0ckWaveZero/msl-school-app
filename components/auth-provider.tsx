"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  username: string
  email: string
  role: "admin" | "teacher" | "student" | "parent"
  profile: {
    firstName: string
    lastName: string
    avatar?: string
  }
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string, role: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        // TODO: Check for valid session/token
        const savedUser = localStorage.getItem("msl-school-user")
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (username: string, password: string, role: string) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual authentication API call
      const mockUser: User = {
        id: "1",
        username,
        email: `${username}@msl-school.com`,
        role: role as User["role"],
        profile: {
          firstName: "ผู้ใช้",
          lastName: "ทดสอบ",
        },
      }

      setUser(mockUser)
      localStorage.setItem("msl-school-user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("การเข้าสู่ระบบล้มเหลว")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("msl-school-user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
