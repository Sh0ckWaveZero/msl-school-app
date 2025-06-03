"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Plus, Search, Calendar, Users, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function AssignmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const assignments = [
    {
      id: 1,
      title: "โปรเจค Calculator App",
      subject: "การเขียนโปรแกรมคอมพิวเตอร์",
      teacher: "อาจารย์สมชาย",
      dueDate: "2024-01-25",
      assignedDate: "2024-01-10",
      status: "active",
      submissions: 28,
      totalStudents: 35,
      description: "สร้างแอปพลิเคชันเครื่องคิดเลขด้วย JavaScript",
    },
    {
      id: 2,
      title: "เรียงความ My Future Career",
      subject: "ภาษาอังกฤษเพื่อการสื่อสาร",
      teacher: "อาจารย์จอห์น",
      dueDate: "2024-01-22",
      assignedDate: "2024-01-08",
      status: "active",
      submissions: 42,
      totalStudents: 45,
      description: "เขียนเรียงความเกี่ยวกับอาชีพในอนาคต 500 คำ",
    },
    {
      id: 3,
      title: "แบบฝึกหัดบทที่ 5",
      subject: "คณิตศาสตร์พื้นฐาน",
      teacher: "อาจารย์สมหญิง",
      dueDate: "2024-01-20",
      assignedDate: "2024-01-15",
      status: "overdue",
      submissions: 38,
      totalStudents: 40,
      description: "แบบฝึกหัดเรื่องสมการเชิงเส้น",
    },
    {
      id: 4,
      title: "รายงานการทดลองฟิสิกส์",
      subject: "ฟิสิกส์",
      teacher: "อาจารย์วิทยา",
      dueDate: "2024-02-01",
      assignedDate: "2024-01-18",
      status: "upcoming",
      submissions: 0,
      totalStudents: 32,
      description: "รายงานการทดลองเรื่องการเคลื่อนที่",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "upcoming":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "กำลังดำเนินการ"
      case "overdue":
        return "เกินกำหนด"
      case "completed":
        return "เสร็จสิ้น"
      case "upcoming":
        return "กำลังจะมาถึง"
      default:
        return status
    }
  }

  const getSubmissionRate = (submissions: number, total: number) => {
    return Math.round((submissions / total) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">จัดการงานมอบหมาย</h1>
                <p className="text-gray-600">ติดตามและจัดการงานที่มอบหมายให้นักเรียน</p>
              </div>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="h-4 w-4 mr-2" />
              สร้างงานใหม่
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">งานทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">กำลังดำเนินการ</p>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">เกินกำหนด</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">เสร็จสิ้น</p>
                  <p className="text-2xl font-bold text-green-600">9</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
                <TabsTrigger value="active">กำลังดำเนินการ</TabsTrigger>
                <TabsTrigger value="overdue">เกินกำหนด</TabsTrigger>
                <TabsTrigger value="completed">เสร็จสิ้น</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="ค้นหางาน..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <TabsContent value="all" className="space-y-4">
              {assignments.map((assignment) => (
                <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{assignment.title}</CardTitle>
                          <Badge className={`${getStatusColor(assignment.status)} border-0 text-xs`}>
                            {getStatusText(assignment.status)}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 mb-3">{assignment.description}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <span className="font-medium">วิชา:</span>
                            <span>{assignment.subject}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Avatar className="h-5 w-5">
                              <AvatarFallback className="text-xs">{assignment.teacher.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{assignment.teacher}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>กำหนดส่ง: {assignment.dueDate}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">
                              ส่งแล้ว: {assignment.submissions}/{assignment.totalStudents} คน
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {getSubmissionRate(assignment.submissions, assignment.totalStudents)}%
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          ดูรายละเอียด
                        </Button>
                        <Button variant="outline" size="sm">
                          แก้ไข
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="active">
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">งานที่กำลังดำเนินการ</p>
              </div>
            </TabsContent>

            <TabsContent value="overdue">
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">งานที่เกินกำหนด</p>
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">งานที่เสร็จสิ้นแล้ว</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
