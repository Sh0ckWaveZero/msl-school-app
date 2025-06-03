import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export interface Notification {
  id: string
  type: "success" | "error" | "warning" | "info"
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface UIState {
  // Sidebar state
  sidebarOpen: boolean
  sidebarCollapsed: boolean

  // Mobile state
  isMobile: boolean

  // Notifications
  notifications: Notification[]

  // Loading states
  globalLoading: boolean

  // Network state
  isOnline: boolean

  // Theme
  theme: "light" | "dark" | "system"

  // Actions
  setSidebarOpen: (open: boolean) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  toggleSidebar: () => void
  setIsMobile: (isMobile: boolean) => void
  addNotification: (notification: Omit<Notification, "id">) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
  setGlobalLoading: (loading: boolean) => void
  setIsOnline: (online: boolean) => void
  setTheme: (theme: "light" | "dark" | "system") => void
  initializeSidebar: () => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      sidebarOpen: true, // Default to open for desktop
      sidebarCollapsed: false,
      isMobile: false,
      notifications: [],
      globalLoading: false,
      isOnline: true,
      theme: "system",

      setSidebarOpen: (open: boolean) => {
        set({ sidebarOpen: open })
      },

      setSidebarCollapsed: (collapsed: boolean) => {
        set({ sidebarCollapsed: collapsed })
      },

      toggleSidebar: () => {
        set((state) => ({ sidebarOpen: !state.sidebarOpen }))
      },

      setIsMobile: (isMobile: boolean) => {
        const { sidebarOpen } = get()
        set({
          isMobile,
          // Auto close sidebar on mobile, keep open on desktop
          sidebarOpen: isMobile ? false : true,
        })
      },

      initializeSidebar: () => {
        const { isMobile } = get()
        set({
          sidebarOpen: !isMobile, // Open by default on desktop, closed on mobile
        })
      },

      addNotification: (notification: Omit<Notification, "id">) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newNotification = { ...notification, id }

        set((state) => ({
          notifications: [newNotification, ...state.notifications],
        }))

        // Auto remove after duration
        const duration = notification.duration || 5000
        setTimeout(() => {
          set((state) => ({
            notifications: state.notifications.filter((n) => n.id !== id),
          }))
        }, duration)
      },

      removeNotification: (id: string) => {
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        }))
      },

      clearNotifications: () => {
        set({ notifications: [] })
      },

      setGlobalLoading: (loading: boolean) => {
        set({ globalLoading: loading })
      },

      setIsOnline: (online: boolean) => {
        set({ isOnline: online })
      },

      setTheme: (theme: "light" | "dark" | "system") => {
        set({ theme })
      },
    }),
    {
      name: "msl-ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        theme: state.theme,
        // Don't persist sidebarOpen as it should be determined by screen size
      }),
    },
  ),
)
