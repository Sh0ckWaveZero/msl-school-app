"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, User, Lock, UserCheck } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

const loginSchema = z.object({
  username: z.string().min(1, "กรุณากรอกชื่อผู้ใช้"),
  password: z.string().min(1, "กรุณากรอกรหัสผ่าน"),
  role: z.string().min(1, "กรุณาเลือกบทบาท"),
})

type LoginForm = z.infer<typeof loginSchema>

const demoAccounts = [
  { role: "admin", username: "admin", password: "admin", name: "ผู้ดูแลระบบ" },
  { role: "teacher", username: "teacher", password: "teacher", name: "ครู" },
  { role: "student", username: "student", password: "student", name: "นักเรียน" },
  { role: "parent", username: "parent", password: "parent", name: "ผู้ปกครอง" },
]

export default function LoginPage() {
  const [error, setError] = useState("")
  const { login, isLoading } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const selectedRole = watch("role")

  const onSubmit = async (data: LoginForm) => {
    try {
      setError("")
      await login(data.username, data.password, data.role)

      // Redirect based on role
      const redirectPath =
        {
          admin: "/dashboard/admin",
          teacher: "/dashboard/teacher",
          student: "/dashboard/student",
          parent: "/dashboard/parent",
        }[data.role] || "/dashboard"

      router.push(redirectPath)
    } catch (err) {
      setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาดในการเข้าสู่ระบบ")
    }
  }

  const handleDemoLogin = (account: (typeof demoAccounts)[0]) => {
    setValue("username", account.username)
    setValue("password", account.password)
    setValue("role", account.role)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">เข้าสู่ระบบ</CardTitle>
          <CardDescription className="text-center">ระบบจัดการโรงเรียน MSL</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">บทบาท</Label>
              <Select onValueChange={(value) => setValue("role", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกบทบาท" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">ผู้ดูแลระบบ</SelectItem>
                  <SelectItem value="teacher">ครู</SelectItem>
                  <SelectItem value="student">นักเรียน</SelectItem>
                  <SelectItem value="parent">ผู้ปกครอง</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">ชื่อผู้ใช้</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="username" type="text" placeholder="กรอกชื่อผู้ใช้" className="pl-10" {...register("username")} />
              </div>
              {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">รหัสผ่าน</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="กรอกรหัสผ่าน"
                  className="pl-10"
                  {...register("password")}
                />
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  กำลังเข้าสู่ระบบ...
                </>
              ) : (
                <>
                  <UserCheck className="mr-2 h-4 w-4" />
                  เข้าสู่ระบบ
                </>
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">หรือทดสอบด้วยบัญชีตัวอย่าง</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {demoAccounts.map((account) => (
              <Button
                key={account.role}
                variant="outline"
                size="sm"
                onClick={() => handleDemoLogin(account)}
                className="text-xs"
              >
                {account.name}
              </Button>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>บัญชีทดสอบ: username/password เหมือนกับบทบาท</p>
            <p className="text-xs mt-1">เช่น admin/admin, teacher/teacher</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
