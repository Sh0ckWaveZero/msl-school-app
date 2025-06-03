"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Search, Bell, MessageSquare, Calendar, Settings, User, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Separator } from "@/components/ui/separator"

interface NavbarProps {
  onMenuClick?: () => void
  isMobile?: boolean
}

export function Navbar({ onMenuClick, isMobile = false }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const notifications = [
    {
      id: 1,
      title: "เกรดใหม่",
      message: "คุณได้รับเกรดใหม่สำหรับวิชาคณิตศาสตร์",
      time: "5 นาทีที่แล้ว",
      unread: true,
    },
    {
      id: 2,
      title: "ประกาศใหม่",
      message: "มีประกาศใหม่จากโรงเรียน เรื่องการปิดเทอม",
      time: "1 ชั่วโมงที่แล้ว",
      unread: true,
    },
  ]

  const messages = [
    {
      id: 1,
      from: "ครูสมหญิง",
      message: "ส่งข้อความถึงคุณเกี่ยวกับการบ้าน",
      time: "10 นาทีที่แล้ว",
      unread: true,
    },
    {
      id: 2,
      from: "ผู้ปกครอง",
      message: "นัดหมายพบครูพรุ่งนี้",
      time: "30 นาทีที่แล้ว",
      unread: true,
    },
  ]

  const unreadNotifications = notifications.filter((n) => n.unread).length
  const unreadMessages = messages.filter((m) => m.unread).length

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 sm:px-6 shadow-sm">
      {/* Left side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className={cn(
            "h-10 w-10", // Larger touch target on mobile
            !isMobile && "lg:hidden",
          )}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search - Hidden on small mobile, visible on larger screens */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="search"
            placeholder="ค้นหา..."
            className={cn(
              "pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              isMobile ? "w-[200px]" : "w-[300px]",
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Mobile search button */}
        {isMobile && (
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:hidden">
            <Search className="h-5 w-5" />
          </Button>
        )}

        {/* Messages */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800">
              <MessageSquare className="h-5 w-5" />
              {unreadMessages > 0 && (
                <Badge
                  variant="destructive"
                  size="notification"
                  count={unreadMessages}
                  className="absolute -top-1 -right-1"
                />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <DropdownMenuLabel className="flex items-center justify-between">
              ข้อความ
              <Badge variant="secondary" size="sm">
                {unreadMessages} ใหม่
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {messages.map((message) => (
                <DropdownMenuItem key={message.id} className="flex flex-col items-start p-3">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{message.from}</p>
                      <p className="text-xs text-muted-foreground mt-1">{message.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                    </div>
                    {message.unread && <div className="h-2 w-2 bg-blue-500 rounded-full" />}
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <Badge
                  variant="destructive"
                  size="notification"
                  count={unreadNotifications}
                  className="absolute -top-1 -right-1"
                />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <DropdownMenuLabel className="flex items-center justify-between">
              การแจ้งเตือน
              <Badge variant="secondary" size="sm">
                {unreadNotifications} ใหม่
              </Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    {notification.unread && <div className="h-2 w-2 bg-blue-500 rounded-full" />}
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Calendar - Hidden on small mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800 hidden sm:flex"
        >
          <Calendar className="h-5 w-5" />
        </Button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Settings - Hidden on small mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800 hidden sm:flex"
        >
          <Settings className="h-5 w-5" />
        </Button>

        {!isMobile && <Separator orientation="vertical" className="h-6 mx-2" />}

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">ผ</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">ผู้ดูแลระบบ</p>
                <p className="text-xs leading-none text-muted-foreground">admin@mslschool.ac.th</p>
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
            <DropdownMenuItem className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>ออกจากระบบ</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
