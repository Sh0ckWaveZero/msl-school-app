"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"

export default function ClassroomsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const classrooms = [
    {
      id: "CR0001",
      name: "ปวช.1/1-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0002",
      name: "ปวช.1/2-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0003",
      name: "ปวช.1/3-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0004",
      name: "ปวช.1/4-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0005",
      name: "ปวช.2/1-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0006",
      name: "ปวช.2/2-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0007",
      name: "ปวช.2/3-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0008",
      name: "ปวช.2/4-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0009",
      name: "ปวช.2/6-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
    {
      id: "CR0010",
      name: "ปวช.3/1-ช่างกลโรงงาน",
      level: "ปวช.",
      department: "ช่างกลโรงงาน",
    },
  ]

  const filteredClassrooms = classrooms.filter(
    (classroom) =>
      classroom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classroom.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">รายชื่อห้องเรียน</h1>
              <p className="text-muted-foreground">จัดการข้อมูลห้องเรียนในระบบ</p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มรายชื่อห้องเรียน
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="bg-card border shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground">รายชื่อห้องเรียนทั้งหมด</CardTitle>
                <CardDescription>จัดการและดูข้อมูลห้องเรียนทั้งหมด</CardDescription>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="ค้นหาห้องเรียน..."
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
              <div className="grid grid-cols-5 gap-4 p-4 bg-muted rounded-lg text-sm font-medium text-muted-foreground">
                <div>รหัสห้องเรียน</div>
                <div>ชื่อห้องเรียน</div>
                <div>ระดับชั้น</div>
                <div>แผนก</div>
                <div>การดำเนินการ</div>
              </div>

              {/* Table Rows */}
              {filteredClassrooms.map((classroom) => (
                <div
                  key={classroom.id}
                  className="grid grid-cols-5 gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center text-foreground font-medium">{classroom.id}</div>
                  <div className="flex items-center text-foreground">{classroom.name}</div>
                  <div className="flex items-center text-foreground">{classroom.level}</div>
                  <div className="flex items-center text-foreground">{classroom.department}</div>
                  <div className="flex items-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem className="text-popover-foreground">
                          <Eye className="h-4 w-4 mr-2" />
                          ดูรายละเอียด
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-popover-foreground">
                          <Edit className="h-4 w-4 mr-2" />
                          แก้ไข
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
              <div className="text-sm text-muted-foreground">จำนวนแถวต่อหน้า: 10 | 1-10 จาก 193</div>
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
