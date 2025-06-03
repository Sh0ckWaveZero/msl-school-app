"use client"

import { useEffect } from "react"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUIStore } from "@/lib/stores/ui-store"
import { cn } from "@/lib/utils"

export function NotificationContainer() {
  const { notifications, markNotificationRead } = useUIStore()
  const { isMobile } = useUIStore()

  const visibleNotifications = notifications.filter((n) => !n.read).slice(0, 3)

  if (visibleNotifications.length === 0) return null

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-2",
        isMobile
          ? "top-4 left-4 right-4" // Full width on mobile
          : "top-4 right-4 w-96", // Fixed width on desktop
      )}
    >
      {visibleNotifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onClose={() => markNotificationRead(notification.id)}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
}

interface NotificationItemProps {
  notification: {
    id: string
    title: string
    message: string
    type: "success" | "error" | "warning" | "info"
    timestamp: Date
  }
  onClose: () => void
  isMobile: boolean
}

function NotificationItem({ notification, onClose, isMobile }: NotificationItemProps) {
  const { type, title, message } = notification

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  }

  const colors = {
    success:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200",
    error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200",
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200",
  }

  const iconColors = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-yellow-500",
    info: "text-blue-500",
  }

  const Icon = icons[type]

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000) // Auto-close after 5 seconds

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={cn(
        "rounded-lg border p-4 shadow-lg backdrop-blur-sm transition-all duration-300 animate-in slide-in-from-right",
        colors[type],
        isMobile ? "text-sm" : "text-base",
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", iconColors[type])} />
        <div className="flex-1 min-w-0">
          <h4 className={cn("font-semibold", isMobile ? "text-sm" : "text-base")}>{title}</h4>
          <p className={cn("mt-1 opacity-90", isMobile ? "text-xs" : "text-sm")}>{message}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className={cn("h-6 w-6 p-0 hover:bg-black/10 dark:hover:bg-white/10", isMobile ? "h-5 w-5" : "h-6 w-6")}
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}
