"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Calendar, FileText, Clock, TrendingUp, CheckCircle, AlertCircle } from "lucide-react"

export default function TeacherDashboard() {
  const stats = [
    {
      title: "ชั้นเรียนที่สอน",
      value: "6",
      change: "+1",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "นักเรียนทั้งหมด",
      value: "156",
      change: "+12",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "ชั่วโมงสอนสัปดาห์นี้",
      value: "24",
      change: "0",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "งานที่ต้องตรวจ",
      value: "18",
      change: "-5",
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const todaySchedule = [
    {
      time: "08:00-10:00",
      subject: "คณิตศาสตร์พื้นฐาน",
      room: "ห้อง A101",
      students: 45,
      status: "completed",
    },
    {
      time: "10:30-12:30",
      subject: "สถิติและความน่าจะเป็น",
      room: "ห้อง A102",
      students: 38,
      status: "current",
    },
    {
      time: "13:30-15:30",
      subject: "แคลคูลัส",
      room: "ห้อง A103",
      students: 42,
      status: "upcoming",
    },
  ]

  const recentActivities = [
    {
      action: "อัพเดทเกรดวิชาคณิตศาสตร์",
      time: "10 นาทีที่แล้ว",
      type: "grade",
      color: "bg-green-100 text-green-800",
    },
    {
      action: "เช็คชื่อนักเรียนเรียนเสร็จ",
      time: "2 ชั่วโมงที่แล้ว",
      type: "attendance",
      color: "bg-blue-100 text-blue-800",
    },
    {
      action: "ส่งข้อความถึงผู้ปกครอง",
      time: "1 วันที่แล้ว",
      type: "message",
      color: "bg-purple-100 text-purple-800",
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

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "เสร็จสิ้น"
      case "current":
        return "กำลังสอน"
      case "upcoming":
        return "กำลังจะสอน"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">แดชบอร์ดครู</h1>
          <p className="text-gray-600">ยินดีต้อนรับ อาจารย์สมหญิง - ภาพรวมการสอนและการจัดการชั้นเรียน</p>
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
                  <span className="text-xs text-gray-500 ml-2">จากสัปดาห์ที่แล้ว</span>
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
                <CardTitle className="text-gray-900">ตารางสอนวันนี้</CardTitle>
              </div>
              <CardDescription className="text-gray-600">รายการคาบเรียนที่ต้องสอนวันนี้</CardDescription>
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
                        <p className="text-sm text-gray-600">{schedule.students} นักเรียน</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(schedule.status)} border-0`}>
                      {getStatusText(schedule.status)}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <CardTitle className="text-gray-900">กิจกรรมล่าสุด</CardTitle>
              </div>
              <CardDescription className="text-gray-600">กิจกรรมการสอนและการจัดการล่าสุด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <Badge className={`text-xs ${activity.color} border-0`}>{activity.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900">การดำเนินการด่วน</CardTitle>
            <CardDescription className="text-gray-600">ฟังก์ชันที่ใช้บ่อยสำหรับครู</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex-col bg-blue-50 text-blue-700 hover:bg-blue-100 border-0">
                <CheckCircle className="h-6 w-6 mb-2" />
                <span className="text-sm">เช็คชื่อ</span>
              </Button>
              <Button className="h-20 flex-col bg-green-50 text-green-700 hover:bg-green-100 border-0">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-sm">ให้เกรด</span>
              </Button>
              <Button className="h-20 flex-col bg-purple-50 text-purple-700 hover:bg-purple-100 border-0">
                <Users className="h-6 w-6 mb-2" />
                <span className="text-sm">ดูนักเรียน</span>
              </Button>
              <Button className="h-20 flex-col bg-orange-50 text-orange-700 hover:bg-orange-100 border-0">
                <AlertCircle className="h-6 w-6 mb-2" />
                <span className="text-sm">ส่งข้อความ</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
