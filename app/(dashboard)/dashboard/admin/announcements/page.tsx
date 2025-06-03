"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Plus, Search, Calendar, Users, Eye, Edit, Trash2, Send } from "lucide-react"

export default function AnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const announcements = [
    {
      id: 1,
      title: "ประกาศเปิดภาคเรียนใหม่ 2567",
      content: "แจ้งให้นักเรียนทุกคนทราบว่า ภาคเรียนที่ 1 ปีการศึกษา 2567 จะเริ่มต้นในวันที่ 15 พฤษภาคม 2567",
      author: "ผู้ดูแลระบบ",
      date: "2024-01-15",
      status: "published",
      priority: "high",
      views: 1247,
      targetAudience: "ทุกคน",
    },
    {
      id: 2,
      title: "การปรับปรุงระบบในช่วงสุดสัปดาห์",
      content: "ระบบจะมีการปรับปรุงในวันเสาร์ที่ 20 มกราคม เวลา 02:00-06:00 น.",
      author: "ทีม IT",
      date: "2024-01-18",
      status: "scheduled",
      priority: "medium",
      views: 89,
      targetAudience: "ครูและเจ้าหน้าที่",
    },
    {
      id: 3,
      title: "กิจกรรมกีฬาสีประจำปี",
      content: "เชิญชวนนักเรียนทุกคนเข้าร่วมกิจกรรมกีฬาสีประจำปี วันที่ 30 มกราคม 2567",
      author: "ครูพลศึกษา",
      date: "2024-01-10",
      status: "published",
      priority: "medium",
      views: 567,
      targetAudience: "นักเรียน",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">จัดการประกาศ</h1>
                <p className="text-gray-600">สร้างและจัดการประกาศสำหรับโรงเรียน</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              สร้างประกาศใหม่
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
                <TabsTrigger value="published">เผยแพร่แล้ว</TabsTrigger>
                <TabsTrigger value="scheduled">กำหนดเวลา</TabsTrigger>
                <TabsTrigger value="draft">ร่าง</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="ค้นหาประกาศ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <TabsContent value="all" className="space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{announcement.title}</CardTitle>
                          <Badge className={`${getStatusColor(announcement.status)} border-0 text-xs`}>
                            {announcement.status === "published"
                              ? "เผยแพร่แล้ว"
                              : announcement.status === "scheduled"
                                ? "กำหนดเวลา"
                                : "ร่าง"}
                          </Badge>
                          <Badge className={`${getPriorityColor(announcement.priority)} border-0 text-xs`}>
                            {announcement.priority === "high"
                              ? "สำคัญมาก"
                              : announcement.priority === "medium"
                                ? "สำคัญปานกลาง"
                                : "สำคัญน้อย"}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 mb-3">{announcement.content}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Avatar className="h-5 w-5">
                              <AvatarFallback className="text-xs">{announcement.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{announcement.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{announcement.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{announcement.views.toLocaleString()} ครั้ง</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{announcement.targetAudience}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="published">
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">ประกาศที่เผยแพร่แล้ว</p>
              </div>
            </TabsContent>

            <TabsContent value="scheduled">
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">ประกาศที่กำหนดเวลาไว้</p>
              </div>
            </TabsContent>

            <TabsContent value="draft">
              <div className="text-center py-8">
                <Edit className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">ประกาศร่าง</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ประกาศทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bell className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">เผยแพร่แล้ว</p>
                  <p className="text-2xl font-bold text-green-600">18</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <Send className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">กำหนดเวลา</p>
                  <p className="text-2xl font-bold text-blue-600">3</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ร่าง</p>
                  <p className="text-2xl font-bold text-gray-600">3</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Edit className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
