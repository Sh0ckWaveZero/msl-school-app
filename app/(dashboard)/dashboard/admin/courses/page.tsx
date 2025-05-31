"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookOpen, Plus, Search, MoreHorizontal, Edit, Trash2, Users, Clock } from "lucide-react"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const courses = [
    {
      id: 1,
      name: "คณิตศาสตร์พื้นฐาน",
      code: "MATH101",
      department: "วิทยาศาสตร์",
      instructor: "อาจารย์สมหญิง",
      students: 45,
      credits: 3,
      status: "active",
      schedule: "จันทร์ 09:00-12:00",
    },
    {
      id: 2,
      name: "ภาษาอังกฤษเพื่อการสื่อสาร",
      code: "ENG201",
      department: "ภาษาต่างประเทศ",
      instructor: "อาจารย์จอห์น",
      students: 38,
      credits: 2,
      status: "active",
      schedule: "อังคาร 13:00-15:00",
    },
    {
      id: 3,
      name: "การเขียนโปรแกรมคอมพิวเตอร์",
      code: "CS101",
      department: "เทคโนโลยีสารสนเทศ",
      instructor: "อาจารย์สมชาย",
      students: 52,
      credits: 4,
      status: "active",
      schedule: "พุธ 09:00-16:00",
    },
    {
      id: 4,
      name: "การบัญชีเบื้องต้น",
      code: "ACC101",
      department: "บริหารธุรกิจ",
      instructor: "อาจารย์สุดา",
      students: 41,
      credits: 3,
      status: "inactive",
      schedule: "พฤหัสบดี 10:00-13:00",
    },
  ]

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">จัดการหลักสูตร</h1>
              <p className="text-gray-600">จัดการหลักสูตรและวิชาเรียนในระบบ</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มหลักสูตรใหม่
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">หลักสูตรทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">42</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">นักเรียนลงทะเบียน</p>
                  <p className="text-2xl font-bold text-gray-900">856</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">ชั่วโมงเรียนรวม</p>
                  <p className="text-2xl font-bold text-gray-900">1,248</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">หลักสูตรใหม่เดือนนี้</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses List */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>รายการหลักสูตร</CardTitle>
                <CardDescription>จัดการและดูข้อมูลหลักสูตรทั้งหมด</CardDescription>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="ค้นหาหลักสูตร..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{course.code}</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
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
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">แผนก:</span>
                        <Badge variant="secondary">{course.department}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">อาจารย์:</span>
                        <span className="text-sm font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">นักเรียน:</span>
                        <span className="text-sm font-medium">{course.students} คน</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">หน่วยกิต:</span>
                        <span className="text-sm font-medium">{course.credits}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">เวลาเรียน:</span>
                        <span className="text-xs text-gray-500">{course.schedule}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">สถานะ:</span>
                        <Badge
                          className={`${
                            course.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          } border-0`}
                        >
                          {course.status === "active" ? "เปิดสอน" : "ปิดสอน"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
