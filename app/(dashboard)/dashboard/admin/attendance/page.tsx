"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus } from "lucide-react"

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState("1 กุมภาพันธ์ 2568")
  const [selectedClass, setSelectedClass] = useState("")

  const attendanceColumns = [
    { id: "name", label: "ชื่อ-สกุล", checked: false },
    { id: "present", label: "มาเรียน", checked: false },
    { id: "late", label: "มาสาย", checked: false },
    { id: "leave", label: "ลา", checked: false },
    { id: "absent", label: "ขาดเรียน", checked: false },
    { id: "break", label: "พักงาน", checked: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">เช็คชื่อนักเรียน ทั้งหมดการมาเรียน</h1>
              <p className="text-muted-foreground">วันที่ {selectedDate}</p>
            </div>
            <div className="flex items-center gap-2">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-48 bg-background">
                  <SelectValue placeholder="ห้องเรียน" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="class1">ปวช.1/1-ช่างกลโรงงาน</SelectItem>
                  <SelectItem value="class2">ปวช.1/2-ช่างกลโรงงาน</SelectItem>
                  <SelectItem value="class3">ปวช.1/3-ช่างกลโรงงาน</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <UserPlus className="h-4 w-4 mr-2" />
                บันทึกการเข้าเรียน
              </Button>
            </div>
          </div>
        </div>

        {/* Attendance Check */}
        <Card className="bg-card border shadow-sm">
          <CardContent className="p-6">
            {/* Column Headers */}
            <div className="grid grid-cols-6 gap-4 p-4 bg-muted rounded-lg mb-4">
              {attendanceColumns.map((column) => (
                <div key={column.id} className="flex items-center space-x-2">
                  <Checkbox id={column.id} />
                  <label htmlFor={column.id} className="text-sm font-medium text-muted-foreground cursor-pointer">
                    {column.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <UserPlus className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">ไม่พบข้อมูล</h3>
              <p className="text-muted-foreground mb-4">กรุณาเลือกห้องเรียนเพื่อแสดงรายชื่อนักเรียน</p>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-muted-foreground">จำนวนแถวต่อหน้า: 100 | 0-0 จาก 0</div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  ก่อนหน้า
                </Button>
                <Button variant="outline" size="sm" disabled>
                  ถัดไป
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
