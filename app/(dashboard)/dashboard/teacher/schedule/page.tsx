"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"

export default function TeacherSchedulePage() {
  const [currentWeek, setCurrentWeek] = useState(0)

  const scheduleData = [
    {
      day: "จันทร์",
      date: "4 มี.ค. 2567",
      classes: [
        {
          time: "08:00-09:30",
          subject: "คณิตศาสตร์พื้นฐาน",
          class: "ปวช.2/1",
          room: "ห้อง 201",
          students: 35,
          type: "lecture",
        },
        {
          time: "10:00-11:30",
          subject: "สถิติและความน่าจะเป็น",
          class: "ปวช.3/2",
          room: "ห้อง 305",
          students: 28,
          type: "lecture",
        },
        {
          time: "13:00-14:30",
          subject: "แคลคูลัส",
          class: "ปวส.1/1",
          room: "ห้อง 401",
          students: 22,
          type: "lab",
        },
      ],
    },
    {
      day: "อังคาร",
      date: "5 มี.ค. 2567",
      classes: [
        {
          time: "09:00-10:30",
          subject: "คณิตศาสตร์พื้นฐาน",
          class: "ปวช.2/2",
          room: "ห้อง 202",
          students: 32,
          type: "lecture",
        },
        {
          time: "14:00-15:30",
          subject: "สถิติและความน่าจะเป็น",
          class: "ปวช.3/1",
          room: "ห้อง 304",
          students: 30,
          type: "lecture",
        },
      ],
    },
    {
      day: "พุธ",
      date: "6 มี.ค. 2567",
      classes: [
        {
          time: "08:00-09:30",
          subject: "แคลคูลัส",
          class: "ปวส.1/2",
          room: "ห้อง 402",
          students: 25,
          type: "lab",
        },
        {
          time: "10:00-11:30",
          subject: "คณิตศาสตร์พื้นฐาน",
          class: "ปวช.2/3",
          room: "ห้อง 203",
          students: 33,
          type: "lecture",
        },
      ],
    },
    {
      day: "พฤหัสบดี",
      date: "7 มี.ค. 2567",
      classes: [
        {
          time: "09:00-10:30",
          subject: "สถิติและความน่าจะเป็น",
          class: "ปวช.3/3",
          room: "ห้อง 306",
          students: 27,
          type: "lecture",
        },
        {
          time: "13:00-14:30",
          subject: "คณิตศาสตร์พื้นฐาน",
          class: "ปวช.2/1",
          room: "ห้อง 201",
          students: 35,
          type: "review",
        },
      ],
    },
    {
      day: "ศุกร์",
      date: "8 มี.ค. 2567",
      classes: [
        {
          time: "08:00-09:30",
          subject: "แคลคูลัส",
          class: "ปวส.1/1",
          room: "ห้อง 401",
          students: 22,
          type: "exam",
        },
      ],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "lecture":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "lab":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "exam":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "lecture":
        return "บรรยาย"
      case "lab":
        return "ปฏิบัติ"
      case "exam":
        return "สอบ"
      case "review":
        return "ทบทวน"
      default:
        return type
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">ตารางสอน</h1>
          <p className="text-muted-foreground">ตารางสอนและกิจกรรมการเรียนการสอน</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium px-4">สัปดาห์ที่ 1-7 มีนาคม 2567</span>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="week" className="space-y-4">
        <TabsList>
          <TabsTrigger value="week">รายสัปดาห์</TabsTrigger>
          <TabsTrigger value="month">รายเดือน</TabsTrigger>
          <TabsTrigger value="summary">สรุป</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="space-y-4">
          <div className="grid gap-4">
            {scheduleData.map((day, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{day.day}</CardTitle>
                      <CardDescription>{day.date}</CardDescription>
                    </div>
                    <Badge variant="outline">{day.classes.length} คาบเรียน</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {day.classes.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">ไม่มีคาบเรียน</p>
                  ) : (
                    <div className="space-y-3">
                      {day.classes.map((classItem, classIndex) => (
                        <div
                          key={classIndex}
                          className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {classItem.time}
                            </div>
                            <div>
                              <h4 className="font-medium">{classItem.subject}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {classItem.class}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {classItem.room}
                                </span>
                                <span>{classItem.students} คน</span>
                              </div>
                            </div>
                          </div>
                          <Badge className={getTypeColor(classItem.type)}>{getTypeLabel(classItem.type)}</Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="month">
          <Card>
            <CardHeader>
              <CardTitle>ปฏิทินรายเดือน</CardTitle>
              <CardDescription>ดูตารางสอนในรูปแบบปฏิทิน</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">กำลังพัฒนาระบบปฏิทิน...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>สรุปภาระงานสอน</CardTitle>
                <CardDescription>สถิติการสอนในสัปดาห์นี้</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">จำนวนคาบเรียน</span>
                  <span className="font-medium">12 คาบ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">จำนวนชั้นเรียน</span>
                  <span className="font-medium">6 ชั้น</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">จำนวนนักเรียน</span>
                  <span className="font-medium">192 คน</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">ชั่วโมงสอน</span>
                  <span className="font-medium">18 ชั่วโมง</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>วิชาที่สอน</CardTitle>
                <CardDescription>รายวิชาที่รับผิดชอบ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">คณิตศาสตร์พื้นฐาน</span>
                  <Badge variant="secondary">4 ชั้น</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">สถิติและความน่าจะเป็น</span>
                  <Badge variant="secondary">3 ชั้น</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">แคลคูลัส</span>
                  <Badge variant="secondary">2 ชั้น</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
