"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Eye, Pencil, Trash2, ChevronLeft, ChevronRight, Loader2, WifiOff } from "lucide-react"
import { useStudentsStore } from "@/lib/stores/students-store"
import { useUIStore } from "@/lib/stores/ui-store"
import { useStudents, useDeleteStudent, useStudentsOffline } from "@/lib/hooks/use-students-api"
import { Badge } from "@/components/ui/badge"

export default function StudentsPage() {
  const router = useRouter()
  const {
    searchTerm,
    selectedClass,
    currentPage,
    itemsPerPage,
    setSearchTerm,
    setSelectedClass,
    setCurrentPage,
    setItemsPerPage,
  } = useStudentsStore()

  const { isMobile } = useUIStore()

  // Use offline-capable hook for mobile
  const studentsHook = isMobile ? useStudentsOffline() : useStudents()
  const { students = [], isLoading, error, isOffline } = studentsHook

  const deleteStudentMutation = useDeleteStudent()

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = students.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(students.length / itemsPerPage)

  const handleDeleteStudent = async (id: string, name: string) => {
    if (window.confirm(`คุณต้องการลบนักเรียน ${name} หรือไม่?`)) {
      deleteStudentMutation.mutate(id)
    }
  }

  // Mobile responsive classes
  const containerClass = isMobile
    ? "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 px-4 py-4"
    : "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-6"

  const cardClass = isMobile
    ? "border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-0"
    : "border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700"

  if (error && !isOffline) {
    return (
      <div className={containerClass}>
        <Card className={cardClass}>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-red-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">เกิดข้อผิดพลาด</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">ไม่สามารถโหลดข้อมูลนักเรียนได้</p>
            <Button onClick={() => window.location.reload()} className="mt-4" variant="outline">
              ลองใหม่อีกครั้ง
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={containerClass}>
      <div className="space-y-4 md:space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">รายชื่อนักเรียนทั้งหมด</h1>
                {isOffline && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <WifiOff className="h-3 w-3" />
                    ออฟไลน์
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">จัดการข้อมูลนักเรียนในระบบ</p>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 w-full md:w-auto"
              onClick={() => router.push("/dashboard/admin/students/add")}
            >
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มนักเรียน
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className={cardClass}>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div>
                <CardTitle className="dark:text-white flex items-center gap-2">
                  รายชื่อนักเรียนทั้งหมด {students.length} คน
                  {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                </CardTitle>
                <CardDescription className="dark:text-gray-400">จัดการและดูข้อมูลนักเรียนทั้งหมด</CardDescription>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="ค้นหารหัสนักเรียนหรือชื่อ-สกุล"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-full md:w-64 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <SelectValue placeholder="เลือกชั้นเรียน" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectItem value="all">ทุกชั้นเรียน</SelectItem>
                    <SelectItem value="ปวช.1/1-ช่างกลโรงงาน">ปวช.1/1-ช่างกลโรงงาน</SelectItem>
                    <SelectItem value="ปวช.1/2-ช่างไฟฟ้า">ปวช.1/2-ช่างไฟฟ้า</SelectItem>
                    <SelectItem value="ปวช.2/1-ช่างกลโรงงาน">ปวช.2/1-ช่างกลโรงงาน</SelectItem>
                    <SelectItem value="ปวช.2/2-ช่างไฟฟ้า">ปวช.2/2-ช่างไฟฟ้า</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {/* Mobile: Card Layout */}
            {isMobile ? (
              <div className="space-y-4">
                {isLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                  </div>
                ) : currentItems.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">ไม่พบข้อมูลนักเรียน</p>
                  </div>
                ) : (
                  currentItems.map((student) => (
                    <Card key={student.id} className="border border-gray-200 dark:border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {student.firstName} {student.lastName}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">รหัส: {student.studentId}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{student.classroom}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {student.status === "active" ? "กำลังศึกษา" : "ไม่ได้ศึกษา"}
                          </Badge>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="h-3 w-3 mr-1" />
                            ดู
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Pencil className="h-3 w-3 mr-1" />
                            แก้ไข
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-red-600 hover:text-red-700"
                            onClick={() => handleDeleteStudent(student.id, `${student.firstName} ${student.lastName}`)}
                            disabled={deleteStudentMutation.isPending}
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            ลบ
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            ) : (
              /* Desktop: Table Layout */
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">รหัสนักเรียน</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">ชื่อ-สกุล</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">ชั้นเรียน</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">สถานะ</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-500 dark:text-gray-400">การจัดการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <tr>
                        <td colSpan={5} className="text-center py-8">
                          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto" />
                        </td>
                      </tr>
                    ) : currentItems.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-gray-500 dark:text-gray-400">
                          ไม่พบข้อมูลนักเรียน
                        </td>
                      </tr>
                    ) : (
                      currentItems.map((student) => (
                        <tr
                          key={student.id}
                          className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <td className="py-3 px-4 dark:text-gray-300">{student.studentId}</td>
                          <td className="py-3 px-4 dark:text-gray-300">
                            {student.firstName} {student.lastName}
                          </td>
                          <td className="py-3 px-4 dark:text-gray-300">{student.classroom}</td>
                          <td className="py-3 px-4">
                            <Badge variant={student.status === "active" ? "default" : "secondary"}>
                              {student.status === "active" ? "กำลังศึกษา" : "ไม่ได้ศึกษา"}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex justify-center gap-2">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="bg-amber-500 hover:bg-amber-600 text-white">
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="bg-red-500 hover:bg-red-600 text-white"
                                onClick={() =>
                                  handleDeleteStudent(student.id, `${student.firstName} ${student.lastName}`)
                                }
                                disabled={deleteStudentMutation.isPending}
                              >
                                {deleteStudentMutation.isPending ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {students.length > 0 && (
              <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  แสดง {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, students.length)} จาก {students.length} รายการ
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                    <SelectTrigger className="w-20 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue />
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
                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-600 dark:text-gray-400 px-2">
                    {currentPage} / {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
