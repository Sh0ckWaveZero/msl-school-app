"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"
import { GraduationCap, Eye, EyeOff, Loader2 } from "lucide-react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password || !role) {
      toast({
        title: "ข้อมูลไม่ครบถ้วน",
        description: "กรุณากรอกข้อมูลให้ครบถ้วน",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      await login(username, password, role)
      toast({
        title: "เข้าสู่ระบบสำเร็จ! 🎉",
        description: `ยินดีต้อนรับ ${username}`,
      })

      // Redirect based on role
      setTimeout(() => {
        router.push(`/dashboard/${role}`)
      }, 1000)
    } catch (error) {
      toast({
        title: "เข้าสู่ระบบล้มเหลว ❌",
        description: "กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const demoAccounts = [
    { role: "admin", username: "admin", label: "ผู้ดูแลระบบ", color: "bg-red-500" },
    { role: "teacher", username: "teacher", label: "ครู", color: "bg-blue-500" },
    { role: "student", username: "student", label: "นักเรียน", color: "bg-green-500" },
    { role: "parent", username: "parent", label: "ผู้ปกครอง", color: "bg-purple-500" },
  ]

  const fillDemoAccount = (demoRole: string, demoUsername: string) => {
    setRole(demoRole)
    setUsername(demoUsername)
    setPassword(demoUsername) // Same as username for demo
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
              MSL School Management System
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-gray-700 dark:text-gray-300 font-medium">
                  บทบาท
                </Label>
                <Select value={role} onValueChange={setRole} disabled={isLoading}>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700 dark:text-gray-300 font-medium">
                  ชื่อผู้ใช้
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="กรุณากรอกชื่อผู้ใช้"
                  className="h-12 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  disabled={isLoading}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-medium">
                  รหัสผ่าน
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="กรุณากรอกรหัสผ่าน"
                    className="h-12 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 pr-12 dark:bg-gray-700 dark:text-white"
                    disabled={isLoading}
                    required
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

            {/* Demo Accounts */}
            <div className="mt-6">
              <div className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4 font-medium">
                บัญชีทดสอบ (คลิกเพื่อใช้งาน):
              </div>
              <div className="grid grid-cols-2 gap-3">
                {demoAccounts.map((account) => (
                  <Button
                    key={account.role}
                    variant="outline"
                    size="sm"
                    onClick={() => fillDemoAccount(account.role, account.username)}
                    className="text-xs h-10 border-2 hover:border-blue-300 transition-colors"
                    disabled={isLoading}
                  >
                    <div className={`w-2 h-2 rounded-full ${account.color} mr-2`} />
                    {account.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Demo Credentials Info */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">ข้อมูลสำหรับทดสอบ:</p>
              <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                <p>
                  <strong>Username/Password:</strong> admin/admin, teacher/teacher, student/student, parent/parent
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
