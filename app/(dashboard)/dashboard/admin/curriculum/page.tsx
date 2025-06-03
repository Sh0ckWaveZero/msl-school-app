"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookMarked, Plus, Search, Edit, Trash2, Eye, Clock, Users } from "lucide-react"

export default function CurriculumPage() {
  const curriculums = [
    {
      id: 1,
      name: "หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)",
      code: "CERT001",
      duration: "3 ปี",
      totalCredits: 120,
      students: 856,
      status: "active",
      description: "หลักสูตรประกาศนียบัตรวิชาชีพ ระดับ ปวช. สาขาต่างๆ",
      subjects: 45,
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      name: "หลักสูตรประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      code: "CERT002",
      duration: "2 ปี",
      totalCredits: 80,
      students: 391,
      status: "active",
      description: "หลักสูตรประกาศนียบัตรวิชาชีพชั้นสูง ระดับ ปวส. สาขาต่างๆ",
      subjects: 32,
      lastUpdated: "2024-01-12",
    },
    {
      id: 3,
      name: "หลักสูตรระยะสั้น - การซ่อมคอมพิวเตอร์",
      code: "SHORT001",
      duration: "6 เดือน",
      totalCredits: 24,
      students: 45,
      status: "draft",
      description: "หลักสูตรระยะสั้นสำหรับการซ่อมและบำรุงรักษาคอมพิวเตอร์",
      subjects: 8,
      lastUpdated: "2024-01-10",
    },
  ]

  const subjects = [
    {
      id: 1,
      code: "MATH101",
      name: "คณิตศาสตร์พื้นฐาน",
      credits: 3,
      curriculum: "ปวช.",
      year: 1,
      semester: 1,
      type: "required",
      instructor: "อาจารย์สมหญิง",
    },
    {
      id: 2,
      code: "ENG101",
      name: "ภาษาอังกฤษเพื่อการสื่อสาร",
      credits: 3,
      curriculum: "ปวช.",
      year: 1,
      semester: 1,
      type: "required",
      instructor: "อาจารย์จอห์น",
    },
    {
      id: 3,
      code: "COMP101",
      name: "การเขียนโปรแกรมคอมพิวเตอร์",
      credits: 4,
      curriculum: "ปวช.",
      year: 1,
      semester: 2,
      type: "major",
      instructor: "อาจารย์สมชาย",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "required":
        return "bg-red-100 text-red-800"
      case "major":
        return "bg-blue-100 text-blue-800"
      case "elective":
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
                <BookMarked className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">หลักสูตรการเรียน</h1>
                <p className="text-gray-600">จัดการหลักสูตรและแผนการเรียน</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มหลักสูตรใหม่
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="curriculums" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="curriculums">หลักสูตร</TabsTrigger>
            <TabsTrigger value="subjects">รายวิชา</TabsTrigger>
          </TabsList>

          {/* Curriculums Tab */}
          <TabsContent value="curriculums" className="space-y-6">
            {/* Search and Filter */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="ค้นหาหลักสูตร..." className="pl-10" />
                  </div>
                  <Button variant="outline">กรองข้อมูล</Button>
                </div>
              </CardContent>
            </Card>

            {/* Curriculums Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {curriculums.map((curriculum) => (
                <Card
                  key={curriculum.id}
                  className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-900 mb-2">{curriculum.name}</CardTitle>
                        <CardDescription className="text-gray-600">{curriculum.description}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(curriculum.status)} border-0 ml-2`}>
                        {curriculum.status === "active" ? "ใช้งาน" : curriculum.status === "draft" ? "ร่าง" : "ไม่ใช้งาน"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">รหัสหลักสูตร</p>
                        <p className="font-medium text-gray-900">{curriculum.code}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">ระยะเวลา</p>
                        <p className="font-medium text-gray-900">{curriculum.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">หน่วยกิต</p>
                        <p className="font-medium text-gray-900">{curriculum.totalCredits}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">รายวิชา</p>
                        <p className="font-medium text-gray-900">{curriculum.subjects}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{curriculum.students} นักเรียน</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{curriculum.lastUpdated}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        ดู
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        แก้ไข
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Subjects Tab */}
          <TabsContent value="subjects" className="space-y-6">
            {/* Search and Filter */}
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="ค้นหารายวิชา..." className="pl-10" />
                  </div>
                  <Button variant="outline">กรองตามหลักสูตร</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    เพิ่มรายวิชา
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Subjects Table */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">รายวิชาทั้งหมด</CardTitle>
                <CardDescription className="text-gray-600">จัดการรายวิชาในหลักสูตร</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookMarked className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                          <p className="text-sm text-gray-600">
                            {subject.code} • {subject.curriculum} ปีที่ {subject.year} เทอม {subject.semester}
                          </p>
                          <p className="text-sm text-gray-500">ผู้สอน: {subject.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{subject.credits}</p>
                          <p className="text-xs text-gray-500">หน่วยกิต</p>
                        </div>
                        <Badge className={`${getTypeColor(subject.type)} border-0`}>
                          {subject.type === "required" ? "บังคับ" : subject.type === "major" ? "เอก" : "เลือก"}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
