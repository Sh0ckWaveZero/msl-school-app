"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { useAuthStore } from "@/lib/stores/auth-store"
import { useUIStore } from "@/lib/stores/ui-store"
import { useMobile } from "@/lib/hooks/use-mobile"
import { QueryProvider } from "@/components/query-provider"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuthStore()
  const { sidebarOpen, mobileMenuOpen, setSidebarOpen, setMobileMenuOpen } = useUIStore()
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router, mounted])

  const handleSidebarToggle = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen)
    } else {
      setSidebarOpen(!sidebarOpen)
    }
  }

  const handleMobileOverlayClick = () => {
    if (isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <QueryProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Mobile Overlay */}
        {isMobile && mobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity"
            onClick={handleMobileOverlayClick}
          />
        )}

        {/* Sidebar */}
        <Sidebar isOpen={isMobile ? mobileMenuOpen : sidebarOpen} onToggle={handleSidebarToggle} isMobile={isMobile} />

        {/* Main Content */}
        <div
          className={`transition-all duration-300 ${
            isMobile
              ? "ml-0" // No margin on mobile
              : sidebarOpen
                ? "ml-64" // Full sidebar width on desktop
                : "ml-16" // Collapsed sidebar width on desktop
          }`}
        >
          {/* Navbar */}
          <Navbar onMenuClick={handleSidebarToggle} />

          {/* Page Content */}
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        </div>
      </div>
    </QueryProvider>
  )
}
