"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, FileSpreadsheet } from "lucide-react"

export default function AttendanceReportPage() {
  const [selectedDate, setSelectedDate] = useState("01 มิถุนายน 2568")

  const attendanceData = [
    {
      level: "ปวช.",
      present: 0,
      presentPercent: "0.00",
      late: 0,
      latePercent: "0.00",
      leave: 0,
      leavePercent: "0.00",
      absent: 0,
      absentPercent: "0.00",
      break: 0,
      breakPercent: "0.00",
      total: 0,
    },
    {
      level: "ปวส.",
      present: 0,
      presentPercent: "0.00",
      late: 0,
      latePercent: "0.00",
      leave: 0,
      leavePercent: "0.00",
      absent: 0,
      absentPercent: "0.00",
      break: 0,
      breakPercent: "0.00",
      total: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">รายงานสถิติการมาเรียนของนักเรียน ทั้งหมด 1837 คน</h1>
              <p className="text-muted-foreground">ประจำวันที่ {selectedDate}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                ดาวน์โหลด
              </Button>
              <div className="flex items-center gap-2 bg-muted p-2 rounded-lg">
                <span className="text-sm text-muted-foreground">เลือกวันที่</span>
                <Button variant="outline" className="bg-background">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {selectedDate}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Report Table */}
        <Card className="bg-card border shadow-sm">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-medium">ห้องเรียน</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">มาเรียน</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">มาเรียน(%)</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">มาสาย</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">มาสาย(%)</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">ลา</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">ลา(%)</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">ขาดเรียน</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">ขาดเรียน(%)</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">พักงาน</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">พักงาน(%)</th>
                    <th className="text-center p-4 text-muted-foreground font-medium">รวมทั้งหมด</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 text-foreground font-medium">{row.level}</td>
                      <td className="p-4 text-center text-foreground">{row.present}</td>
                      <td className="p-4 text-center text-foreground">{row.presentPercent}</td>
                      <td className="p-4 text-center text-foreground">{row.late}</td>
                      <td className="p-4 text-center text-foreground">{row.latePercent}</td>
                      <td className="p-4 text-center text-foreground">{row.leave}</td>
                      <td className="p-4 text-center text-foreground">{row.leavePercent}</td>
                      <td className="p-4 text-center text-foreground">{row.absent}</td>
                      <td className="p-4 text-center text-foreground">{row.absentPercent}</td>
                      <td className="p-4 text-center text-foreground">{row.break}</td>
                      <td className="p-4 text-center text-foreground">{row.breakPercent}</td>
                      <td className="p-4 text-center text-foreground">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
