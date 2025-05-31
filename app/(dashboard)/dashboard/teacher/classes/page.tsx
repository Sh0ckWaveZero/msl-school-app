"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Calendar, Plus, Eye } from "lucide-react"

export default function TeacherClassesPage() {
  const classes = [
    {
      id: 1,
      name: "คณิตศาสตร์พื้นฐาน",
      code: "MATH101",
      students: 45,
      schedule: "จันทร์ 09:00-12:00",
      room: "ห้อง A101",
      semester: "1/2567",
      status: "active",
    },
    {
      id: 2,
      name: "สถิติและความน่าจะเป็น",
      code: "STAT201",
      students: 38,
      schedule: "อังคาร 10:30-12:30",
      room: "ห้อง A102",
      semester: "1/2567",
      status: "active",
    },
    {
      id: 3,
      name: "แคลคูลัส",
      code: "CALC301",
      students: 42,
      schedule: "พุธ 13:30-15:30",
      room: "ห้อง A103",
      semester: "1/2567",
      status: "active",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">ชั้นเรียนของฉัน</h1>
              <p className="text-gray-600">จัดการชั้นเรียนและวิชาที่สอน</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มชั้นเรียนใหม่
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
                  <p className="text-sm font-medium text-gray-600">ชั้นเรียนทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">6</p>
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
                  <p className="text-sm font-medium text-gray-600">นักเรียนทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">156</p>
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
                  <p className="text-sm font-medium text-gray-600">ชั่วโมงสอนสัปดาห์นี้</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">คาบเรียนวันนี้</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <Card
              key={classItem.id}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-gray-900">{classItem.name}</CardTitle>
                    <CardDescription className="text-gray-600">{classItem.code}</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-0">
                    {classItem.status === "active" ? "เปิดสอน" : "ปิดสอน"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">นักเรียน:</span>
                    <span className="text-sm font-medium text-gray-900">{classItem.students} คน</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">เวลาเรียน:</span>
                    <span className="text-sm font-medium text-gray-900">{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ห้องเรียน:</span>
                    <span className="text-sm font-medium text-gray-900">{classItem.room}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">เทอม:</span>
                    <span className="text-sm font-medium text-gray-900">{classItem.semester}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Eye className="h-4 w-4 mr-2" />
                    ดูรายละเอียด
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    จัดการ
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
