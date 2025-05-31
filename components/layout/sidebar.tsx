"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  UserCheck,
  MessageSquare,
  FileText,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // Mock user role - in real app, get from auth context
  const userRole = "admin" // admin, teacher, student, parent

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem("msl-school-user")

    toast({
      title: "ออกจากระบบสำเร็จ! 👋",
      description: "ขอบคุณที่ใช้บริการ MSL School Management System",
      variant: "default",
    })

    // Redirect to login page
    setTimeout(() => {
      router.push("/login")
    }, 1000)
  }

  const getMenuItems = () => {
    const baseItems = [
      {
        title: "แดชบอร์ด",
        href: `/dashboard/${userRole}`,
        icon: LayoutDashboard,
      },
    ]

    switch (userRole) {
      case "admin":
        return [
          ...baseItems,
          {
            title: "จัดการผู้ใช้",
            href: "/dashboard/admin/users",
            icon: Users,
          },
          {
            title: "จัดการหลักสูตร",
            href: "/dashboard/admin/courses",
            icon: BookOpen,
          },
          {
            title: "ตารางเรียน",
            href: "/dashboard/admin/schedules",
            icon: Calendar,
          },
          {
            title: "รายงาน",
            href: "/dashboard/admin/reports",
            icon: BarChart3,
          },
          {
            title: "การตั้งค่า",
            href: "/dashboard/admin/settings",
            icon: Settings,
          },
        ]

      case "teacher":
        return [
          ...baseItems,
          {
            title: "ชั้นเรียนของฉัน",
            href: "/dashboard/teacher/classes",
            icon: BookOpen,
          },
          {
            title: "นักเรียน",
            href: "/dashboard/teacher/students",
            icon: Users,
          },
          {
            title: "การเข้าเรียน",
            href: "/dashboard/teacher/attendance",
            icon: UserCheck,
          },
          {
            title: "เกรด",
            href: "/dashboard/teacher/grades",
            icon: FileText,
          },
          {
            title: "ข้อความ",
            href: "/dashboard/teacher/messages",
            icon: MessageSquare,
          },
        ]

      case "student":
        return [
          ...baseItems,
          {
            title: "วิชาเรียน",
            href: "/dashboard/student/courses",
            icon: BookOpen,
          },
          {
            title: "ตารางเรียน",
            href: "/dashboard/student/schedule",
            icon: Calendar,
          },
          {
            title: "เกรด",
            href: "/dashboard/student/grades",
            icon: FileText,
          },
          {
            title: "การเข้าเรียน",
            href: "/dashboard/student/attendance",
            icon: UserCheck,
          },
          {
            title: "ข้อความ",
            href: "/dashboard/student/messages",
            icon: MessageSquare,
          },
        ]

      case "parent":
        return [
          ...baseItems,
          {
            title: "ผลการเรียนลูก",
            href: "/dashboard/parent/student-progress",
            icon: BarChart3,
          },
          {
            title: "การเข้าเรียน",
            href: "/dashboard/parent/attendance",
            icon: UserCheck,
          },
          {
            title: "ข้อความจากโรงเรียน",
            href: "/dashboard/parent/messages",
            icon: MessageSquare,
          },
          {
            title: "ตารางเรียน",
            href: "/dashboard/parent/schedule",
            icon: Calendar,
          },
        ]

      default:
        return baseItems
    }
  }

  const menuItems = getMenuItems()

  return (
    <div
      className={cn(
        "flex h-full flex-col bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out relative",
        collapsed ? "w-[70px]" : "w-64",
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-md z-50 hover:bg-gray-50"
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4 text-gray-600" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        )}
      </button>

      {/* Logo */}
      <div
        className={cn(
          "flex h-16 items-center border-b border-gray-200 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300",
          collapsed ? "justify-center px-2" : "px-6",
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-white" />
          {!collapsed && <span className="text-xl font-bold text-white">MSL School</span>}
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-6">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onNavigate}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-11 transition-all duration-200",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-700 hover:bg-blue-100 shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  collapsed ? "px-2" : "px-4",
                )}
              >
                <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")} />
                {!collapsed && <span>{item.title}</span>}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>

      {/* User Info */}
      <div
        className={cn("border-t border-gray-200 p-4 bg-gray-50 transition-all duration-300", collapsed ? "p-2" : "p-4")}
      >
        <div className={cn("flex items-center gap-3", collapsed ? "flex-col" : "flex-row")}>
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-blue-600 text-white font-semibold">A</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">Admin User</p>
              <p className="text-xs text-gray-600">ผู้ดูแลระบบ</p>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <Button
          variant="ghost"
          className={cn("mt-2 text-red-600 hover:text-red-700 hover:bg-red-50 w-full", collapsed ? "px-2" : "")}
          onClick={handleLogout}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>ออกจากระบบ</span>}
        </Button>
      </div>
    </div>
  )
}
