"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Download, TrendingUp, Users, BookOpen, Calendar, FileText } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "รายงานผู้ใช้ประจำเดือน",
      description: "สถิติการใช้งานของผู้ใช้ทั้งหมดในระบบ",
      type: "user",
      lastGenerated: "2024-01-15",
      status: "ready",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "รายงานหลักสูตรและการลงทะเบียน",
      description: "ข้อมูลการลงทะเบียนเรียนและความนิยมของหลักสูตร",
      type: "course",
      lastGenerated: "2024-01-14",
      status: "ready",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      title: "รายงานการเข้าเรียน",
      description: "สถิติการเข้าเรียนของนักเรียนแยกตามหลักสูตร",
      type: "attendance",
      lastGenerated: "2024-01-13",
      status: "generating",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      title: "รายงานผลการเรียน",
      description: "สรุปผลการเรียนและเกรดเฉลี่ยของนักเรียน",
      type: "grade",
      lastGenerated: "2024-01-12",
      status: "ready",
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const stats = [
    {
      title: "รายงานทั้งหมด",
      value: "24",
      change: "+3",
      icon: BarChart3,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "รายงานที่พร้อมใช้",
      value: "18",
      change: "+2",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "รายงานที่กำลังสร้าง",
      value: "3",
      change: "+1",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "ดาวน์โหลดเดือนนี้",
      value: "156",
      change: "+24",
      icon: Download,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready":
        return "bg-green-100 text-green-800"
      case "generating":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "ready":
        return "พร้อมใช้"
      case "generating":
        return "กำลังสร้าง"
      case "error":
        return "ข้อผิดพลาด"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">รายงานและสถิติ</h1>
              <p className="text-gray-600">ดูและสร้างรายงานต่างๆ ของระบบ</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <BarChart3 className="h-4 w-4 mr-2" />
              สร้างรายงานใหม่
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">รายงานด่วน</CardTitle>
              <CardDescription className="text-blue-100">สร้างรายงานพื้นฐานได้ทันที</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  รายงานผู้ใช้วันนี้
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  รายงานการเข้าเรียนวันนี้
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">รายงานยอดนิยม</CardTitle>
              <CardDescription className="text-green-100">รายงานที่ดาวน์โหลดบ่อยที่สุด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  รายงานผลการเรียน
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  รายงานหลักสูตร
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">รายงานกำหนดเอง</CardTitle>
              <CardDescription className="text-purple-100">สร้างรายงานตามความต้องการ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  สร้างรายงานใหม่
                </Button>
                <Button variant="secondary" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  เทมเพลตรายงาน
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>รายการรายงาน</CardTitle>
            <CardDescription>รายงานทั้งหมดในระบบ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 ${report.bgColor} rounded-lg`}>
                      <report.icon className={`h-6 w-6 ${report.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{report.title}</h3>
                      <p className="text-sm text-gray-600">{report.description}</p>
                      <p className="text-xs text-gray-500">สร้างล่าสุด: {report.lastGenerated}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Badge className={`${getStatusColor(report.status)} border-0`}>
                      {getStatusText(report.status)}
                    </Badge>
                    <div className="flex space-x-2">
                      {report.status === "ready" && (
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          ดาวน์โหลด
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        ดู
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
