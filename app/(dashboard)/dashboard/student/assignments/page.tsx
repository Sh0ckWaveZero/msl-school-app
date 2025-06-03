"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Search, Calendar, Clock, CheckCircle, AlertCircle, Upload, FileText } from "lucide-react"

export default function StudentAssignmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const assignments = [
    {
      id: 1,
      title: "โปรเจค Calculator App",
      subject: "การเขียนโปรแกรมคอมพิวเตอร์",
      teacher: "อาจารย์สมชาย",
      dueDate: "2024-01-25",
      assignedDate: "2024-01-10",
      status: "pending",
      priority: "high",
      description: "สร้างแอปพลิเคชันเครื่องคิดเลขด้วย JavaScript",
      submissionStatus: "not_submitted",
      grade: null,
      feedback: null,
    },
    {
      id: 2,
      title: "เรียงความ My Future Career",
      subject: "ภาษาอังกฤษเพื่อการสื่อสาร",
      teacher: "อาจารย์จอห์น",
      dueDate: "2024-01-22",
      assignedDate: "2024-01-08",
      status: "submitted",
      priority: "medium",
      description: "เขียนเรียงความเกี่ยวกับอาชีพในอนาคต 500 คำ",
      submissionStatus: "submitted",
      submittedDate: "2024-01-20",
      grade: "B+",
      feedback: "เขียนได้ดี มีการใช้คำศัพท์ที่หลากหลาย",
    },
    {
      id: 3,
      title: "แบบฝึกหัดบทที่ 5",
      subject: "คณิตศาสตร์พื้นฐาน",
      teacher: "อาจารย์สมหญิง",
      dueDate: "2024-01-20",
      assignedDate: "2024-01-15",
      status: "overdue",
      priority: "high",
      description: "แบบฝึกหัดเรื่องสมการเชิงเส้น",
      submissionStatus: "not_submitted",
      grade: null,
      feedback: null,
    },
    {
      id: 4,
      title: "รายงานการทดลองฟิสิกส์",
      subject: "ฟิสิกส์",
      teacher: "อาจารย์วิทยา",
      dueDate: "2024-02-01",
      assignedDate: "2024-01-18",
      status: "upcoming",
      priority: "medium",
      description: "รายงานการทดลองเรื่องการเคลื่อนที่",
      submissionStatus: "not_submitted",
      grade: null,
      feedback: null,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "submitted":
        return "bg-blue-100 text-blue-800"
      case "graded":
        return "bg-green-100 text-green-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      case "upcoming":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "รอส่งงาน"
      case "submitted":
        return "ส่งแล้ว"
      case "graded":
        return "ให้คะแนนแล้ว"
      case "overdue":
        return "เกินกำหนด"
      case "upcoming":
        return "กำลังจะมาถึง"
      default:
        return status
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

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high":
        return "สำคัญมาก"
      case "medium":
        return "สำคัญปานกลาง"
      case "low":
        return "สำคัญน้อย"
      default:
        return priority
    }
  }

  const getDaysLeft = (dueDate: string) => {
    const due = new Date(dueDate)
    const today = new Date()
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">งานที่ได้รับมอบหมาย</h1>
              <p className="text-gray-600">ติดตามและจัดการงานที่ได้รับจากครู</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">งานทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
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
                  <p className="text-sm text-gray-600">รอส่งงาน</p>
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                </div>
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ส่งแล้ว</p>
                  <p className="text-2xl font-bold text-blue-600">4</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">เกินกำหนด</p>
                  <p className="text-2xl font-bold text-red-600">1</p>
                </div>
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
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
                <TabsTrigger value="pending">รอส่งงาน</TabsTrigger>
                <TabsTrigger value="submitted">ส่งแล้ว</TabsTrigger>
                <TabsTrigger value="graded">ให้คะแนนแล้ว</TabsTrigger>
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
              {assignments.map((assignment) => {
                const daysLeft = getDaysLeft(assignment.dueDate)

                return (
                  <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{assignment.title}</CardTitle>
                            <Badge className={`${getStatusColor(assignment.status)} border-0 text-xs`}>
                              {getStatusText(assignment.status)}
                            </Badge>
                            <Badge className={`${getPriorityColor(assignment.priority)} border-0 text-xs`}>
                              {getPriorityText(assignment.priority)}
                            </Badge>
                          </div>
                          <CardDescription className="text-gray-600 mb-3">{assignment.description}</CardDescription>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="font-medium">วิชา: {assignment.subject}</span>
                            <span>ครู: {assignment.teacher}</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>กำหนดส่ง: {assignment.dueDate}</span>
                            </div>
                          </div>

                          {daysLeft > 0 && assignment.status !== "submitted" && (
                            <div className="flex items-center gap-2 mb-3">
                              <Clock className="h-4 w-4 text-orange-500" />
                              <span className="text-sm text-orange-600">เหลือเวลา {daysLeft} วัน</span>
                            </div>
                          )}

                          {assignment.submissionStatus === "submitted" && (
                            <div className="bg-blue-50 rounded-lg p-3 mb-3">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-800">
                                  ส่งงานแล้วเมื่อ: {assignment.submittedDate}
                                </span>
                              </div>
                              {assignment.grade && (
                                <div className="flex items-center gap-4">
                                  <span className="text-sm text-blue-700">
                                    เกรด: <span className="font-bold">{assignment.grade}</span>
                                  </span>
                                  {assignment.feedback && (
                                    <span className="text-sm text-blue-700">ความเห็น: {assignment.feedback}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {assignment.submissionStatus === "not_submitted" && assignment.status !== "overdue" && (
                            <Button className="bg-orange-600 hover:bg-orange-700">
                              <Upload className="h-4 w-4 mr-1" />
                              ส่งงาน
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            ดูรายละเอียด
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </TabsContent>

            <TabsContent value="pending">
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">งานที่รอส่ง</p>
              </div>
            </TabsContent>

            <TabsContent value="submitted">
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">งานที่ส่งแล้ว</p>
              </div>
            </TabsContent>

            <TabsContent value="graded">
              <div className="text-center py-8">
                <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">งานที่ให้คะแนนแล้ว</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
