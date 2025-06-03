"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Send, Search, Plus, Reply, Forward, Trash2, Star, Clock } from "lucide-react"

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      sender: "อาจารย์สมหญิง ใจดี",
      role: "teacher",
      subject: "ปัญหาการเข้าเรียนของนักเรียน",
      preview: "ขอปรึกษาเรื่องนักเรียนที่มีปัญหาการเข้าเรียนไม่สม่ำเสมอ...",
      time: "10 นาทีที่แล้ว",
      unread: true,
      priority: "high",
      avatar: "ส",
    },
    {
      id: 2,
      sender: "คุณสมศรี ใจดี",
      role: "parent",
      subject: "สอบถามผลการเรียนของลูก",
      preview: "ต้องการทราบผลการเรียนของลูกในเทอมนี้ และคำแนะนำ...",
      time: "2 ชั่วโมงที่แล้ว",
      unread: true,
      priority: "medium",
      avatar: "ส",
    },
    {
      id: 3,
      sender: "นายสมชาย ใจดี",
      role: "student",
      subject: "ขอเปลี่ยนกลุ่มเรียน",
      preview: "ขอเปลี่ยนกลุ่มเรียนวิชาคณิตศาสตร์เนื่องจากตารางเรียนชน...",
      time: "1 วันที่แล้ว",
      unread: false,
      priority: "low",
      avatar: "ส",
    },
    {
      id: 4,
      sender: "อาจารย์จอห์น สมิธ",
      role: "teacher",
      subject: "ขออนุมัติจัดกิจกรรมพิเศษ",
      preview: "ขออนุมัติจัดกิจกรรม English Camp สำหรับนักเรียน...",
      time: "2 วันที่แล้ว",
      unread: false,
      priority: "medium",
      avatar: "จ",
    },
  ]

  const announcements = [
    {
      id: 1,
      title: "ประกาศเปลี่ยนแปลงตารางสอบกลางภาค",
      content: "เนื่องจากสถานการณ์พิเศษ ขอเลื่อนการสอบกลางภาคออกไป 1 สัปดาห์",
      target: "ทุกคน",
      date: "2024-01-15",
      status: "published",
      views: 1247,
    },
    {
      id: 2,
      title: "กิจกรรมวันสำคัญของชาติ",
      content: "ขอเชิญนักเรียนและครูร่วมกิจกรรมวันสำคัญของชาติ",
      target: "นักเรียน, ครู",
      date: "2024-01-12",
      status: "published",
      views: 856,
    },
    {
      id: 3,
      title: "การปรับปรุงระบบห้องสมุด",
      content: "ห้องสมุดจะปิดปรับปรุงระบบในวันที่ 20-22 มกราคม",
      target: "ทุกคน",
      date: "2024-01-10",
      status: "draft",
      views: 0,
    },
  ]

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

  const getRoleColor = (role: string) => {
    switch (role) {
      case "teacher":
        return "bg-blue-100 text-blue-800"
      case "student":
        return "bg-green-100 text-green-800"
      case "parent":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">ข้อความและการสื่อสาร</h1>
                <p className="text-gray-600">จัดการข้อความ ประกาศ และการสื่อสารในระบบ</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              สร้างข้อความใหม่
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="messages">ข้อความ</TabsTrigger>
            <TabsTrigger value="announcements">ประกาศ</TabsTrigger>
            <TabsTrigger value="compose">เขียนข้อความ</TabsTrigger>
          </TabsList>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            {/* Search and Filter */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="ค้นหาข้อความ..." className="pl-10" />
                  </div>
                  <Button variant="outline">กรองตามบทบาท</Button>
                  <Button variant="outline">กรองตามความสำคัญ</Button>
                </div>
              </CardContent>
            </Card>

            {/* Messages List */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">ข้อความทั้งหมด</CardTitle>
                <CardDescription className="text-gray-600">ข้อความจากครู นักเรียน และผู้ปกครอง</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg transition-colors cursor-pointer ${
                        conversation.unread ? "bg-blue-50 hover:bg-blue-100" : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-blue-600 text-white font-semibold">
                          {conversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-semibold ${conversation.unread ? "text-gray-900" : "text-gray-700"}`}>
                            {conversation.subject}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getPriorityColor(conversation.priority)} border-0 text-xs`}>
                              {conversation.priority === "high"
                                ? "ด่วน"
                                : conversation.priority === "medium"
                                  ? "ปกติ"
                                  : "ไม่ด่วน"}
                            </Badge>
                            {conversation.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">จาก: {conversation.sender}</p>
                        <p className={`text-sm ${conversation.unread ? "text-gray-700" : "text-gray-500"} mb-2`}>
                          {conversation.preview}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Badge className={`${getRoleColor(conversation.role)} border-0 text-xs`}>
                              {conversation.role === "teacher"
                                ? "ครู"
                                : conversation.role === "student"
                                  ? "นักเรียน"
                                  : "ผู้ปกครอง"}
                            </Badge>
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {conversation.time}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Reply className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Forward className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Star className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements" className="space-y-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-gray-900">ประกาศทั้งหมด</CardTitle>
                    <CardDescription className="text-gray-600">จัดการประกาศและข่าวสาร</CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    สร้างประกาศใหม่
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="flex items-start justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{announcement.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{announcement.content}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>เป้าหมาย: {announcement.target}</span>
                          <span>วันที่: {announcement.date}</span>
                          <span>ยอดดู: {announcement.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge className={`${getStatusColor(announcement.status)} border-0`}>
                          {announcement.status === "published"
                            ? "เผยแพร่แล้ว"
                            : announcement.status === "draft"
                              ? "ร่าง"
                              : "เก็บถาวร"}
                        </Badge>
                        <Button size="sm" variant="outline">
                          แก้ไข
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compose Tab */}
          <TabsContent value="compose" className="space-y-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">เขียนข้อความใหม่</CardTitle>
                <CardDescription className="text-gray-600">ส่งข้อความถึงครู นักเรียน หรือผู้ปกครอง</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ผู้รับ</label>
                    <Input placeholder="เลือกผู้รับ..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ประเภท</label>
                    <Input placeholder="เลือกประเภทข้อความ..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">หัวข้อ</label>
                  <Input placeholder="หัวข้อข้อความ..." />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">เนื้อหา</label>
                  <Textarea placeholder="เขียนข้อความของคุณที่นี่..." className="min-h-[200px]" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">แนบไฟล์</Button>
                    <Button variant="outline">บันทึกร่าง</Button>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    ส่งข้อความ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
