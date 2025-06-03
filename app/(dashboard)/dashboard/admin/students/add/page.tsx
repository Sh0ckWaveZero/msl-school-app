"use client"

import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Loader2 } from "lucide-react"
import { Label } from "@/components/ui/label"
import { useCreateStudent } from "@/lib/hooks/use-students-api"
import { useUIStore } from "@/lib/stores/ui-store"

const studentSchema = z.object({
  studentId: z.string().min(5, "รหัสนักเรียนต้องมีอย่างน้อย 5 ตัวอักษร"),
  firstName: z.string().min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร"),
  lastName: z.string().min(2, "นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร"),
  classroom: z.string().min(1, "กรุณาเลือกชั้นเรียน"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง").optional().or(z.literal("")),
  phone: z.string().optional(),
})

type StudentFormValues = z.infer<typeof studentSchema>

export default function AddStudentPage() {
  const router = useRouter()
  const { isMobile } = useUIStore()
  const createStudentMutation = useCreateStudent()

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
      email: "",
      phone: "",
    },
  })

  const onSubmit = async (data: StudentFormValues) => {
    try {
      await createStudentMutation.mutateAsync({
        ...data,
        enrollmentDate: new Date(),
        status: "active" as const,
      })

      router.push("/dashboard/admin/students")
    } catch (error) {
      // Error is handled by the mutation
    }
  }

  const selectedClassroom = watch("classroom")

  const containerClass = isMobile
    ? "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 px-4 py-4"
    : "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-6"

  return (
    <div className={containerClass}>
      <div className="space-y-4 md:space-y-6">
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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">เพิ่มนักเรียนใหม่</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">กรอกข้อมูลนักเรียนเพื่อเพิ่มเข้าสู่ระบบ</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="studentId" className="dark:text-white">
                    รหัสนักเรียน *
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
                    ชั้นเรียน *
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
                    ชื่อ *
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
                    นามสกุล *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="กรอกนามสกุล"
                    {...register("lastName")}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="dark:text-white">
                    อีเมล
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="กรอกอีเมล (ไม่บังคับ)"
                    {...register("email")}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="dark:text-white">
                    เบอร์โทรศัพท์
                  </Label>
                  <Input
                    id="phone"
                    placeholder="กรอกเบอร์โทรศัพท์ (ไม่บังคับ)"
                    {...register("phone")}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white order-2 md:order-1"
                  disabled={createStudentMutation.isPending}
                >
                  ยกเลิก
                </Button>
                <Button
                  type="submit"
                  disabled={createStudentMutation.isPending}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 order-1 md:order-2"
                >
                  {createStudentMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
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
