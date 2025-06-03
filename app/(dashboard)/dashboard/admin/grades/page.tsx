"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Download, Filter, Award, TrendingUp, Users, BookOpen } from "lucide-react"

export default function GradesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedClass, setSelectedClass] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const gradeStats = [
    {
      title: "เกรดเฉลี่ย",
      value: "3.25",
      change: "+0.15",
      icon: Award,
      color: "text-blue-600",
    },
    {
      title: "นักเรียนผ่าน",
      value: "89%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "จำนวนนักเรียน",
      value: "1,247",
      change: "+23",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "วิชาที่เปิดสอน",
      value: "42",
      change: "+2",
      icon: BookOpen,
      color: "text-orange-600",
    },
  ]

  const gradeData = [
    {
      id: 1,
      studentId: "STD001",
      studentName: "สมชาย ใจดี",
      class: "ปวช.2/1",
      subject: "คณิตศาสตร์พื้นฐาน",
      midterm: 85,
      final: 78,
      assignment: 90,
      total: 84,
      grade: "A",
      status: "ผ่าน",
    },
    {
      id: 2,
      studentId: "STD002",
      studentName: "สมหญิง สวยงาม",
      class: "ปวช.2/1",
      subject: "คณิตศาสตร์พื้นฐาน",
      midterm: 92,
      final: 88,
      assignment: 95,
      total: 91,
      grade: "A",
      status: "ผ่าน",
    },
    {
      id: 3,
      studentId: "STD003",
      studentName: "สมศักดิ์ เก่งมาก",
      class: "ปวช.2/2",
      subject: "ฟิสิกส์",
      midterm: 65,
      final: 70,
      assignment: 75,
      total: 70,
      grade: "B",
      status: "ผ่าน",
    },
  ]

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "B":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "C":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "D":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "F":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">การให้เกรด</h1>
          <p className="text-muted-foreground">จัดการเกรดและการประเมินผลการเรียน</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            ส่งออกข้อมูล
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            เพิ่มเกรด
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {gradeStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change} จากเดือนที่แล้ว</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="grades" className="space-y-4">
        <TabsList>
          <TabsTrigger value="grades">รายการเกรด</TabsTrigger>
          <TabsTrigger value="analytics">การวิเคราะห์</TabsTrigger>
          <TabsTrigger value="reports">รายงาน</TabsTrigger>
        </TabsList>

        <TabsContent value="grades" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>รายการเกรดนักเรียน</CardTitle>
              <CardDescription>จัดการและติดตามเกรดของนักเรียนทุกคน</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="ค้นหานักเรียน..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="เลือกชั้นเรียน" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ทุกชั้นเรียน</SelectItem>
                    <SelectItem value="pvt1">ปวช.1</SelectItem>
                    <SelectItem value="pvt2">ปวช.2</SelectItem>
                    <SelectItem value="pvt3">ปวช.3</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="เลือกวิชา" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">ทุกวิชา</SelectItem>
                    <SelectItem value="math">คณิตศาสตร์</SelectItem>
                    <SelectItem value="physics">ฟิสิกส์</SelectItem>
                    <SelectItem value="chemistry">เคมี</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  กรอง
                </Button>
              </div>

              {/* Grades Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>รหัสนักเรียน</TableHead>
                      <TableHead>ชื่อ-นามสกุล</TableHead>
                      <TableHead>ชั้นเรียน</TableHead>
                      <TableHead>วิชา</TableHead>
                      <TableHead className="text-center">กลางภาค</TableHead>
                      <TableHead className="text-center">ปลายภาค</TableHead>
                      <TableHead className="text-center">งาน</TableHead>
                      <TableHead className="text-center">รวม</TableHead>
                      <TableHead className="text-center">เกรด</TableHead>
                      <TableHead className="text-center">สถานะ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gradeData.map((grade) => (
                      <TableRow key={grade.id}>
                        <TableCell className="font-medium">{grade.studentId}</TableCell>
                        <TableCell>{grade.studentName}</TableCell>
                        <TableCell>{grade.class}</TableCell>
                        <TableCell>{grade.subject}</TableCell>
                        <TableCell className="text-center">{grade.midterm}</TableCell>
                        <TableCell className="text-center">{grade.final}</TableCell>
                        <TableCell className="text-center">{grade.assignment}</TableCell>
                        <TableCell className="text-center font-medium">{grade.total}</TableCell>
                        <TableCell className="text-center">
                          <Badge className={getGradeColor(grade.grade)}>{grade.grade}</Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant={grade.status === "ผ่าน" ? "default" : "destructive"}>{grade.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>การวิเคราะห์เกรด</CardTitle>
              <CardDescription>สถิติและการวิเคราะห์ผลการเรียนของนักเรียน</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">กำลังพัฒนาระบบการวิเคราะห์...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>รายงานเกรด</CardTitle>
              <CardDescription>สร้างและส่งออกรายงานเกรดต่างๆ</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">กำลังพัฒนาระบบรายงาน...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
