import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface UIState {
  // Sidebar state
  sidebarOpen: boolean
  sidebarCollapsed: boolean
  isMobile: boolean

  // Theme and preferences
  theme: "light" | "dark" | "system"

  // Mobile-specific states
  mobileMenuOpen: boolean
  searchOpen: boolean

  // Loading states
  globalLoading: boolean

  // Notification states
  notifications: Array<{
    id: string
    title: string
    message: string
    type: "success" | "error" | "warning" | "info"
    timestamp: Date
    read: boolean
  }>

  // Actions
  setSidebarOpen: (open: boolean) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setIsMobile: (isMobile: boolean) => void
  setTheme: (theme: "light" | "dark" | "system") => void
  setMobileMenuOpen: (open: boolean) => void
  setSearchOpen: (open: boolean) => void
  setGlobalLoading: (loading: boolean) => void
  addNotification: (notification: Omit<UIState["notifications"][0], "id" | "timestamp" | "read">) => void
  markNotificationRead: (id: string) => void
  clearNotifications: () => void
  toggleSidebar: () => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      // Initial state
      sidebarOpen: true,
      sidebarCollapsed: false,
      isMobile: false,
      theme: "light",
      mobileMenuOpen: false,
      searchOpen: false,
      globalLoading: false,
      notifications: [],

      // Actions
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),

      setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),

      setIsMobile: (isMobile) => {
        const { sidebarOpen } = get()
        set({
          isMobile,
          // Auto-close sidebar on mobile
          sidebarOpen: isMobile ? false : sidebarOpen,
        })
      },

      setTheme: (theme) => set({ theme }),

      setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),

      setSearchOpen: (searchOpen) => set({ searchOpen }),

      setGlobalLoading: (globalLoading) => set({ globalLoading }),

      addNotification: (notification) => {
        const newNotification = {
          ...notification,
          id: Date.now().toString(),
          timestamp: new Date(),
          read: false,
        }
        set((state) => ({
          notifications: [newNotification, ...state.notifications].slice(0, 50), // Keep only last 50
        }))
      },

      markNotificationRead: (id) => {
        set((state) => ({
          notifications: state.notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
        }))
      },

      clearNotifications: () => set({ notifications: [] }),

      toggleSidebar: () => {
        const { sidebarOpen, isMobile } = get()
        if (isMobile) {
          set({ mobileMenuOpen: !get().mobileMenuOpen })
        } else {
          set({ sidebarOpen: !sidebarOpen })
        }
      },
    }),
    {
      name: "msl-ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
      }),
    },
  ),
)
