"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Plus, Search, Play, FileText, Video, ImageIcon, Download } from "lucide-react"

export default function LessonsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const lessons = [
    {
      id: 1,
      title: "บทที่ 1: พื้นฐานการเขียนโปรแกรม",
      subject: "การเขียนโปรแกรมคอมพิวเตอร์",
      chapter: 1,
      duration: "90 นาที",
      materials: [
        { type: "video", name: "วิดีโอบรรยาย", size: "245 MB" },
        { type: "pdf", name: "เอกสารประกอบ", size: "12 MB" },
        { type: "code", name: "ตัวอย่างโค้ด", size: "2 MB" },
      ],
      status: "published",
      views: 156,
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      title: "บทที่ 2: ตัวแปรและชนิดข้อมูล",
      subject: "การเขียนโปรแกรมคอมพิวเตอร์",
      chapter: 2,
      duration: "75 นาที",
      materials: [
        { type: "video", name: "วิดีโอบรรยาย", size: "198 MB" },
        { type: "pdf", name: "เอกสารประกอบ", size: "8 MB" },
        { type: "exercise", name: "แบบฝึกหัด", size: "1 MB" },
      ],
      status: "draft",
      views: 0,
      lastUpdated: "2024-01-18",
    },
    {
      id: 3,
      title: "บทที่ 3: โครงสร้างควบคุม",
      subject: "การเขียนโปรแกรมคอมพิวเตอร์",
      chapter: 3,
      duration: "120 นาที",
      materials: [
        { type: "video", name: "วิดีโอบรรยาย", size: "312 MB" },
        { type: "pdf", name: "เอกสารประกอบ", size: "15 MB" },
        { type: "code", name: "ตัวอย่างโค้ด", size: "3 MB" },
        { type: "quiz", name: "แบบทดสอบ", size: "500 KB" },
      ],
      status: "scheduled",
      views: 0,
      lastUpdated: "2024-01-20",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "published":
        return "เผยแพร่แล้ว"
      case "draft":
        return "ร่าง"
      case "scheduled":
        return "กำหนดเวลา"
      default:
        return status
    }
  }

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "image":
        return <ImageIcon className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
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
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">จัดการบทเรียน</h1>
                <p className="text-gray-600">สร้างและจัดการเนื้อหาบทเรียนสำหรับนักเรียน</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              สร้างบทเรียนใหม่
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">บทเรียนทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">เผยแพร่แล้ว</p>
                  <p className="text-2xl font-bold text-green-600">12</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <Play className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ร่าง</p>
                  <p className="text-2xl font-bold text-gray-600">4</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-lg">
                  <FileText className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ยอดดูรวม</p>
                  <p className="text-2xl font-bold text-purple-600">2,456</p>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Play className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
                <TabsTrigger value="published">เผยแพร่แล้ว</TabsTrigger>
                <TabsTrigger value="draft">ร่าง</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="ค้นหาบทเรียน..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>

            <TabsContent value="all" className="space-y-4">
              {lessons.map((lesson) => (
                <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{lesson.title}</CardTitle>
                          <Badge className={`${getStatusColor(lesson.status)} border-0 text-xs`}>
                            {getStatusText(lesson.status)}
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 mb-3">
                          {lesson.subject} • ระยะเวลา: {lesson.duration}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span>อัพเดตล่าสุด: {lesson.lastUpdated}</span>
                          <span>ยอดดู: {lesson.views.toLocaleString()} ครั้ง</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">สื่อการเรียน:</p>
                          <div className="flex flex-wrap gap-2">
                            {lesson.materials.map((material, index) => (
                              <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                                {getMaterialIcon(material.type)}
                                <span className="text-sm">{material.name}</span>
                                <span className="text-xs text-gray-500">({material.size})</span>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <Download className="h-3 w-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          ดูตัวอย่าง
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

            <TabsContent value="published">
              <div className="text-center py-8">
                <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">บทเรียนที่เผยแพร่แล้ว</p>
              </div>
            </TabsContent>

            <TabsContent value="draft">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">บทเรียนร่าง</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
