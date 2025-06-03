"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, Users, BookOpen, Award, Target, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

const performanceData = {
  overall: {
    averageGrade: 3.25,
    passRate: 89.5,
    attendanceRate: 92.3,
    completionRate: 87.8,
    improvement: 5.2,
  },
  byDepartment: [
    {
      name: "คอมพิวเตอร์ธุรกิจ",
      students: 450,
      averageGrade: 3.45,
      passRate: 92.1,
      trend: "up",
      change: 3.2,
    },
    {
      name: "การบัญชี",
      students: 380,
      averageGrade: 3.28,
      passRate: 88.7,
      trend: "up",
      change: 2.1,
    },
    {
      name: "การตลาด",
      students: 320,
      averageGrade: 3.15,
      passRate: 85.3,
      trend: "down",
      change: -1.5,
    },
    {
      name: "อิเล็กทรอนิกส์",
      students: 280,
      averageGrade: 3.38,
      passRate: 90.2,
      trend: "up",
      change: 4.1,
    },
  ],
  topPerformers: [
    {
      id: "ST001",
      name: "นายสมชาย เก่งมาก",
      class: "ปวส.2/1",
      gpa: 3.95,
      department: "คอมพิวเตอร์ธุรกิจ",
    },
    {
      id: "ST002",
      name: "นางสาวสมหญิง ขยันเรียน",
      class: "ปวช.3/2",
      gpa: 3.92,
      department: "การบัญชี",
    },
    {
      id: "ST003",
      name: "นายวิทย์ ศาสตร์",
      class: "ปวส.1/1",
      gpa: 3.88,
      department: "อิเล็กทรอนิกส์",
    },
  ],
  needsAttention: [
    {
      id: "ST004",
      name: "นายสมศักดิ์ ต้องช่วย",
      class: "ปวช.1/3",
      gpa: 1.85,
      issues: ["เกรดต่ำ", "ขาดเรียนบ่อย"],
      department: "การตลาด",
    },
    {
      id: "ST005",
      name: "นางสาวจันทร์ ปรับปรุง",
      class: "ปวช.2/1",
      gpa: 2.15,
      issues: ["ส่งงานสาย", "เกรดต่ำ"],
      department: "การบัญชี",
    },
  ],
}

export default function PerformancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("semester")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">ประสิทธิภาพการเรียน</h1>
          <p className="text-muted-foreground">รายงานและวิเคราะห์ผลการเรียนของนักเรียน</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="เลือกสาขาวิชา" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">ทุกสาขาวิชา</SelectItem>
              <SelectItem value="computer">คอมพิวเตอร์ธุรกิจ</SelectItem>
              <SelectItem value="accounting">การบัญชี</SelectItem>
              <SelectItem value="marketing">การตลาด</SelectItem>
              <SelectItem value="electronics">อิเล็กทรอนิกส์</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="ช่วงเวลา" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester">ภาคเรียน</SelectItem>
              <SelectItem value="year">ปีการศึกษา</SelectItem>
              <SelectItem value="month">รายเดือน</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Overall Performance Cards */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">เกรดเฉลี่ย</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.overall.averageGrade}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1 text-green-500" />+{performanceData.overall.improvement}%
              จากภาคที่แล้ว
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">อัตราผ่าน</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.overall.passRate}%</div>
            <Progress value={performanceData.overall.passRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">อัตราเข้าเรียน</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.overall.attendanceRate}%</div>
            <Progress value={performanceData.overall.attendanceRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">อัตราส่งงาน</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{performanceData.overall.completionRate}%</div>
            <Progress value={performanceData.overall.completionRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">การปรับปรุง</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+{performanceData.overall.improvement}%</div>
            <p className="text-xs text-muted-foreground">เทียบกับภาคที่แล้ว</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Department Performance */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>ประสิทธิภาพตามสาขาวิชา</CardTitle>
              <CardDescription>เปรียบเทียบผลการเรียนของแต่ละสาขาวิชา</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceData.byDepartment.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{dept.name}</h3>
                        <div className="flex items-center space-x-2">
                          {dept.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                          )}
                          <span className={`text-sm ${dept.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                            {dept.change > 0 ? "+" : ""}
                            {dept.change}%
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">นักเรียน</p>
                          <p className="font-medium">{dept.students} คน</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">เกรดเฉลี่ย</p>
                          <p className="font-medium">{dept.averageGrade}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">อัตราผ่าน</p>
                          <p className="font-medium">{dept.passRate}%</p>
                        </div>
                      </div>
                      <Progress value={dept.passRate} className="mt-3" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performers & Needs Attention */}
        <div className="space-y-6">
          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">นักเรียนเก่ง</CardTitle>
              <CardDescription>นักเรียนที่มีผลการเรียนดีเด่น</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceData.topPerformers.map((student, index) => (
                <div
                  key={student.id}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 border border-green-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">#{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{student.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {student.class} • {student.department}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    GPA {student.gpa}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Needs Attention */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">ต้องให้ความช่วยเหลือ</CardTitle>
              <CardDescription>นักเรียนที่ต้องการความช่วยเหลือพิเศษ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceData.needsAttention.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-red-50 border border-red-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xs">!</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{student.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {student.class} • {student.department}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {student.issues.map((issue, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-red-100 text-red-700 border-red-300">
                          {issue}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    GPA {student.gpa}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
