"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Save } from "lucide-react"
import { Label } from "@/components/ui/label"

const studentSchema = z.object({
  studentId: z.string().min(5, "รหัสนักเรียนต้องมีอย่างน้อย 5 ตัวอักษร"),
  firstName: z.string().min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร"),
  lastName: z.string().min(2, "นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร"),
  classroom: z.string().min(1, "กรุณาเลือกชั้นเรียน"),
})

type StudentFormValues = z.infer<typeof studentSchema>

export default function AddStudentPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StudentFormValues>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      studentId: "",
      firstName: "",
      lastName: "",
      classroom: "",
    },
  })

  const onSubmit = async (data: StudentFormValues) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Student data:", data)

      toast({
        title: "เพิ่มนักเรียนสำเร็จ",
        description: `เพิ่มนักเรียน ${data.firstName} ${data.lastName} เรียบร้อยแล้ว`,
      })

      router.push("/dashboard/admin/students")
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถเพิ่มนักเรียนได้ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedClassroom = watch("classroom")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.back()}
              className="dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">เพิ่มนักเรียนใหม่</h1>
              <p className="text-gray-600 dark:text-gray-400">กรอกข้อมูลนักเรียนเพื่อเพิ่มเข้าสู่ระบบ</p>
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl dark:text-white">ข้อมูลนักเรียน</CardTitle>
            <CardDescription className="dark:text-gray-400">กรอกข้อมูลให้ครบถ้วนเพื่อเพิ่มนักเรียนใหม่</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="studentId" className="dark:text-white">
                    รหัสนักเรียน
                  </Label>
                  <Input
                    id="studentId"
                    placeholder="กรอกรหัสนักเรียน"
                    {...register("studentId")}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.studentId && <p className="text-sm text-red-500">{errors.studentId.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="classroom" className="dark:text-white">
                    ชั้นเรียน
                  </Label>
                  <Select onValueChange={(value) => setValue("classroom", value)} value={selectedClassroom}>
                    <SelectTrigger id="classroom" className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="เลือกชั้นเรียน" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectItem value="ปวช.1/1-ช่างกลโรงงาน">ปวช.1/1-ช่างกลโรงงาน</SelectItem>
                      <SelectItem value="ปวช.1/2-ช่างไฟฟ้า">ปวช.1/2-ช่างไฟฟ้า</SelectItem>
                      <SelectItem value="ปวช.2/1-ช่างกลโรงงาน">ปวช.2/1-ช่างกลโรงงาน</SelectItem>
                      <SelectItem value="ปวช.2/2-ช่างไฟฟ้า">ปวช.2/2-ช่างไฟฟ้า</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.classroom && <p className="text-sm text-red-500">{errors.classroom.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firstName" className="dark:text-white">
                    ชื่อ
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="กรอกชื่อ"
                    {...register("firstName")}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="dark:text-white">
                    นามสกุล
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="กรอกนามสกุล"
                    {...register("lastName")}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  ยกเลิก
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      กำลังบันทึก...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      บันทึก
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
