"use client"

import { useState } from "react"
import { Search, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavbarProps {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      {/* Mobile menu button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="search"
            placeholder="ค้นหา..."
            className="w-[300px] pl-10 bg-background border-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <div className="p-4">
              <h4 className="font-medium text-foreground mb-2">การแจ้งเตือน</h4>
              <div className="space-y-2">
                <div className="p-2 rounded-lg bg-muted">
                  <p className="text-sm font-medium">เกรดใหม่</p>
                  <p className="text-xs text-muted-foreground">คุณได้รับเกรดใหม่สำหรับวิชาคณิตศาสตร์</p>
                </div>
                <div className="p-2 rounded-lg bg-muted">
                  <p className="text-sm font-medium">ประกาศใหม่</p>
                  <p className="text-xs text-muted-foreground">มีประกาศใหม่จากโรงเรียน</p>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  )
}
