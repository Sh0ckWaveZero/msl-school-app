"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, Calendar, FileText, Award, AlertTriangle, MessageSquare } from "lucide-react"

export default function ParentDashboard() {
  const children = [
    {
      id: 1,
      name: "สมชาย ใจดี",
      grade: "ปวช.2",
      gpa: "3.45",
      attendance: "94%",
      avatar: "ส",
    },
    {
      id: 2,
      name: "สมหญิง ใจดี",
      grade: "ปวช.1",
      gpa: "3.78",
      attendance: "96%",
      avatar: "ส",
    },
  ]

  const notifications = [
    {
      type: "grade",
      title: "เกรดใหม่ - สมชาย ใจดี",
      message: "ได้รับเกรด A ในวิชาคณิตศาสตร์พื้นฐาน",
      time: "2 ชั่วโมงที่แล้ว",
      color: "bg-green-100 text-green-800",
    },
    {
      type: "attendance",
      title: "การเข้าเรียน - สมหญิง ใจดี",
      message: "ขาดเรียนวิชาภาษาอังกฤษ วันที่ 15 มกราคม",
      time: "1 วันที่แล้ว",
      color: "bg-red-100 text-red-800",
    },
    {
      type: "assignment",
      title: "งานที่ต้องส่ง - สมชาย ใจดี",
      message: "มีงานวิชาการเขียนโปรแกรมที่ต้องส่งภายใน 3 วัน",
      time: "2 วันที่แล้ว",
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  const upcomingEvents = [
    {
      date: "20 ม.ค.",
      title: "ประชุมผู้ปกครอง",
      time: "09:00-11:00",
      location: "ห้องประชุมใหญ่",
    },
    {
      date: "25 ม.ค.",
      title: "วันสอบกลางภาค",
      time: "08:00-16:00",
      location: "ห้องสอบ A-F",
    },
    {
      date: "30 ม.ค.",
      title: "กิจกรรมกีฬาสี",
      time: "08:00-15:00",
      location: "สนามกีฬา",
    },
  ]

  const recentMessages = [
    {
      from: "อาจารย์สมหญิง",
      subject: "เกี่ยวกับผลการเรียนของสมชาย",
      preview: "ขอแจ้งให้ทราบว่าสมชายมีผลการเรียนที่ดีขึ้นในเทอมนี้...",
      time: "1 ชั่วโมงที่แล้ว",
      unread: true,
    },
    {
      from: "งานทะเบียน",
      subject: "การลงทะเบียนเรียนเทอมหน้า",
      preview: "ขอเชิญผู้ปกครองมาปรึกษาการลงทะเบียนเรียน...",
      time: "1 วันที่แล้ว",
      unread: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">แดชบอร์ดผู้ปกครอง</h1>
          <p className="text-gray-600">ยินดีต้อนรับ คุณสมศรี - ติดตามผลการเรียนและกิจกรรมของลูก</p>
        </div>

        {/* Children Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {children.map((child) => (
            <Card key={child.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">{child.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-gray-900">{child.name}</CardTitle>
                    <CardDescription className="text-gray-600">{child.grade}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600">เกรดเฉลี่ย</p>
                    <p className="text-xl font-bold text-green-600">{child.gpa}</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600">การเข้าเรียน</p>
                    <p className="text-xl font-bold text-blue-600">{child.attendance}</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">ดูรายละเอียด</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Notifications */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <CardTitle className="text-gray-900">การแจ้งเตือน</CardTitle>
              </div>
              <CardDescription className="text-gray-600">ข่าวสารและการแจ้งเตือนเกี่ยวกับลูก</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    <Badge className={`text-xs ${notification.color} border-0`}>{notification.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-gray-900">กิจกรรมที่จะมาถึง</CardTitle>
              </div>
              <CardDescription className="text-gray-600">กิจกรรมและเหตุการณ์สำคัญของโรงเรียน</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-center bg-purple-100 rounded-lg p-3 min-w-[60px]">
                      <p className="text-xs text-purple-600 font-medium">{event.date}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.time}</p>
                      <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-gray-900">ข้อความจากโรงเรียน</CardTitle>
              </div>
              <Button variant="outline" size="sm">
                ดูทั้งหมด
              </Button>
            </div>
            <CardDescription className="text-gray-600">ข้อความและการติดต่อจากครูและเจ้าหน้าที่</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${
                    message.unread ? "bg-blue-50 hover:bg-blue-100" : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{message.subject}</h3>
                      {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                    </div>
                    <p className="text-sm text-gray-600">จาก: {message.from}</p>
                    <p className="text-sm text-gray-500 mt-1">{message.preview}</p>
                    <p className="text-xs text-gray-400 mt-2">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900">การดำเนินการด่วน</CardTitle>
            <CardDescription className="text-gray-600">ฟังก์ชันที่ใช้บ่อยสำหรับผู้ปกครอง</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex-col bg-blue-50 text-blue-700 hover:bg-blue-100 border-0">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-sm">ดูเกรด</span>
              </Button>
              <Button className="h-20 flex-col bg-green-50 text-green-700 hover:bg-green-100 border-0">
                <Users className="h-6 w-6 mb-2" />
                <span className="text-sm">การเข้าเรียน</span>
              </Button>
              <Button className="h-20 flex-col bg-purple-50 text-purple-700 hover:bg-purple-100 border-0">
                <MessageSquare className="h-6 w-6 mb-2" />
                <span className="text-sm">ส่งข้อความ</span>
              </Button>
              <Button className="h-20 flex-col bg-orange-50 text-orange-700 hover:bg-orange-100 border-0">
                <Calendar className="h-6 w-6 mb-2" />
                <span className="text-sm">ตารางเรียน</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
