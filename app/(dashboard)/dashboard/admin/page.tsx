import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, TrendingUp, UserCheck, Calendar, Activity, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const stats = [
    {
      title: "ผู้ใช้ทั้งหมด",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "up",
    },
    {
      title: "นักเรียนที่ลงทะเบียน",
      value: "856",
      change: "+8%",
      icon: GraduationCap,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      trend: "up",
    },
    {
      title: "หลักสูตรที่เปิดสอน",
      value: "42",
      change: "+3%",
      icon: BookOpen,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "up",
    },
    {
      title: "อัตราการเข้าเรียน",
      value: "94.2%",
      change: "+2.1%",
      icon: UserCheck,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      trend: "up",
    },
  ]

  const recentActivities = [
    {
      action: "นักเรียนใหม่ลงทะเบียน",
      user: "สมชาย ใจดี",
      time: "5 นาทีที่แล้ว",
      type: "user",
      color: "bg-blue-100 text-blue-800",
    },
    {
      action: "ครูอัพเดทเกรด",
      user: "อาจารย์สมหญิง",
      time: "15 นาทีที่แล้ว",
      type: "grade",
      color: "bg-green-100 text-green-800",
    },
    {
      action: "ผู้ปกครองดูผลการเรียน",
      user: "คุณสมศรี",
      time: "30 นาทีที่แล้ว",
      type: "view",
      color: "bg-purple-100 text-purple-800",
    },
    {
      action: "เพิ่มหลักสูตรใหม่",
      user: "ผู้ดูแลระบบ",
      time: "1 ชั่วโมงที่แล้ว",
      type: "course",
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const quickActions = [
    {
      title: "จัดการผู้ใช้",
      description: "เพิ่ม/แก้ไข/ลบ",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      title: "จัดการหลักสูตร",
      description: "หลักสูตรและวิชา",
      icon: BookOpen,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:bg-emerald-100",
    },
    {
      title: "รายงาน",
      description: "สถิติและรายงาน",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
    },
    {
      title: "ตารางเรียน",
      description: "จัดการตารางเรียน",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
    },
  ]

  const systemStatus = [
    {
      name: "เซิร์ฟเวอร์",
      status: "ทำงานปกติ",
      color: "bg-green-500",
      textColor: "text-green-700",
    },
    {
      name: "ฐานข้อมูล",
      status: "เชื่อมต่อปกติ",
      color: "bg-green-500",
      textColor: "text-green-700",
    },
    {
      name: "การสำรองข้อมูล",
      status: "กำลังดำเนินการ",
      color: "bg-yellow-500",
      textColor: "text-yellow-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">แดชบอร์ดผู้ดูแลระบบ</h1>
          <p className="text-gray-600">ภาพรวมของระบบจัดการโรงเรียน MSL School</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
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
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-gray-500 ml-2">จากเดือนที่แล้ว</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-gray-900">กิจกรรมล่าสุด</CardTitle>
              </div>
              <CardDescription className="text-gray-600">กิจกรรมที่เกิดขึ้นในระบบล่าสุด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">โดย {activity.user}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <Badge className={`text-xs ${activity.color} border-0`}>{activity.type}</Badge>
                      <span className="text-xs text-gray-500 mt-1">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-gray-900">การดำเนินการด่วน</CardTitle>
              </div>
              <CardDescription className="text-gray-600">ฟังก์ชันที่ใช้บ่อยสำหรับผู้ดูแลระบบ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Card
                    key={index}
                    className={`p-4 ${action.bgColor} ${action.hoverColor} cursor-pointer transition-all duration-200 border-0 hover:shadow-md`}
                  >
                    <div className="flex items-center space-x-3">
                      <action.icon className={`h-6 w-6 ${action.color}`} />
                      <div>
                        <p className={`font-medium ${action.color}`}>{action.title}</p>
                        <p className="text-xs text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-green-600" />
              <CardTitle className="text-gray-900">สถานะระบบ</CardTitle>
            </div>
            <CardDescription className="text-gray-600">ข้อมูลสถานะการทำงานของระบบ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systemStatus.map((status, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
                  <div className={`w-3 h-3 ${status.color} rounded-full flex-shrink-0`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{status.name}</p>
                    <p className={`text-sm ${status.textColor}`}>{status.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-white/90 text-sm">ผู้ใช้ออนไลน์</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">127</div>
              <p className="text-blue-100 text-sm">ขณะนี้</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-white/90 text-sm">ประสิทธิภาพระบบ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">98.5%</div>
              <p className="text-emerald-100 text-sm">uptime</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-white/90 text-sm">การใช้งานเฉลี่ย</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">2.4h</div>
              <p className="text-purple-100 text-sm">ต่อวัน</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
