"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Award, Target } from "lucide-react"

export default function StudentCoursesPage() {
  const courses = [
    {
      id: 1,
      name: "คณิตศาสตร์พื้นฐาน",
      code: "MATH101",
      instructor: "อาจารย์สมหญิง",
      credits: 3,
      schedule: "จันทร์ 09:00-12:00",
      room: "ห้อง A101",
      grade: "A",
      attendance: "94%",
      assignments: 2,
      status: "enrolled",
    },
    {
      id: 2,
      name: "ภาษาอังกฤษเพื่อการสื่อสาร",
      code: "ENG201",
      instructor: "อาจารย์จอห์น",
      credits: 2,
      schedule: "อังคาร 13:00-15:00",
      room: "ห้อง B205",
      grade: "B+",
      attendance: "96%",
      assignments: 1,
      status: "enrolled",
    },
    {
      id: 3,
      name: "การเขียนโปรแกรมคอมพิวเตอร์",
      code: "CS101",
      instructor: "อาจารย์สมชาย",
      credits: 4,
      schedule: "พุธ 09:00-16:00",
      room: "ห้องคอมพิวเตอร์ 1",
      grade: "A-",
      attendance: "92%",
      assignments: 3,
      status: "enrolled",
    },
  ]

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800"
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800"
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">วิชาเรียนของฉัน</h1>
              <p className="text-gray-600">รายวิชาที่ลงทะเบียนเรียนในเทอมนี้</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">ลงทะเบียนเรียนเพิ่ม</Button>
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
                  <p className="text-sm font-medium text-gray-600">วิชาที่ลงทะเบียน</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">เกรดเฉลี่ย</p>
                  <p className="text-2xl font-bold text-gray-900">3.45</p>
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
                  <p className="text-sm font-medium text-gray-600">หน่วยกิตรวม</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">งานที่ต้องส่ง</p>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-gray-900">{course.name}</CardTitle>
                    <CardDescription className="text-gray-600">{course.code}</CardDescription>
                  </div>
                  <Badge className={`${getGradeColor(course.grade)} border-0`}>{course.grade}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">อาจารย์:</span>
                    <span className="text-sm font-medium text-gray-900">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">หน่วยกิต:</span>
                    <span className="text-sm font-medium text-gray-900">{course.credits}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">เวลาเรียน:</span>
                    <span className="text-sm font-medium text-gray-900">{course.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ห้องเรียน:</span>
                    <span className="text-sm font-medium text-gray-900">{course.room}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">การเข้าเรียน:</span>
                    <span className="text-sm font-medium text-gray-900">{course.attendance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">งานที่ต้องส่ง:</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {course.assignments} งาน
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    เข้าเรียน
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    ดูรายละเอียด
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
