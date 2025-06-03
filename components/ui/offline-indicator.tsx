"use client"

import { useEffect, useState } from "react"
import { WifiOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useUIStore } from "@/lib/stores/ui-store"

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const { addNotification, isMobile } = useUIStore()

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      addNotification({
        title: "เชื่อมต่ออินเทอร์เน็ตแล้ว",
        message: "ระบบพร้อมใช้งานแล้ว",
        type: "success",
      })
    }

    const handleOffline = () => {
      setIsOnline(false)
      addNotification({
        title: "ไม่มีการเชื่อมต่ออินเทอร์เน็ต",
        message: "ระบบจะทำงานในโหมดออฟไลน์",
        type: "warning",
      })
    }

    // Set initial state
    setIsOnline(navigator.onLine)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [addNotification])

  if (isOnline) return null

  return (
    <Badge
      variant="secondary"
      className={`fixed z-50 flex items-center gap-1 bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-200 dark:border-orange-800 ${
        isMobile ? "bottom-4 left-4 text-xs" : "bottom-4 right-4"
      }`}
    >
      <WifiOff className="h-3 w-3" />
      ออฟไลน์
    </Badge>
  )
}
