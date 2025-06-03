import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface User {
  id: string
  username: string
  email: string
  role: "admin" | "teacher" | "student" | "parent"
  profile: {
    firstName: string
    lastName: string
    avatar?: string
    studentId?: string
    teacherId?: string
    parentId?: string
    class?: string
    grade?: string
    subjects?: string[]
    children?: string[]
  }
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean

  // Actions
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  login: (username: string, password: string, role: string) => Promise<void>
  logout: () => void
  updateProfile: (profile: Partial<User["profile"]>) => void
}

// Mock users for different roles
const mockUsers: Record<string, User> = {
  admin: {
    id: "admin001",
    username: "admin",
    email: "admin@msl-school.com",
    role: "admin",
    profile: {
      firstName: "ผู้ดูแล",
      lastName: "ระบบ",
      avatar: "ผ",
    },
  },
  teacher: {
    id: "teacher001",
    username: "teacher",
    email: "teacher@msl-school.com",
    role: "teacher",
    profile: {
      firstName: "สมหญิง",
      lastName: "ใจดี",
      avatar: "ส",
      teacherId: "T001",
      subjects: ["คณิตศาสตร์พื้นฐาน", "สถิติและความน่าจะเป็น", "แคลคูลัส"],
    },
  },
  student: {
    id: "student001",
    username: "student",
    email: "student@msl-school.com",
    role: "student",
    profile: {
      firstName: "สมชาย",
      lastName: "ใจดี",
      avatar: "ส",
      studentId: "STD001",
      class: "ปวช.2/1",
      grade: "ปวช.2",
    },
  },
  parent: {
    id: "parent001",
    username: "parent",
    email: "parent@msl-school.com",
    role: "parent",
    profile: {
      firstName: "สมศรี",
      lastName: "ใจดี",
      avatar: "ส",
      parentId: "P001",
      children: ["สมชาย ใจดี", "สมหญิง ใจดี"],
    },
  },
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setLoading: (isLoading) => set({ isLoading }),

      login: async (username: string, password: string, role: string) => {
        set({ isLoading: true })

        try {
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 1000))

          const mockUser = mockUsers[role.toLowerCase()]

          if (!mockUser) {
            throw new Error("ไม่พบผู้ใช้สำหรับบทบาทนี้")
          }

          // Simulate authentication check
          if (username !== role || password !== role) {
            throw new Error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
          }

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        })
      },

      updateProfile: (profileUpdate) => {
        const { user } = get()
        if (user) {
          set({
            user: {
              ...user,
              profile: {
                ...user.profile,
                ...profileUpdate,
              },
            },
          })
        }
      },
    }),
    {
      name: "msl-auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)
