import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">MSL School</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Link href="/login">เข้าสู่ระบบ</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/register">สมัครสมาชิก</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ระบบจัดการโรงเรียนอาชีวศึกษา</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            ระบบจัดการที่ครอบคลุมสำหรับโรงเรียนอาชีวศึกษา รองรับการทำงานของผู้ดูแลระบบ ครู นักเรียน และผู้ปกครอง
          </p>
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <Link href="/login">เริ่มต้นใช้งาน</Link>
          </Button>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">ฟีเจอร์หลัก</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-gray-900">จัดการผู้ใช้</CardTitle>
                <CardDescription className="text-gray-700">
                  ระบบจัดการผู้ใช้แบบ Multi-role สำหรับ Admin, Teacher, Student และ Parent
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-gray-900">จัดการหลักสูตร</CardTitle>
                <CardDescription className="text-gray-700">
                  ระบบจัดการหลักสูตร วิชาเรียน และตารางเรียนแบบครอบคลุม
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-gray-900">ติดตามผลการเรียน</CardTitle>
                <CardDescription className="text-gray-700">
                  ระบบติดตามผลการเรียน การเข้าเรียน และพฤติกรรมของนักเรียน
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-gray-900">รายงานและสถิติ</CardTitle>
                <CardDescription className="text-gray-700">ระบบรายงานและสถิติที่ครอบคลุมสำหรับการตัดสินใจ</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer - Now sticky at bottom */}
      <footer className="bg-gray-900 text-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold text-white">MSL School</span>
              </div>
              <p className="text-gray-300">ระบบจัดการโรงเรียนอาชีวศึกษาที่ทันสมัยและครอบคลุม</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">ลิงก์ด่วน</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-blue-400 transition-colors">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors">
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-blue-400 transition-colors">
                    ช่วยเหลือ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">ติดต่อเรา</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@msl-school.com</p>
                <p>📞 02-123-4567</p>
                <p>📍 123 ถนนการศึกษา กรุงเทพฯ 10110</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 MSL School Management System. สงวนลิขสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
