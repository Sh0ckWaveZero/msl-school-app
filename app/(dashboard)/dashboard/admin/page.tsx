"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, BookOpen, Calendar, TrendingUp, Clock, AlertCircle } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "นักเรียนทั้งหมด",
      value: "1,247",
      change: "+12",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "ครู/บุคลากร",
      value: "89",
      change: "+3",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "หลักสูตรทั้งหมด",
      value: "42",
      change: "+2",
      icon: BookOpen,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "ห้องเรียน",
      value: "24",
      change: "+1",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const recentActivities = [
    {
      action: "เพิ่มนักเรียนใหม่",
      details: "นายสมชาย ใจดี - ปวช.1/1",
      time: "10 นาทีที่แล้ว",
      type: "student",
      color: "bg-blue-100 text-blue-800",
    },
    {
      action: "อัพเดทหลักสูตร",
      details: "คณิตศาสตร์พื้นฐาน - เพิ่มเนื้อหาใหม่",
      time: "1 ชั่วโมงที่แล้ว",
      type: "course",
      color: "bg-green-100 text-green-800",
    },
    {
      action: "เช็คชื่อเข้าแถว",
      details: "ปวช.1/1 - 45 คนเข้าแถว",
      time: "2 ชั่วโมงที่แล้ว",
      type: "attendance",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const quickActions = [
    { title: "เพิ่มนักเรียน", icon: GraduationCap, href: "/dashboard/admin/students/add" },
    { title: "จัดการครู", icon: Users, href: "/dashboard/admin/teachers" },
    { title: "เช็คชื่อ", icon: Clock, href: "/dashboard/admin/attendance" },
    { title: "รายงาน", icon: TrendingUp, href: "/dashboard/admin/reports" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">แดชบอร์ดผู้ดูแลระบบ</h1>
          <p className="text-gray-600 dark:text-gray-400">ยินดีต้อนรับสู่ระบบจัดการโรงเรียน MSL - ภาพรวมข้อมูลทั้งหมด</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 dark:bg-gray-800"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor} dark:bg-gray-700`}>
                  <stat.icon className={`h-5 w-5 ${stat.color} dark:text-gray-300`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1 dark:text-white">{stat.value}</div>
                <div className="flex items-center">
                  <Badge
                    variant="secondary"
                    className={`${
                      stat.change.startsWith("+")
                        ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    } hover:bg-green-100`}
                  >
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-gray-500 ml-2 dark:text-gray-400">จากเดือนที่แล้ว</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card className="bg-white border-0 shadow-sm dark:bg-gray-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-gray-900 dark:text-white">กิจกรรมล่าสุด</CardTitle>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                กิจกรรมและการเปลี่ยนแปลงล่าสุดในระบบ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{activity.details}</p>
                      <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">{activity.time}</p>
                    </div>
                    <Badge className={`text-xs ${activity.color} border-0`}>{activity.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white border-0 shadow-sm dark:bg-gray-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <CardTitle className="text-gray-900 dark:text-white">การดำเนินการด่วน</CardTitle>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400">ฟังก์ชันที่ใช้บ่อยสำหรับผู้ดูแลระบบ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700"
                  >
                    <div className="flex flex-col items-center text-center">
                      <action.icon className="h-8 w-8 text-blue-600 mb-2 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{action.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="bg-white border-0 shadow-sm dark:bg-gray-800">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900 dark:text-white">สถานะระบบ</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">ภาพรวมสถานะการทำงานของระบบ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">ระบบฐานข้อมูล</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">ทำงานปกติ</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">เซิร์ฟเวอร์</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">ทำงานปกติ</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">การสำรองข้อมูล</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">กำลังดำเนินการ</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
