"use client"

import { useState } from "react"
import { UserCheck, UserX, Clock, Search, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const classData = [
  {
    id: "CL001",
    name: "คณิตศาสตร์ ปวช.1/1",
    students: 35,
    present: 32,
    absent: 3,
    late: 0,
    time: "08:00-09:50",
    room: "A101",
  },
  {
    id: "CL002",
    name: "ฟิสิกส์ ปวส.2/1",
    students: 28,
    present: 25,
    absent: 2,
    late: 1,
    time: "10:00-11:50",
    room: "B205",
  },
]

const studentData = [
  {
    id: "ST001",
    studentId: "20240001",
    name: "นายสมชาย ใจดี",
    class: "ปวช.1/1",
    status: "present",
    checkInTime: "07:55",
    avatar: "ส",
  },
  {
    id: "ST002",
    studentId: "20240002",
    name: "นางสาวสมหญิง รักเรียน",
    class: "ปวช.1/1",
    status: "present",
    checkInTime: "07:58",
    avatar: "ส",
  },
  {
    id: "ST003",
    studentId: "20240003",
    name: "นายวิทย์ ศาสตร์",
    class: "ปวช.1/1",
    status: "absent",
    checkInTime: "-",
    avatar: "ว",
  },
  {
    id: "ST004",
    studentId: "20240004",
    name: "นางสาวจันทร์ เพ็ญ",
    class: "ปวช.1/1",
    status: "late",
    checkInTime: "08:15",
    avatar: "จ",
  },
]

export default function TeacherAttendancePage() {
  const [selectedClass, setSelectedClass] = useState("CL001")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDate, setSelectedDate] = useState("2024-02-15")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800"
      case "absent":
        return "bg-red-100 text-red-800"
      case "late":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "present":
        return "มาเรียน"
      case "absent":
        return "ขาดเรียน"
      case "late":
        return "มาสาย"
      default:
        return "ไม่ระบุ"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">เช็คชื่อเข้าเรียน</h1>
          <p className="text-muted-foreground">บันทึกการเข้าเรียนของนักเรียน</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            ส่งออกข้อมูล
          </Button>
          <Button>
            <UserCheck className="mr-2 h-4 w-4" />
            เช็คชื่อทั้งหมด
          </Button>
        </div>
      </div>

      {/* Class Selection */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>เลือกชั้นเรียน</CardTitle>
              <CardDescription>เลือกชั้นเรียนที่ต้องการเช็คชื่อ</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-40"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {classData.map((classItem) => (
              <Card
                key={classItem.id}
                className={`cursor-pointer transition-colors ${
                  selectedClass === classItem.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedClass(classItem.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{classItem.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {classItem.time} • ห้อง {classItem.room}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {classItem.present}/{classItem.students}
                      </div>
                      <p className="text-xs text-muted-foreground">มาเรียน</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-4 text-sm">
                      <span className="text-green-600">
                        <UserCheck className="inline h-4 w-4 mr-1" />
                        {classItem.present}
                      </span>
                      <span className="text-red-600">
                        <UserX className="inline h-4 w-4 mr-1" />
                        {classItem.absent}
                      </span>
                      <span className="text-yellow-600">
                        <Clock className="inline h-4 w-4 mr-1" />
                        {classItem.late}
                      </span>
                    </div>
                    <Badge variant="outline">{Math.round((classItem.present / classItem.students) * 100)}%</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Attendance List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>รายชื่อนักเรียน</CardTitle>
              <CardDescription>
                {classData.find((c) => c.id === selectedClass)?.name} • วันที่ {selectedDate}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="ค้นหานักเรียน..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="สถานะ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทั้งหมด</SelectItem>
                  <SelectItem value="present">มาเรียน</SelectItem>
                  <SelectItem value="absent">ขาดเรียน</SelectItem>
                  <SelectItem value="late">มาสาย</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>นักเรียน</TableHead>
                <TableHead>รหัสนักเรียน</TableHead>
                <TableHead>เวลาเข้าเรียน</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>การดำเนินการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentData.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{student.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.class}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono">{student.studentId}</TableCell>
                  <TableCell>{student.checkInTime}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(student.status)}>{getStatusText(student.status)}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <UserX className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Clock className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
