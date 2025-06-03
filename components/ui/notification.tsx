"use client"

import { useEffect } from "react"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { useUIStore, type Notification } from "@/lib/stores/ui-store"
import { Button } from "@/components/ui/button"

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const colorMap = {
  success: "bg-green-50 border-green-200 text-green-800",
  error: "bg-red-50 border-red-200 text-red-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  info: "bg-blue-50 border-blue-200 text-blue-800",
}

interface NotificationItemProps {
  notification: Notification
}

function NotificationItem({ notification }: NotificationItemProps) {
  const removeNotification = useUIStore((state) => state.removeNotification)
  const Icon = iconMap[notification.type]

  useEffect(() => {
    if (notification.duration && notification.duration > 0) {
      const timer = setTimeout(() => {
        removeNotification(notification.id)
      }, notification.duration)

      return () => clearTimeout(timer)
    }
  }, [notification.id, notification.duration, removeNotification])

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 border rounded-lg shadow-sm transition-all duration-300",
        "animate-in slide-in-from-right-full",
        colorMap[notification.type],
      )}
    >
      <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm">{notification.title}</h4>
        {notification.message && <p className="text-sm opacity-90 mt-1">{notification.message}</p>}

        {notification.action && (
          <Button variant="ghost" size="sm" className="mt-2 h-8 px-2 text-xs" onClick={notification.action.onClick}>
            {notification.action.label}
          </Button>
        )}
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 hover:bg-black/10"
        onClick={() => removeNotification(notification.id)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">ปิด</span>
      </Button>
    </div>
  )
}

export function NotificationContainer() {
  const notifications = useUIStore((state) => state.notifications)
  const isMobile = useUIStore((state) => state.isMobile)

  if (notifications.length === 0) return null

  return (
    <div className={cn("fixed z-50 flex flex-col gap-2", isMobile ? "top-4 left-4 right-4" : "top-4 right-4 w-96")}>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  )
}
