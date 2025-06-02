"use client"

import { useState } from "react"
import { format } from "date-fns"
import { th } from "date-fns/locale"
import { CalendarIcon, Check, Clock, UserX, UserCheck, AlertCircle, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useToast } from "@/hooks/use-toast"

// Mock data for students
const students = [
  {
    id: "1",
    name: "นายภัคพล พูลสวัสดิ์",
    studentId: "65201020001",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    name: "นายพุฒิพงศ์ สุขใส",
    studentId: "65201020002",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    name: "นางสาวจุฑารัตน์ สีธงชัย",
    studentId: "65201020003",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "นายธนกฤต แก้วมณี",
    studentId: "65201020004",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "นางสาวพิมพ์ชนก ศรีวิลัย",
    studentId: "65201020005",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

// Mock data for classrooms
const classrooms = [
  { id: "1", name: "ปวช.1/1-ช่างกลโรงงาน" },
  { id: "2", name: "ปวช.1/2-ช่างกลโรงงาน" },
  { id: "3", name: "ปวช.1/3-ช่างกลโรงงาน" },
  { id: "4", name: "ปวช.2/1-ช่างกลโรงงาน" },
  { id: "5", name: "ปวช.2/2-ช่างกลโรงงาน" },
]

type AttendanceStatus = "present" | "late" | "absent" | "leave" | null

export default function FlagCeremonyPage() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>(new Date())
  const [selectedClassroom, setSelectedClassroom] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [attendanceData, setAttendanceData] = useState<Record<string, AttendanceStatus>>({})
  const [activeTab, setActiveTab] = useState<string>("all")

  // Filter students based on search query and selected tab
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) || student.studentId.includes(searchQuery)

    if (activeTab === "all") return matchesSearch
    if (activeTab === "present") return matchesSearch && attendanceData[student.id] === "present"
    if (activeTab === "late") return matchesSearch && attendanceData[student.id] === "late"
    if (activeTab === "absent") return matchesSearch && attendanceData[student.id] === "absent"
    if (activeTab === "leave") return matchesSearch && attendanceData[student.id] === "leave"
    if (activeTab === "unmarked") return matchesSearch && !attendanceData[student.id]

    return matchesSearch
  })

  // Handle attendance status change
  const handleAttendanceChange = (studentId: string, status: AttendanceStatus) => {
    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: status,
    }))
  }

  // Save attendance data
  const handleSaveAttendance = () => {
    toast({
      title: "บันทึกข้อมูลสำเร็จ",
      description: `บันทึกข้อมูลการเข้าแถวเคารพธงชาติวันที่ ${format(date, "d MMMM yyyy", { locale: th })} เรียบร้อยแล้ว`,
    })
  }

  // Count attendance statistics
  const stats = {
    total: students.length,
    present: Object.values(attendanceData).filter((status) => status === "present").length,
    late: Object.values(attendanceData).filter((status) => status === "late").length,
    absent: Object.values(attendanceData).filter((status) => status === "absent").length,
    leave: Object.values(attendanceData).filter((status) => status === "leave").length,
    unmarked: students.length - Object.keys(attendanceData).length,
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">เช็คชื่อเข้าแถวเคารพธงชาติ</h1>
            <p className="text-muted-foreground">บันทึกการเข้าร่วมกิจกรรมเข้าแถวเคารพธงชาติประจำวัน</p>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[240px] justify-start text-left font-normal bg-background border-input hover:bg-accent hover:text-accent-foreground"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "d MMMM yyyy", { locale: th }) : "เลือกวันที่"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-popover border-border" align="end">
                <Calendar mode="single" selected={date} onSelect={(date) => date && setDate(date)} initialFocus />
              </PopoverContent>
            </Popover>
            <Select value={selectedClassroom} onValueChange={setSelectedClassroom}>
              <SelectTrigger className="w-[240px] bg-background border-input">
                <SelectValue placeholder="เลือกห้องเรียน" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {classrooms.map((classroom) => (
                  <SelectItem
                    key={classroom.id}
                    value={classroom.id}
                    className="hover:bg-accent hover:text-accent-foreground"
                  >
                    {classroom.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600 dark:text-blue-300">นักเรียนทั้งหมด</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-200">{stats.total} คน</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600 dark:text-green-300">มาเข้าแถว</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700 dark:text-green-200">{stats.present} คน</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/50 border-amber-200 dark:border-amber-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-amber-600 dark:text-amber-300">มาสาย</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-700 dark:text-amber-200">{stats.late} คน</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 border-red-200 dark:border-red-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-600 dark:text-red-300">ขาด</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700 dark:text-red-200">{stats.absent} คน</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-purple-200 dark:border-purple-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-purple-600 dark:text-purple-300">ลา</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-200">{stats.leave} คน</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ค้นหาชื่อหรือรหัสนักเรียน..."
              className="w-full md:w-[300px] pl-10 bg-background border-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSaveAttendance}
            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Check className="mr-2 h-4 w-4" />
            บันทึกข้อมูล
          </Button>
        </div>

        {/* Tabs and Student List */}
        <Card className="bg-card border-border">
          <CardHeader className="p-4 border-b border-border">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto bg-muted">
                <TabsTrigger
                  value="all"
                  className="py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  ทั้งหมด
                  <Badge variant="outline" className="ml-2 bg-background text-foreground border-border">
                    {students.length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="present"
                  className="py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  มาเข้าแถว
                  <Badge
                    variant="outline"
                    className="ml-2 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-800"
                  >
                    {stats.present}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="late"
                  className="py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  มาสาย
                  <Badge
                    variant="outline"
                    className="ml-2 bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                  >
                    {stats.late}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="absent"
                  className="py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  ขาด
                  <Badge
                    variant="outline"
                    className="ml-2 bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300 border-red-200 dark:border-red-800"
                  >
                    {stats.absent}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="leave"
                  className="py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  ลา
                  <Badge
                    variant="outline"
                    className="ml-2 bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                  >
                    {stats.leave}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="unmarked"
                  className="py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  ยังไม่เช็ค
                  <Badge
                    variant="outline"
                    className="ml-2 bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                  >
                    {stats.unmarked}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                      <Avatar className="border-2 border-border">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback className="bg-muted text-muted-foreground">
                          {student.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-foreground">{student.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span>{student.studentId}</span>
                          <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground"></span>
                          <span>{student.classroom}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <Button
                        size="sm"
                        variant={attendanceData[student.id] === "present" ? "default" : "outline"}
                        className={
                          attendanceData[student.id] === "present"
                            ? "bg-green-600 hover:bg-green-700 text-white border-green-600"
                            : "hover:bg-green-100 hover:text-green-700 dark:hover:bg-green-900/50 dark:hover:text-green-300 border-input"
                        }
                        onClick={() => handleAttendanceChange(student.id, "present")}
                      >
                        <UserCheck className="h-4 w-4 mr-1" />
                        มาเข้าแถว
                      </Button>
                      <Button
                        size="sm"
                        variant={attendanceData[student.id] === "late" ? "default" : "outline"}
                        className={
                          attendanceData[student.id] === "late"
                            ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
                            : "hover:bg-amber-100 hover:text-amber-700 dark:hover:bg-amber-900/50 dark:hover:text-amber-300 border-input"
                        }
                        onClick={() => handleAttendanceChange(student.id, "late")}
                      >
                        <Clock className="h-4 w-4 mr-1" />
                        มาสาย
                      </Button>
                      <Button
                        size="sm"
                        variant={attendanceData[student.id] === "absent" ? "default" : "outline"}
                        className={
                          attendanceData[student.id] === "absent"
                            ? "bg-red-600 hover:bg-red-700 text-white border-red-600"
                            : "hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-900/50 dark:hover:text-red-300 border-input"
                        }
                        onClick={() => handleAttendanceChange(student.id, "absent")}
                      >
                        <UserX className="h-4 w-4 mr-1" />
                        ขาด
                      </Button>
                      <Button
                        size="sm"
                        variant={attendanceData[student.id] === "leave" ? "default" : "outline"}
                        className={
                          attendanceData[student.id] === "leave"
                            ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                            : "hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900/50 dark:hover:text-purple-300 border-input"
                        }
                        onClick={() => handleAttendanceChange(student.id, "leave")}
                      >
                        <AlertCircle className="h-4 w-4 mr-1" />
                        ลา
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="rounded-full bg-muted w-12 h-12 flex items-center justify-center mb-4">
                    <UserX className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">ไม่พบข้อมูลนักเรียน</h3>
                  <p className="text-muted-foreground text-center mt-2">ไม่พบข้อมูลนักเรียนที่ตรงกับเงื่อนไขการค้นหา</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
