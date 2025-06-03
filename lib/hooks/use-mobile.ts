"use client"

import { useEffect } from "react"
import { useUIStore } from "@/lib/stores/ui-store"

export function useMobile() {
  const { isMobile, setIsMobile } = useUIStore()

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
    }

    // Check on mount
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [setIsMobile])

  return isMobile
}
