"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-12 h-6">
        <div className="w-10 h-5 bg-gray-200 rounded-full" />
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-12 h-6 p-0 hover:bg-transparent"
    >
      <div className="relative w-10 h-5 overflow-hidden">
        {/* Toggle Background */}
        <div
          className={`
            absolute inset-0 rounded-full transition-all duration-500 ease-in-out
            ${
              isDark
                ? "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800"
                : "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500"
            }
          `}
        >
          {/* Stars for dark mode */}
          {isDark && (
            <>
              <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
              <div className="absolute top-2 left-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300" />
              <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700" />
            </>
          )}

          {/* Clouds for light mode */}
          {!isDark && (
            <>
              <div className="absolute top-1 left-1 w-1.5 h-1 bg-white rounded-full opacity-80" />
              <div className="absolute top-2.5 left-5 w-1 h-0.5 bg-white rounded-full opacity-60" />
              <div className="absolute top-1.5 right-1 w-1 h-0.5 bg-white rounded-full opacity-70" />
            </>
          )}
        </div>

        {/* Sun/Moon Circle */}
        <div
          className={`
            absolute top-0.5 w-4 h-4 rounded-full transition-all duration-500 ease-in-out transform
            ${
              isDark
                ? "translate-x-5 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg"
                : "translate-x-0.5 bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg"
            }
          `}
        >
          {/* Sun rays for light mode */}
          {!isDark && (
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 w-0.5 h-1 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1" />
              <div className="absolute bottom-0 left-1/2 w-0.5 h-1 bg-yellow-400 rounded-full transform -translate-x-1/2 translate-y-1" />
              <div className="absolute left-0 top-1/2 w-1 h-0.5 bg-yellow-400 rounded-full transform -translate-y-1/2 -translate-x-1" />
              <div className="absolute right-0 top-1/2 w-1 h-0.5 bg-yellow-400 rounded-full transform -translate-y-1/2 translate-x-1" />
            </div>
          )}

          {/* Moon craters for dark mode */}
          {isDark && (
            <>
              <div className="absolute top-1 left-1 w-1 h-1 bg-gray-400 rounded-full opacity-40" />
              <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-30" />
            </>
          )}
        </div>
      </div>
    </Button>
  )
}
