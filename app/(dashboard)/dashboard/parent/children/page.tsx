"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Award, UserCheck, Calendar, BookOpen, TrendingUp, MessageSquare } from "lucide-react"

export default function ChildrenPage() {
  const children = [
    {
      id: 1,
      name: "สมชาย ใจดี",
      studentId: "STD001",
      grade: "ปวช.2",
      class: "ปวช.2/1",
      gpa: "3.45",
      attendance: "94%",
      avatar: "ส",
      subjects: [
        { name: "คณิตศาสตร์พื้นฐาน", grade: "A", teacher: "อาจารย์สมหญิง" },
        { name: "ภาษาอังกฤษ", grade: "B+", teacher: "อาจารย์จอห์น" },
        { name: "การเขียนโปรแกรม", grade: "A-", teacher: "อาจารย์สมชาย" },
        { name: "ฟิสิกส์", grade: "B", teacher: "อาจารย์วิทยา" },
      ],
      recentActivities: [
        { type: "grade", message: "ได้รับเกรด A ในวิชาคณิตศาสตร์", date: "2024-01-18" },
        { type: "attendance", message: "เข้าเรียนครบทุกวิชาในสัปดาห์นี้", date: "2024-01-17" },
        { type: "assignment", message: "ส่งงานโปรเจค Calculator App", date: "2024-01-15" },
      ],
    },
    {
      id: 2,
      name: "สมหญิง ใจดี",
      studentId: "STD002",
      grade: "ปวช.1",
      class: "ปวช.1/2",
      gpa: "3.78",
      attendance: "96%",
      avatar: "ส",
      subjects: [
        { name: "คณิตศาสตร์พื้นฐาน", grade: "A", teacher: "อาจารย์สมศรี" },
        { name: "ภาษาไทย", grade: "A-", teacher: "อาจารย์มาลี" },
        { name: "วิทยาศาสตร์", grade: "B+", teacher: "อาจารย์สมปอง" },
        { name: "สังคมศึกษา", grade: "A", teacher: "อาจารย์วิไล" },
      ],
      recentActivities: [
        { type: "grade", message: "ได้รับเกรด A ในวิชาคณิตศาสตร์", date: "2024-01-19" },
        { type: "assignment", message: "ส่งงานเรียงความภาษาไทย", date: "2024-01-16" },
        { type: "attendance", message: "มาเรียนสาย 1 ครั้งในสัปดาห์นี้", date: "2024-01-14" },
      ],
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "grade":
        return <Award className="h-4 w-4 text-green-600" />
      case "attendance":
        return <UserCheck className="h-4 w-4 text-blue-600" />
      case "assignment":
        return <BookOpen className="h-4 w-4 text-purple-600" />
      default:
        return <Calendar className="h-4 w-4 text-gray-600" />
    }
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800"
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800"
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ข้อมูลลูก</h1>
              <p className="text-gray-600">ติดตามผลการเรียนและกิจกรรมของลูก</p>
            </div>
          </div>
        </div>

        {/* Children Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {children.map((child) => (
            <Card key={child.id} className="bg-white border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-blue-600 text-white font-semibold text-lg">
                      {child.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900">{child.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      รหัสนักเรียน: {child.studentId} • {child.grade} • {child.class}
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">GPA: {child.gpa}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">การเข้าเรียน: {child.attendance}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    ดูรายละเอียด
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="subjects" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="subjects">วิชาเรียน</TabsTrigger>
                    <TabsTrigger value="activities">กิจกรรมล่าสุด</TabsTrigger>
                  </TabsList>

                  <TabsContent value="subjects" className="space-y-3 mt-4">
                    {child.subjects.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{subject.name}</h4>
                          <p className="text-sm text-gray-600">{subject.teacher}</p>
                        </div>
                        <Badge className={`${getGradeColor(subject.grade)} border-0`}>{subject.grade}</Badge>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="activities" className="space-y-3 mt-4">
                    {child.recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="mt-1">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ลูกทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">GPA เฉลี่ย</p>
                  <p className="text-2xl font-bold text-green-600">3.62</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">การเข้าเรียนเฉลี่ย</p>
                  <p className="text-2xl font-bold text-blue-600">95%</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">ข้อความใหม่</p>
                  <p className="text-2xl font-bold text-purple-600">3</p>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900">การดำเนินการด่วน</CardTitle>
            <CardDescription className="text-gray-600">ฟังก์ชันที่ใช้บ่อยสำหรับผู้ปกครอง</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex-col bg-blue-50 text-blue-700 hover:bg-blue-100 border-0">
                <Award className="h-6 w-6 mb-2" />
                <span className="text-sm">ดูเกรด</span>
              </Button>
              <Button className="h-20 flex-col bg-green-50 text-green-700 hover:bg-green-100 border-0">
                <UserCheck className="h-6 w-6 mb-2" />
                <span className="text-sm">การเข้าเรียน</span>
              </Button>
              <Button className="h-20 flex-col bg-purple-50 text-purple-700 hover:bg-purple-100 border-0">
                <MessageSquare className="h-6 w-6 mb-2" />
                <span className="text-sm">ส่งข้อความ</span>
              </Button>
              <Button className="h-20 flex-col bg-orange-50 text-orange-700 hover:bg-orange-100 border-0">
                <TrendingUp className="h-6 w-6 mb-2" />
                <span className="text-sm">รายงานความก้าวหน้า</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
