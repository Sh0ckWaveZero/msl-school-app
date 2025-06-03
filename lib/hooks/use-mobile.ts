"use client"

import { useEffect, useState } from "react"
import { useUIStore } from "@/lib/stores/ui-store"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const setIsMobileStore = useUIStore((state) => state.setIsMobile)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsMobileStore(mobile)
    }

    // Check on mount
    checkMobile()

    // Listen for resize
    window.addEventListener("resize", checkMobile)

    // Listen for orientation change (mobile specific)
    window.addEventListener("orientationchange", () => {
      setTimeout(checkMobile, 100) // Delay to ensure proper measurement
    })

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("orientationchange", checkMobile)
    }
  }, [setIsMobileStore])

  return isMobile
}

// Hook for detecting touch devices
export function useTouch() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkTouch()
  }, [])

  return isTouch
}

// Hook for detecting network status
export function useOnline() {
  const [isOnline, setIsOnline] = useState(true)
  const setIsOnlineStore = useUIStore((state) => state.setIsOnline)

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
      setIsOnlineStore(online)
    }

    updateOnlineStatus()

    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [setIsOnlineStore])

  return isOnline
}
