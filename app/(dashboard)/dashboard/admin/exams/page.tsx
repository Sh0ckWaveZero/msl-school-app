"use client"

import { useState } from "react"
import { Plus, Search, Filter, Calendar, Clock, Users, FileText, Eye, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const examData = [
  {
    id: "EX001",
    title: "สอบกลางภาค - คณิตศาสตร์",
    subject: "คณิตศาสตร์",
    class: "ปวช.1/1",
    date: "2024-02-15",
    time: "09:00-11:00",
    duration: "120 นาที",
    students: 35,
    status: "กำลังดำเนินการ",
    type: "กลางภาค",
    teacher: "อ.สมหญิง ใจดี",
  },
  {
    id: "EX002",
    title: "สอบปลายภาค - ภาษาอังกฤษ",
    subject: "ภาษาอังกฤษ",
    class: "ปวช.2/1",
    date: "2024-02-20",
    time: "13:00-15:00",
    duration: "120 นาที",
    students: 32,
    status: "รอดำเนินการ",
    type: "ปลายภาค",
    teacher: "อ.จันทร์ เพ็ญ",
  },
  {
    id: "EX003",
    title: "สอบย่อย - วิทยาศาสตร์",
    subject: "วิทยาศาสตร์",
    class: "ปวส.1/1",
    date: "2024-02-10",
    time: "10:00-11:30",
    duration: "90 นาที",
    students: 28,
    status: "เสร็จสิ้น",
    type: "ย่อย",
    teacher: "อ.วิทย์ ศาสตร์",
  },
]

const upcomingExams = [
  {
    id: "EX004",
    title: "สอบกลางภาค - ประวัติศาสตร์",
    date: "2024-02-18",
    time: "14:00",
    class: "ปวช.1/2",
  },
  {
    id: "EX005",
    title: "สอบปลายภาค - ฟิสิกส์",
    date: "2024-02-22",
    time: "09:00",
    class: "ปวส.2/1",
  },
]

export default function ExamsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTab, setSelectedTab] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "กำลังดำเนินการ":
        return "bg-blue-100 text-blue-800"
      case "รอดำเนินการ":
        return "bg-yellow-100 text-yellow-800"
      case "เสร็จสิ้น":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "กลางภาค":
        return "bg-purple-100 text-purple-800"
      case "ปลายภาค":
        return "bg-red-100 text-red-800"
      case "ย่อย":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">การสอบ</h1>
          <p className="text-muted-foreground">จัดการการสอบและข้อสอบ</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          สร้างการสอบใหม่
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">การสอบทั้งหมด</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">กำลังดำเนินการ</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">การสอบที่กำลังดำเนินการ</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รอดำเนินการ</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">การสอบที่กำลังจะมาถึง</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">นักเรียนเข้าสอบ</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">นักเรียนทั้งหมด</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>รายการการสอบ</CardTitle>
                  <CardDescription>จัดการและติดตามการสอบทั้งหมด</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="ค้นหาการสอบ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    กรอง
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList>
                  <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
                  <TabsTrigger value="ongoing">กำลังดำเนินการ</TabsTrigger>
                  <TabsTrigger value="upcoming">รอดำเนินการ</TabsTrigger>
                  <TabsTrigger value="completed">เสร็จสิ้น</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>การสอบ</TableHead>
                        <TableHead>วิชา/ชั้น</TableHead>
                        <TableHead>วันที่/เวลา</TableHead>
                        <TableHead>ระยะเวลา</TableHead>
                        <TableHead>สถานะ</TableHead>
                        <TableHead>การดำเนินการ</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {examData.map((exam) => (
                        <TableRow key={exam.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{exam.title}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className={getTypeColor(exam.type)}>
                                  {exam.type}
                                </Badge>
                                <span className="text-sm text-muted-foreground">{exam.students} คน</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{exam.subject}</div>
                              <div className="text-sm text-muted-foreground">{exam.class}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{exam.date}</div>
                              <div className="text-sm text-muted-foreground">{exam.time}</div>
                            </div>
                          </TableCell>
                          <TableCell>{exam.duration}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(exam.status)}>{exam.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  ⋯
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  ดูรายละเอียด
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  แก้ไข
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  ลบ
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Exams */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">การสอบที่กำลังจะมาถึง</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{exam.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {exam.date} • {exam.time}
                    </p>
                    <p className="text-xs text-muted-foreground">{exam.class}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">การดำเนินการด่วน</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                สร้างการสอบใหม่
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                นำเข้าข้อสอบ
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                จัดการนักเรียนสอบ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
