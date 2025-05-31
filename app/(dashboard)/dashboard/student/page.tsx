"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Award, Target, CheckCircle } from "lucide-react"

export default function StudentDashboard() {
  const stats = [
    {
      title: "วิชาที่ลงทะเบียน",
      value: "8",
      change: "+2",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "เกรดเฉลี่ย",
      value: "3.45",
      change: "+0.15",
      icon: Award,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "การเข้าเรียน",
      value: "94%",
      change: "+2%",
      icon: CheckCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "งานที่ต้องส่ง",
      value: "3",
      change: "-2",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const todaySchedule = [
    {
      time: "08:00-10:00",
      subject: "คณิตศาสตร์พื้นฐาน",
      instructor: "อาจารย์สมหญิง",
      room: "ห้อง A101",
      status: "completed",
    },
    {
      time: "10:30-12:30",
      subject: "ภาษาอังกฤษเพื่อการสื่อสาร",
      instructor: "อาจารย์จอห์น",
      room: "ห้อง B205",
      status: "current",
    },
    {
      time: "13:30-15:30",
      subject: "การเขียนโปรแกรมคอมพิวเตอร์",
      instructor: "อาจารย์สมชาย",
      room: "ห้องคอมพิวเตอร์ 1",
      status: "upcoming",
    },
  ]

  const assignments = [
    {
      subject: "คณิตศาสตร์พื้นฐาน",
      title: "แบบฝึกหัดบทที่ 5",
      dueDate: "2024-01-20",
      status: "pending",
      priority: "high",
    },
    {
      subject: "ภาษาอังกฤษ",
      title: "เขียนเรียงความ My Future Career",
      dueDate: "2024-01-22",
      status: "pending",
      priority: "medium",
    },
    {
      subject: "การเขียนโปรแกรม",
      title: "โปรเจค Calculator App",
      dueDate: "2024-01-25",
      status: "in-progress",
      priority: "high",
    },
  ]

  const recentGrades = [
    {
      subject: "คณิตศาสตร์พื้นฐาน",
      assignment: "สอบกลางภาค",
      grade: "A",
      score: "85/100",
      date: "2024-01-10",
    },
    {
      subject: "ภาษาอังกฤษ",
      assignment: "การนำเสนอ",
      grade: "B+",
      score: "78/100",
      date: "2024-01-08",
    },
    {
      subject: "การเขียนโปรแกรม",
      assignment: "โปรเจค Web App",
      grade: "A-",
      score: "82/100",
      date: "2024-01-05",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "current":
        return "bg-blue-100 text-blue-800"
      case "upcoming":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800"
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800"
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">แดชบอร์ดนักเรียน</h1>
          <p className="text-gray-600">ยินดีต้อนรับ สมชาย ใจดี - ภาพรวมการเรียนและผลการเรียนของคุณ</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-gray-700">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="flex items-center">
                  <Badge
                    variant="secondary"
                    className={`${
                      stat.change.startsWith("+") ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    } hover:bg-green-100`}
                  >
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-gray-500 ml-2">จากเทอมที่แล้ว</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-gray-900">ตารางเรียนวันนี้</CardTitle>
              </div>
              <CardDescription className="text-gray-600">รายการคาบเรียนวันนี้</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySchedule.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">{schedule.time}</p>
                        <p className="text-xs text-gray-500">{schedule.room}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{schedule.subject}</h3>
                        <p className="text-sm text-gray-600">{schedule.instructor}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(schedule.status)} border-0`}>
                      {schedule.status === "completed"
                        ? "เสร็จสิ้น"
                        : schedule.status === "current"
                          ? "กำลังเรียน"
                          : "กำลังจะเรียน"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-600" />
                <CardTitle className="text-gray-900">งานที่ต้องส่ง</CardTitle>
              </div>
              <CardDescription className="text-gray-600">งานและโปรเจคที่ต้องทำ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                      <p className="text-sm text-gray-600">{assignment.subject}</p>
                      <p className="text-xs text-gray-500">ส่งภายใน: {assignment.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getPriorityColor(assignment.priority)} border-0 text-xs`}>
                        {assignment.priority === "high" ? "ด่วน" : assignment.priority === "medium" ? "ปกติ" : "ไม่ด่วน"}
                      </Badge>
                      <Badge
                        className={`${
                          assignment.status === "pending" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                        } border-0 text-xs`}
                      >
                        {assignment.status === "pending" ? "ยังไม่ทำ" : "กำลังทำ"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Grades */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              <CardTitle className="text-gray-900">เกรดล่าสุด</CardTitle>
            </div>
            <CardDescription className="text-gray-600">ผลการเรียนที่ได้รับล่าสุด</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGrades.map((grade, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{grade.assignment}</h3>
                    <p className="text-sm text-gray-600">{grade.subject}</p>
                    <p className="text-xs text-gray-500">{grade.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{grade.score}</p>
                    </div>
                    <Badge className={`${getGradeColor(grade.grade)} border-0`}>{grade.grade}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
