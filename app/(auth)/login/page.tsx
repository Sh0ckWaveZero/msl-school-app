"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { GraduationCap, Eye, EyeOff, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

const loginSchema = z.object({
  username: z.string().min(1, "กรุณากรอกชื่อผู้ใช้").min(3, "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร"),
  password: z.string().min(1, "กรุณากรอกรหัสผ่าน").min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
  role: z.string().min(1, "กรุณาเลือกบทบาท"),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "",
    },
  })

  const watchedRole = watch("role")

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock validation
      if (data.username === "admin" && data.password === "123456") {
        toast({
          title: "เข้าสู่ระบบสำเร็จ! 🎉",
          description: `ยินดีต้อนรับ ${data.username}`,
        })

        // Redirect based on role
        setTimeout(() => {
          switch (data.role) {
            case "admin":
              router.push("/dashboard/admin")
              break
            case "teacher":
              router.push("/dashboard/teacher")
              break
            case "student":
              router.push("/dashboard/student")
              break
            case "parent":
              router.push("/dashboard/parent")
              break
            default:
              router.push("/dashboard")
          }
        }, 1000)
      } else {
        toast({
          title: "เข้าสู่ระบบไม่สำเร็จ ❌",
          description: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              เข้าสู่ระบบ
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-base mt-2">
              กรุณาเข้าสู่ระบบเพื่อใช้งาน MSL School Management System
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700 dark:text-gray-300 font-medium">
                  ชื่อผู้ใช้
                </Label>
                <Input
                  id="username"
                  {...register("username")}
                  placeholder="กรุณากรอกชื่อผู้ใช้"
                  className="h-12 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  disabled={isLoading}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-medium">
                  รหัสผ่าน
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="กรุณากรอกรหัสผ่าน"
                    className="h-12 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 pr-12 dark:bg-gray-700 dark:text-white"
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    )}
                  </Button>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-700 dark:text-gray-300 font-medium">
                  บทบาท
                </Label>
                <Select onValueChange={(value) => setValue("role", value)} value={watchedRole} disabled={isLoading}>
                  <SelectTrigger className="h-12 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                    <SelectValue placeholder="เลือกบทบาทของคุณ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">ผู้ดูแลระบบ (Admin)</SelectItem>
                    <SelectItem value="teacher">ครู (Teacher)</SelectItem>
                    <SelectItem value="student">นักเรียน (Student)</SelectItem>
                    <SelectItem value="parent">ผู้ปกครอง (Parent)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    กำลังเข้าสู่ระบบ...
                  </>
                ) : (
                  "เข้าสู่ระบบ"
                )}
              </Button>
            </form>

            <div className="text-center space-y-4">
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium hover:underline transition-colors"
              >
                ลืมรหัสผ่าน?
              </Link>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                ยังไม่มีบัญชี?{" "}
                <Link
                  href="/register"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors"
                >
                  สมัครสมาชิก
                </Link>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">ข้อมูลสำหรับทดสอบ:</p>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                <strong>ชื่อผู้ใช้:</strong> admin
                <br />
                <strong>รหัสผ่าน:</strong> 123456
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
