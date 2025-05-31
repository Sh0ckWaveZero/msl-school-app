"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Save, Database, Mail, Shield, Bell, Globe, Palette, Check } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  const menuItems = [
    { id: "general", label: "ทั่วไป", icon: Globe, color: "text-blue-600", bgColor: "bg-blue-50" },
    { id: "security", label: "ความปลอดภัย", icon: Shield, color: "text-red-600", bgColor: "bg-red-50" },
    { id: "email", label: "อีเมล", icon: Mail, color: "text-green-600", bgColor: "bg-green-50" },
    { id: "notifications", label: "การแจ้งเตือน", icon: Bell, color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { id: "database", label: "ฐานข้อมูล", icon: Database, color: "text-purple-600", bgColor: "bg-purple-50" },
    { id: "theme", label: "ธีม", icon: Palette, color: "text-pink-600", bgColor: "bg-pink-50" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">การตั้งค่าระบบ</h1>
              <p className="text-gray-600">จัดการการตั้งค่าและการกำหนดค่าระบบ</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
              <Save className="h-4 w-4 mr-2" />
              บันทึกการตั้งค่า
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Menu */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-gray-900">หมวดหมู่การตั้งค่า</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className={`w-full justify-start h-12 transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* General Settings */}
            {activeTab === "general" && (
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                  <CardTitle className="text-gray-900 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-600" />
                    การตั้งค่าทั่วไป
                  </CardTitle>
                  <CardDescription className="text-gray-700">การตั้งค่าพื้นฐานของระบบ</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="school-name" className="text-gray-900 font-medium">
                        ชื่อโรงเรียน
                      </Label>
                      <Input
                        id="school-name"
                        defaultValue="MSL School"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school-code" className="text-gray-900 font-medium">
                        รหัสโรงเรียน
                      </Label>
                      <Input
                        id="school-code"
                        defaultValue="MSL001"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="school-address" className="text-gray-900 font-medium">
                      ที่อยู่โรงเรียน
                    </Label>
                    <Input
                      id="school-address"
                      defaultValue="123 ถนนการศึกษา กรุงเทพฯ 10110"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-900 font-medium">
                        เบอร์โทรศัพท์
                      </Label>
                      <Input
                        id="phone"
                        defaultValue="02-123-4567"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 font-medium">
                        อีเมล
                      </Label>
                      <Input
                        id="email"
                        defaultValue="info@msl-school.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900">การตั้งค่าระบบ</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-1">
                          <Label className="text-gray-900 font-medium">เปิดใช้งานการลงทะเบียนออนไลน์</Label>
                          <p className="text-sm text-gray-600">อนุญาตให้นักเรียนลงทะเบียนผ่านระบบออนไลน์</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-1">
                          <Label className="text-gray-900 font-medium">เปิดใช้งานการแจ้งเตือนอัตโนมัติ</Label>
                          <p className="text-sm text-gray-600">ส่งการแจ้งเตือนอัตโนมัติไปยังผู้ใช้</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                        <div className="space-y-1">
                          <Label className="text-gray-900 font-medium">โหมดบำรุงรักษา</Label>
                          <p className="text-sm text-red-600">ปิดระบบชั่วคราวเพื่อบำรุงรักษา</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 rounded-t-lg">
                  <CardTitle className="text-gray-900 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-red-600" />
                    การตั้งค่าความปลอดภัย
                  </CardTitle>
                  <CardDescription className="text-gray-700">การตั้งค่าเกี่ยวกับความปลอดภัยของระบบ</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="session-timeout" className="text-gray-900 font-medium">
                        หมดเวลาเซสชัน (นาที)
                      </Label>
                      <Input
                        id="session-timeout"
                        type="number"
                        defaultValue="30"
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-login-attempts" className="text-gray-900 font-medium">
                        จำนวนครั้งการเข้าสู่ระบบสูงสุด
                      </Label>
                      <Input
                        id="max-login-attempts"
                        type="number"
                        defaultValue="5"
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="space-y-1">
                        <Label className="text-gray-900 font-medium">บังคับใช้รหัสผ่านที่แข็งแกร่ง</Label>
                        <p className="text-sm text-gray-600">รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="space-y-1">
                        <Label className="text-gray-900 font-medium">เปิดใช้งาน Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-600">เพิ่มความปลอดภัยด้วยการยืนยันตัวตน 2 ขั้นตอน</p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div className="space-y-1">
                        <Label className="text-gray-900 font-medium">บันทึกกิจกรรมการเข้าสู่ระบบ</Label>
                        <p className="text-sm text-gray-600">เก็บบันทึกการเข้าสู่ระบบทั้งหมด</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Database Settings */}
            {activeTab === "database" && (
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-t-lg">
                  <CardTitle className="text-gray-900 flex items-center">
                    <Database className="h-5 w-5 mr-2 text-purple-600" />
                    การสำรองข้อมูล
                  </CardTitle>
                  <CardDescription className="text-gray-700">การตั้งค่าการสำรองข้อมูลอัตโนมัติ</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="space-y-1">
                      <Label className="text-gray-900 font-medium">เปิดใช้งานการสำรองข้อมูลอัตโนมัติ</Label>
                      <p className="text-sm text-gray-600">สำรองข้อมูลอัตโนมัติทุกวัน</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="backup-time" className="text-gray-900 font-medium">
                        เวลาสำรองข้อมูล
                      </Label>
                      <Input
                        id="backup-time"
                        type="time"
                        defaultValue="02:00"
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="backup-retention" className="text-gray-900 font-medium">
                        เก็บข้อมูลสำรอง (วัน)
                      </Label>
                      <Input
                        id="backup-retention"
                        type="number"
                        defaultValue="30"
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Database className="h-4 w-4 mr-2" />
                      สำรองข้อมูลทันที
                    </Button>
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                      <Database className="h-4 w-4 mr-2" />
                      กู้คืนข้อมูล
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">สถานะการสำรองข้อมูลล่าสุด</h5>
                    <div className="flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-2" />
                      <span className="text-sm">สำรองข้อมูลเสร็จสิ้น - 15 มกราคม 2024 เวลา 02:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
