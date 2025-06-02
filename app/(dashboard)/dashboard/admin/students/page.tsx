"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function StudentsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // ข้อมูลนักเรียนตัวอย่าง
  const students = [
    { id: "68201020001", name: "นายกิตติพงษ์ บุตรศักดิ์", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020002", name: "นายชุมแพน โพธิ์ทอง", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020003", name: "นายชัดเจน ดุมาร", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020004", name: "นางสาวจุฑาทิพย์ สีธวน", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020005", name: "นายชวลิต ดุมลิด", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020006", name: "นายธนกฤต สีอ่อน", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020007", name: "นายธนพัฒน์ มาดี", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020008", name: "นายปภาวิน วิกาทัน", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020009", name: "นายปิยะนัฐ ตีวาตะ", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020010", name: "นายอนุชาติ ครุฑมาศ", classroom: "ปวช.1/1-ช่างกลโรงงาน" },
    { id: "68201020011", name: "นายกิตติพงษ์ สุขสมบูรณ์", classroom: "ปวช.1/2-ช่างไฟฟ้า" },
    { id: "68201020012", name: "นายชุมแพน ไพรวัลย์", classroom: "ปวช.1/2-ช่างไฟฟ้า" },
  ]

  // กรองข้อมูลนักเรียนตามการค้นหาและชั้นเรียน
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.id.includes(searchTerm)
    const matchesClass = selectedClass ? student.classroom === selectedClass : true
    return matchesSearch && matchesClass
  })

  // คำนวณข้อมูลสำหรับการแบ่งหน้า
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage)

  // ฟังก์ชันสำหรับการลบนักเรียน
  const handleDeleteStudent = (id: string, name: string) => {
    // ในสถานการณ์จริงควรมีการยืนยันก่อนลบ
    toast({
      title: "ลบนักเรียนสำเร็จ",
      description: `ลบข้อมูลนักเรียน ${name} เรียบร้อยแล้ว`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">รายชื่อนักเรียนทั้งหมด</h1>
              <p className="text-gray-600 dark:text-gray-400">จัดการข้อมูลนักเรียนในระบบ</p>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={() => router.push("/dashboard/admin/students/add")}
            >
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มนักเรียน
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="dark:text-white">รายชื่อนักเรียนทั้งหมด {filteredStudents.length} คน</CardTitle>
                <CardDescription className="dark:text-gray-400">จัดการและดูข้อมูลนักเรียนทั้งหมด</CardDescription>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative w-full md:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="รหัสนักเรียน"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full md:w-64 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-full md:w-64 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="ชื่อ-สกุล นักเรียน" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="all">ทุกชั้นเรียน</SelectItem>
                    <SelectItem value="ปวช.1/1-ช่างกลโรงงาน">ปวช.1/1-ช่างกลโรงงาน</SelectItem>
                    <SelectItem value="ปวช.1/2-ช่างไฟฟ้า">ปวช.1/2-ช่างไฟฟ้า</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">รหัสนักเรียน</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">ชื่อ-สกุล</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">ชั้นเรียน</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-500 dark:text-gray-400">แก้ไข</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-500 dark:text-gray-400">ลบข้อมูล</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-500 dark:text-gray-400">ดูรายละเอียด</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="py-3 px-4 dark:text-gray-300">{student.id}</td>
                      <td className="py-3 px-4 dark:text-gray-300">{student.name}</td>
                      <td className="py-3 px-4 dark:text-gray-300">{student.classroom}</td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center">
                          <Button size="sm" variant="ghost" className="bg-amber-500 hover:bg-amber-600 text-white">
                            <Pencil className="h-4 w-4" />
                            <span className="ml-2">แก้ไข</span>
                          </Button>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="bg-red-500 hover:bg-red-600 text-white"
                            onClick={() => handleDeleteStudent(student.id, student.name)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="ml-2">ลบ</span>
                          </Button>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300"
                          >
                            <Eye className="h-4 w-4" />
                            <span className="ml-2">ดู</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                แสดง {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredStudents.length)} จาก{" "}
                {filteredStudents.length} รายการ
              </div>
              <div className="flex items-center space-x-2">
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) => {
                    setItemsPerPage(Number(value))
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="w-20 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder={itemsPerPage.toString()} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
