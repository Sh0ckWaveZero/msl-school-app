"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Users, Award, Calendar, BarChart3, PieChart, Activity } from "lucide-react"

export default function AnalyticsPage() {
  const overviewStats = [
    {
      title: "นักเรียนทั้งหมด",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "อัตราการเข้าเรียน",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "เกรดเฉลี่ย",
      value: "3.45",
      change: "+0.15",
      trend: "up",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "อัตราการผ่าน",
      value: "87.3%",
      change: "-1.2%",
      trend: "down",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const departmentStats = [
    {
      name: "สาขาคอมพิวเตอร์",
      students: 456,
      avgGrade: 3.52,
      attendance: 95.1,
      passRate: 89.2,
      color: "bg-blue-500",
    },
    {
      name: "สาขาช่างยนต์",
      students: 389,
      avgGrade: 3.41,
      attendance: 93.8,
      passRate: 86.7,
      color: "bg-green-500",
    },
    {
      name: "สาขาไฟฟ้า",
      students: 234,
      avgGrade: 3.38,
      attendance: 94.5,
      passRate: 85.3,
      color: "bg-purple-500",
    },
    {
      name: "สาขาการบัญชี",
      students: 168,
      avgGrade: 3.61,
      attendance: 96.2,
      passRate: 91.4,
      color: "bg-orange-500",
    },
  ]

  const monthlyData = [
    { month: "ม.ค.", students: 1200, attendance: 94.2, grades: 3.42 },
    { month: "ก.พ.", students: 1215, attendance: 93.8, grades: 3.45 },
    { month: "มี.ค.", students: 1230, attendance: 94.5, grades: 3.48 },
    { month: "เม.ย.", students: 1247, attendance: 94.2, grades: 3.45 },
  ]

  const topPerformers = [
    { name: "นายสมชาย ใจดี", class: "ปวช.2/1", gpa: 3.95, rank: 1 },
    { name: "นางสาวสมหญิง ดีใจ", class: "ปวช.2/2", gpa: 3.92, rank: 2 },
    { name: "นายสมศักดิ์ มั่นใจ", class: "ปวช.3/1", gpa: 3.89, rank: 3 },
    { name: "นางสาวสุดา ใสใจ", class: "ปวส.1/1", gpa: 3.87, rank: 4 },
    { name: "นายสมหมาย รักเรียน", class: "ปวส.2/1", gpa: 3.85, rank: 5 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">การวิเคราะห์ข้อมูล</h1>
                <p className="text-gray-600">วิเคราะห์ข้อมูลเชิงลึกและสถิติการเรียน</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">ส่งออกรายงาน</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">อัพเดทข้อมูล</Button>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-gray-700">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="flex items-center">
                  <Badge
                    variant="secondary"
                    className={`${
                      stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    } hover:bg-green-100`}
                  >
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-gray-500 ml-2">จากเดือนที่แล้ว</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
            <TabsTrigger value="departments">ตามสาขา</TabsTrigger>
            <TabsTrigger value="trends">แนวโน้ม</TabsTrigger>
            <TabsTrigger value="performance">ผลการเรียน</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart Placeholder */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">การกระจายของเกรด</CardTitle>
                  <CardDescription className="text-gray-600">สัดส่วนเกรดของนักเรียนทั้งหมด</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Pie Chart - การกระจายเกรด</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Attendance Chart */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">สถิติการเข้าเรียน</CardTitle>
                  <CardDescription className="text-gray-600">อัตราการเข้าเรียนรายเดือน</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Line Chart - การเข้าเรียน</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Departments Tab */}
          <TabsContent value="departments" className="space-y-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">สถิติตามสาขาวิชา</CardTitle>
                <CardDescription className="text-gray-600">เปรียบเทียบผลการเรียนของแต่ละสาขา</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentStats.map((dept, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${dept.color}`}></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                          <p className="text-sm text-gray-600">{dept.students} นักเรียน</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                          <p className="text-sm text-gray-500">เกรดเฉลี่ย</p>
                          <p className="font-semibold text-gray-900">{dept.avgGrade}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">การเข้าเรียน</p>
                          <p className="font-semibold text-gray-900">{dept.attendance}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">อัตราผ่าน</p>
                          <p className="font-semibold text-gray-900">{dept.passRate}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">แนวโน้มรายเดือน</CardTitle>
                <CardDescription className="text-gray-600">การเปลี่ยนแปลงของข้อมูลสำคัญ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Multi-line Chart - แนวโน้มรายเดือน</p>
                  </div>
                </div>

                {/* Monthly Data Table */}
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-4 p-3 bg-gray-100 rounded-lg font-medium text-gray-700">
                    <div>เดือน</div>
                    <div>จำนวนนักเรียน</div>
                    <div>การเข้าเรียน (%)</div>
                    <div>เกรดเฉลี่ย</div>
                  </div>
                  {monthlyData.map((data, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className="font-medium text-gray-900">{data.month}</div>
                      <div className="text-gray-700">{data.students.toLocaleString()}</div>
                      <div className="text-gray-700">{data.attendance}%</div>
                      <div className="text-gray-700">{data.grades}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">นักเรียนที่มีผลการเรียนดีเด่น</CardTitle>
                <CardDescription className="text-gray-600">Top 5 นักเรียนที่มีเกรดเฉลี่ยสูงสุด</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold">#{student.rank}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{student.name}</h3>
                          <p className="text-sm text-gray-600">{student.class}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">{student.gpa}</p>
                        <p className="text-sm text-gray-500">GPA</p>
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
