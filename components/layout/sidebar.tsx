"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, ChevronRight, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { getMenuByRole, findActiveMenuItem, type MenuSection } from "@/lib/menu-config"
import { useToast } from "@/hooks/use-toast"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [userRole, setUserRole] = useState<string>("admin") // Default to admin for demo
  const [menuSections, setMenuSections] = useState<MenuSection[]>([])

  // Get user role from pathname or localStorage
  useEffect(() => {
    const pathSegments = pathname.split("/")
    const roleFromPath = pathSegments[2] // /dashboard/[role]/...

    if (roleFromPath && ["admin", "teacher", "student", "parent"].includes(roleFromPath)) {
      setUserRole(roleFromPath)
    } else {
      // Fallback to localStorage or default
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

  return (
    <div className={cn("flex h-full w-64 flex-col bg-background border-r border-border", className)}>
      {/* Header */}
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">MSL</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">MSL School</h1>
            <p className="text-xs text-muted-foreground">{getRoleDisplayName(userRole)}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-4">
          {menuSections.map((section) => {
            const isExpanded = expandedSections.includes(section.title)

            return (
              <div key={section.title} className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-between h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => toggleSection(section.title)}
                >
                  <span>{section.title}</span>
                  {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </Button>

                {isExpanded && (
                  <div className="space-y-1 ml-2">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href
                      const Icon = item.icon

                      return (
                        <Link key={item.id} href={item.href}>
                          <Button
                            variant={isActive ? "secondary" : "ghost"}
                            className={cn(
                              "w-full justify-start h-9 px-3 text-sm font-normal",
                              isActive && "bg-secondary text-secondary-foreground font-medium",
                            )}
                          >
                            <Icon className="mr-3 h-4 w-4" />
                            <span className="flex-1 text-left">{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                                {item.badge}
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

      <Separator />

      {/* User Profile */}
      <div className="p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start h-auto p-2">
              <div className="flex items-center gap-3 w-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {getUserName(userRole).charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-foreground">{getUserName(userRole)}</p>
                  <p className="text-xs text-muted-foreground">{getRoleDisplayName(userRole)}</p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" side="top">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>โปรไฟล์</span>
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
  )
}
