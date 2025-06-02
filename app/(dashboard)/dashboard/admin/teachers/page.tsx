"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Plus, Search, MoreHorizontal, Edit, Trash2, UserCheck, Star } from "lucide-react"

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const teachers = [
    {
      id: 1,
      name: "นายเดชวิชย์ ชนมโกศล",
      code: "@nk001",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นด",
      rating: 0,
    },
    {
      id: 2,
      name: "นางสาวพร ศรีสะเก",
      code: "@nk002",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นพ",
      rating: 0,
    },
    {
      id: 3,
      name: "นายธนดล แสงแก้ว",
      code: "@nk003",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นธ",
      rating: 0,
    },
    {
      id: 4,
      name: "นายศักดิ์ชัย สีคำเงิน",
      code: "@nk004",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นศ",
      rating: 0,
    },
    {
      id: 5,
      name: "นางพิมพา สุมาลี",
      code: "@nk005",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นพ",
      rating: 0,
    },
    {
      id: 6,
      name: "นางสีกฤต สุมช่วย",
      code: "@nk006",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นส",
      rating: 0,
    },
    {
      id: 7,
      name: "นางรรษดาภา สายสุขดี",
      code: "@nk007",
      classRoom: "ครู",
      hours: "1 วัน",
      status: "เปิดใช้งาน",
      avatar: "นร",
      rating: 1,
    },
    {
      id: 8,
      name: "นางพิมพ์ ค่าสวนดิก",
      code: "@nk009",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นพ",
      rating: 0,
    },
    {
      id: 9,
      name: "นางสาวพร ศรีสมพร",
      code: "@nk010",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นพ",
      rating: 0,
    },
    {
      id: 10,
      name: "นางศิริ แก้วสีสุกใส",
      code: "@nk011",
      classRoom: "ครู",
      hours: "0 วัน",
      status: "เปิดใช้งาน",
      avatar: "นศ",
      rating: 2,
    },
  ]

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">ข้อมูลครู / บุคลากร ทั้งหมด</h1>
              <p className="text-muted-foreground">จัดการข้อมูลครูและบุคลากรในระบบ</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
                <Download className="h-4 w-4 mr-2" />
                ดาวน์โหลดข้อมูล
              </Button>
              <Button className="bg-green-500 hover:bg-green-600">
                <Plus className="h-4 w-4 mr-2" />
                เพิ่มครู/บุคลากร
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="bg-card border shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground">รายชื่อครู/บุคลากร</CardTitle>
                <CardDescription>จัดการและดูข้อมูลครูและบุคลากรทั้งหมด</CardDescription>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="ค้นหาครู/บุคลากร..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64 bg-background"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 p-4 bg-muted rounded-lg text-sm font-medium text-muted-foreground">
                <div>ชื่อ-สกุล</div>
                <div>ครูประจำชั้น</div>
                <div>นาฬิกา</div>
                <div>สองสัปดาห์ที่ผ่านมา</div>
                <div>สถานะ</div>
                <div>การดำเนินการ</div>
              </div>

              {/* Table Rows */}
              {filteredTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="grid grid-cols-6 gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-600 text-white font-semibold text-xs">
                        {teacher.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-foreground">{teacher.name}</h3>
                      <p className="text-sm text-muted-foreground">{teacher.code}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
                    >
                      {teacher.classRoom}
                    </Badge>
                  </div>

                  <div className="flex items-center text-foreground">{teacher.hours}</div>

                  <div className="flex items-center">
                    <Badge className="bg-green-100 text-green-800 border-0 dark:bg-green-900/20 dark:text-green-300">
                      {teacher.status}
                    </Badge>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < teacher.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem className="text-popover-foreground">
                          <Edit className="h-4 w-4 mr-2" />
                          แก้ไข
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-popover-foreground">
                          <UserCheck className="h-4 w-4 mr-2" />
                          ดูรายละเอียด
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          ลบ
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-muted-foreground">จำนวนแถวต่อหน้า: 10 | 1-10 จาก 22</div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  ก่อนหน้า
                </Button>
                <Button variant="outline" size="sm">
                  ถัดไป
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
