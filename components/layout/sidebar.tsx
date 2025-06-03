"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, ChevronRight, LogOut, User, Settings, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { getMenuByRole, findActiveMenuItem, type MenuSection } from "@/lib/menu-config"
import { useToast } from "@/hooks/use-toast"
import { useUIStore } from "@/lib/stores/ui-store"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [userRole, setUserRole] = useState<string>("admin")
  const [menuSections, setMenuSections] = useState<MenuSection[]>([])

  const { sidebarOpen, isMobile, setSidebarOpen, toggleSidebar } = useUIStore()

  // Get user role from pathname or localStorage
  useEffect(() => {
    const pathSegments = pathname.split("/")
    const roleFromPath = pathSegments[2]

    if (roleFromPath && ["admin", "teacher", "student", "parent"].includes(roleFromPath)) {
      setUserRole(roleFromPath)
    } else {
      const savedRole = localStorage.getItem("user-role") || "admin"
      setUserRole(savedRole)
    }
  }, [pathname])

  // Update menu when role changes
  useEffect(() => {
    const sections = getMenuByRole(userRole)
    setMenuSections(sections)

    // Auto-expand section containing active item
    const activeItem = findActiveMenuItem(sections, pathname)
    if (activeItem) {
      const sectionWithActiveItem = sections.find((section) => section.items.some((item) => item.id === activeItem.id))
      if (sectionWithActiveItem) {
        setExpandedSections((prev) => [...prev, sectionWithActiveItem.title])
      }
    }
  }, [userRole, pathname])

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionTitle) ? prev.filter((title) => title !== sectionTitle) : [...prev, sectionTitle],
    )
  }

  const handleLogout = () => {
    localStorage.removeItem("user-role")
    localStorage.removeItem("msl-school-user")
    toast({
      title: "ออกจากระบบสำเร็จ",
      description: "คุณได้ออกจากระบบเรียบร้อยแล้ว",
    })
    router.push("/login")
  }

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case "admin":
        return "ผู้ดูแลระบบ"
      case "teacher":
        return "ครู"
      case "student":
        return "นักเรียน"
      case "parent":
        return "ผู้ปกครอง"
      default:
        return "ผู้ใช้"
    }
  }

  const getUserName = (role: string) => {
    switch (role) {
      case "admin":
        return "ผู้ดูแลระบบ"
      case "teacher":
        return "อาจารย์สมหญิง"
      case "student":
        return "สมชาย ใจดี"
      case "parent":
        return "คุณสมศรี"
      default:
        return "ผู้ใช้"
    }
  }

  const formatBadgeCount = (badge: string | number) => {
    if (typeof badge === "string") return badge
    return badge > 99 ? "99+" : badge.toString()
  }

  const handleNavigation = () => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  // Mobile: Full overlay sidebar
  if (isMobile) {
    return (
      <TooltipProvider>
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div
          id="mobile-sidebar"
          className={cn(
            "fixed left-0 top-0 z-50 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
            "w-80", // Wider on mobile for better touch targets
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            className,
          )}
        >
          {/* Mobile Header */}
          <div className="flex h-16 items-center border-b border-gray-200 dark:border-gray-700 px-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">MSL</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">MSL School</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{getRoleDisplayName(userRole)}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="ปิดเมนู"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="py-4 px-4">
                {menuSections.map((section) => {
                  const isExpanded = expandedSections.includes(section.title)

                  return (
                    <div key={section.title} className="mb-6">
                      <Button
                        variant="ghost"
                        className="w-full justify-between h-10 px-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => toggleSection(section.title)}
                        aria-expanded={isExpanded}
                        aria-controls={`section-${section.title}`}
                      >
                        <span>{section.title}</span>
                        {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                      </Button>

                      {isExpanded && (
                        <div id={`section-${section.title}`} className="space-y-2 mt-2 ml-2">
                          {section.items.map((item) => {
                            const isActive = pathname === item.href
                            const Icon = item.icon

                            return (
                              <Link key={item.id} href={item.href} onClick={handleNavigation}>
                                <Button
                                  variant={isActive ? "default" : "ghost"}
                                  className={cn(
                                    "w-full justify-start h-12 px-4 text-sm font-normal", // Larger touch targets
                                    isActive
                                      ? "bg-blue-500 text-white"
                                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
                                  )}
                                >
                                  <Icon className="mr-3 h-5 w-5" />
                                  <span className="truncate">{item.title}</span>
                                  {item.badge && (
                                    <Badge variant={isActive ? "secondary" : "destructive"} className="ml-auto text-xs">
                                      {formatBadgeCount(item.badge)}
                                    </Badge>
                                  )}
                                </Button>
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Mobile User Profile */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 mt-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start h-14 p-3">
                  <div className="flex items-center gap-3 w-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-500 text-white text-sm">
                        {getUserName(userRole).charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{getUserName(userRole)}</p>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{getRoleDisplayName(userRole)}</p>
                      </div>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" side="top">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{getUserName(userRole)}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userRole}@mslschool.ac.th</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>โปรไฟล์</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>ตั้งค่า</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>ออกจากระบบ</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </TooltipProvider>
    )
  }

  // Desktop: Sidebar with expanded default
  return (
    <TooltipProvider>
      <div
        className={cn(
          "fixed left-0 top-0 z-40 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-lg flex flex-col",
          sidebarOpen ? "w-64" : "w-16",
          className,
        )}
      >
        {/* Desktop Header */}
        <div className="flex h-16 items-center border-b border-gray-200 dark:border-gray-700 px-4">
          {sidebarOpen ? (
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">MSL</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">MSL School</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{getRoleDisplayName(userRole)}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="ย่อเมนู"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center space-y-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">MSL</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="h-6 w-6 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="ขยายเมนู"
              >
                <Menu className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className={cn("py-4", sidebarOpen ? "px-3" : "px-2")}>
              {menuSections.map((section) => {
                const isExpanded = expandedSections.includes(section.title)

                return (
                  <div key={section.title} className="mb-4">
                    {sidebarOpen && (
                      <Button
                        variant="ghost"
                        className="w-full justify-between h-8 px-3 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => toggleSection(section.title)}
                        aria-expanded={isExpanded}
                        aria-controls={`desktop-section-${section.title}`}
                      >
                        <span>{section.title}</span>
                        {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                      </Button>
                    )}

                    <div
                      id={`desktop-section-${section.title}`}
                      className={cn("space-y-1 mt-1", sidebarOpen && isExpanded ? "ml-2" : "")}
                    >
                      {(sidebarOpen ? (isExpanded ? section.items : []) : section.items).map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        if (!sidebarOpen) {
                          return (
                            <Tooltip key={item.id} delayDuration={300}>
                              <TooltipTrigger asChild>
                                <Link href={item.href} className="block">
                                  <Button
                                    variant={isActive ? "default" : "ghost"}
                                    size="icon"
                                    className={cn(
                                      "w-12 h-12 relative mx-auto mb-1",
                                      isActive
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
                                    )}
                                  >
                                    <Icon className="h-5 w-5" />
                                    {item.badge && (
                                      <Badge
                                        variant="destructive"
                                        className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
                                      >
                                        {formatBadgeCount(item.badge)}
                                      </Badge>
                                    )}
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                <p>{item.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          )
                        }

                        return (
                          <Link key={item.id} href={item.href}>
                            <Button
                              variant={isActive ? "default" : "ghost"}
                              className={cn(
                                "w-full justify-start h-9 px-3 text-sm font-normal",
                                isActive
                                  ? "bg-blue-500 text-white"
                                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
                              )}
                            >
                              <Icon className="mr-3 h-4 w-4" />
                              <span className="truncate">{item.title}</span>
                              {item.badge && (
                                <Badge variant={isActive ? "secondary" : "destructive"} className="ml-auto text-xs">
                                  {formatBadgeCount(item.badge)}
                                </Badge>
                              )}
                            </Button>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Desktop User Profile */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-3 mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {sidebarOpen ? (
                <Button variant="ghost" className="w-full justify-start h-auto p-2">
                  <div className="flex items-center gap-3 w-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-500 text-white text-sm">
                        {getUserName(userRole).charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{getUserName(userRole)}</p>
                      <div className="flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{getRoleDisplayName(userRole)}</p>
                      </div>
                    </div>
                  </div>
                </Button>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="w-12 h-12 mx-auto relative">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-blue-500 text-white text-sm">
                          {getUserName(userRole).charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-2 right-2 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{getUserName(userRole)}</p>
                    <p className="text-xs text-gray-300">{getRoleDisplayName(userRole)}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" side="top">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{getUserName(userRole)}</p>
                  <p className="text-xs leading-none text-muted-foreground">{userRole}@mslschool.ac.th</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>โปรไฟล์</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>ตั้งค่า</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>ออกจากระบบ</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </TooltipProvider>
  )
}
