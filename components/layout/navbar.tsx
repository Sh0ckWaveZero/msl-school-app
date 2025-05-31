"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, User, LogOut, Settings, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Navbar() {
  const router = useRouter()
  const { toast } = useToast()

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

  return (
    <header className="h-16 border-b border-gray-200 bg-white/95 backdrop-blur-sm flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="text-lg font-semibold text-gray-900 hidden md:block">ระบบจัดการโรงเรียน MSL School</h2>

        {/* Search Bar */}
        <div className="relative max-w-md ml-auto mr-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="ค้นหา..." className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="font-semibold">การแจ้งเตือน</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-900">นักเรียนใหม่ลงทะเบียน</p>
                <p className="text-xs text-gray-500">สมชาย ใจดี ลงทะเบียนเรียนใหม่</p>
                <p className="text-xs text-blue-600">5 นาทีที่แล้ว</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-900">ครูอัพเดทเกรด</p>
                <p className="text-xs text-gray-500">อาจารย์สมหญิง อัพเดทเกรดวิชาคณิตศาสตร์</p>
                <p className="text-xs text-blue-600">15 นาทีที่แล้ว</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-900">การสำรองข้อมูลเสร็จสิ้น</p>
                <p className="text-xs text-gray-500">การสำรองข้อมูลรายวันเสร็จสิ้นแล้ว</p>
                <p className="text-xs text-blue-600">1 ชั่วโมงที่แล้ว</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-gray-100 px-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-600 text-white text-sm font-semibold">A</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline-block text-sm font-medium text-gray-700">Admin User</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-semibold">บัญชีของฉัน</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              โปรไฟล์
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              การตั้งค่า
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              ออกจากระบบ
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
