"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, Clock, MapPin, Users } from "lucide-react"

export default function SchedulesPage() {
  const schedules = [
    {
      id: 1,
      course: "คณิตศาสตร์พื้นฐาน",
      instructor: "อาจารย์สมหญิง",
      room: "ห้อง A101",
      time: "09:00-12:00",
      day: "จันทร์",
      students: 45,
      color: "bg-blue-500",
    },
    {
      id: 2,
      course: "ภาษาอังกฤษเพื่อการสื่อสาร",
      instructor: "อาจารย์จอห์น",
      room: "ห้อง B205",
      time: "13:00-15:00",
      day: "อังคาร",
      students: 38,
      color: "bg-green-500",
    },
    {
      id: 3,
      course: "การเขียนโปรแกรมคอมพิวเตอร์",
      instructor: "อาจารย์สมชาย",
      room: "ห้องคอมพิวเตอร์ 1",
      time: "09:00-16:00",
      day: "พุธ",
      students: 52,
      color: "bg-purple-500",
    },
    {
      id: 4,
      course: "การบัญชีเบื้องต้น",
      instructor: "อาจารย์สุดา",
      room: "ห้อง C301",
      time: "10:00-13:00",
      day: "พฤหัสบดี",
      students: 41,
      color: "bg-orange-500",
    },
    {
      id: 5,
      course: "ฟิสิกส์ประยุกต์",
      instructor: "อาจารย์วิชัย",
      room: "ห้องปฏิบัติการฟิสิกส์",
      time: "14:00-17:00",
      day: "ศุกร์",
      students: 35,
      color: "bg-red-500",
    },
  ]

  const days = ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์"]
  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">ตารางเรียน</h1>
              <p className="text-gray-600">จัดการตารางเรียนและตารางสอน</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มตารางใหม่
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">ตารางเรียนทั้งหมด</p>
                  <p className="text-2xl font-bold text-gray-900">42</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">ชั่วโมงสอนต่อสัปดาห์</p>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">ห้องเรียนที่ใช้</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">อาจารย์ที่สอน</p>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Grid */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>ตารางเรียนประจำสัปดาห์</CardTitle>
            <CardDescription>ภาพรวมตารางเรียนทั้งสัปดาห์</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-6 gap-2 min-w-[800px]">
                {/* Header */}
                <div className="p-3 bg-gray-100 rounded-lg font-semibold text-center">เวลา</div>
                {days.map((day) => (
                  <div key={day} className="p-3 bg-gray-100 rounded-lg font-semibold text-center">
                    {day}
                  </div>
                ))}

                {/* Time slots */}
                {timeSlots.map((time) => (
                  <>
                    <div key={time} className="p-3 bg-gray-50 rounded-lg text-center text-sm font-medium">
                      {time}
                    </div>
                    {days.map((day) => {
                      const schedule = schedules.find((s) => s.day === day && s.time.includes(time.split(":")[0]))
                      return (
                        <div key={`${day}-${time}`} className="p-2 border border-gray-200 rounded-lg min-h-[80px]">
                          {schedule && (
                            <div className={`${schedule.color} text-white p-2 rounded text-xs`}>
                              <div className="font-semibold">{schedule.course}</div>
                              <div className="text-xs opacity-90">{schedule.instructor}</div>
                              <div className="text-xs opacity-90">{schedule.room}</div>
                              <div className="text-xs opacity-90">{schedule.students} คน</div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule List */}
        <Card className="bg-white border-0 shadow-sm">
          <CardHeader>
            <CardTitle>รายการตารางเรียน</CardTitle>
            <CardDescription>รายละเอียดตารางเรียนทั้งหมด</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedules.map((schedule) => (
                <div
                  key={schedule.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 ${schedule.color} rounded-full`}></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{schedule.course}</h3>
                      <p className="text-sm text-gray-600">{schedule.instructor}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{schedule.day}</p>
                      <p className="text-xs text-gray-500">{schedule.time}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-900">{schedule.room}</p>
                      <p className="text-xs text-gray-500">{schedule.students} นักเรียน</p>
                    </div>
                    <Badge variant="secondary">{schedule.students} คน</Badge>
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
