import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { GraduationCap, Users, BookOpen, Calendar, BarChart3, ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "จัดการนักเรียน",
      description: "ระบบจัดการข้อมูลนักเรียนที่ครอบคลุมและใช้งานง่าย",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },
    {
      icon: BookOpen,
      title: "จัดการหลักสูตร",
      description: "จัดการหลักสูตรและรายวิชาอย่างมีประสิทธิภาพ",
      color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
    },
    {
      icon: Calendar,
      title: "ตารางเรียน",
      description: "จัดตารางเรียนและติดตามเวลาเรียนอย่างเป็นระบบ",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    },
    {
      icon: BarChart3,
      title: "รายงานสถิติ",
      description: "วิเคราะห์ข้อมูลและสร้างรายงานต่างๆ อย่างละเอียด",
      color: "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 dark:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-300">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  MSL School
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Management System
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/login">
                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white rounded-full px-6 transition-all duration-300">
                  เข้าสู่ระบบ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 transition-colors duration-300">
            <Sparkles className="w-4 h-4" />
            <span>ระบบจัดการโรงเรียนยุคใหม่</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            จัดการโรงเรียน
            <br />
            <span className="text-blue-500 dark:text-blue-400 transition-colors duration-300">ง่ายขึ้น</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
            ระบบจัดการโรงเรียนที่ออกแบบมาให้ใช้งานง่าย ครบครัน และทันสมัย พร้อมรองรับการใช้งานบนทุกอุปกรณ์
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-white rounded-full px-8 py-4 text-lg font-medium group transition-all duration-300"
              >
                เริ่มใช้งานเลย
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300"
            >
              รองรับ Mobile & Desktop
            </Badge>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              ทุกสิ่งที่คุณต้องการ
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              ฟีเจอร์ครบครันที่ตอบสนองความต้องการของโรงเรียนในยุคดิจิทัล
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-colors duration-300">
            เข้าสู่ระบบด้วยบทบาทของคุณและสัมผัสประสบการณ์การจัดการโรงเรียนแบบใหม่
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              {
                role: "ผู้ดูแลระบบ",
                desc: "จัดการระบบทั้งหมด",
                color:
                  "bg-red-50 hover:bg-red-100 dark:bg-red-950 dark:hover:bg-red-900 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900",
              },
              {
                role: "ครู",
                desc: "จัดการชั้นเรียน",
                color:
                  "bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900",
              },
              {
                role: "นักเรียน",
                desc: "เข้าถึงข้อมูลการเรียน",
                color:
                  "bg-green-50 hover:bg-green-100 dark:bg-green-950 dark:hover:bg-green-900 text-green-600 dark:text-green-400 border-green-100 dark:border-green-900",
              },
              {
                role: "ผู้ปกครอง",
                desc: "ติดตามผลการเรียน",
                color:
                  "bg-purple-50 hover:bg-purple-100 dark:bg-purple-950 dark:hover:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900",
              },
            ].map((item, index) => (
              <Link key={index} href="/login">
                <div
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer group border ${item.color}`}
                >
                  <h4 className="font-semibold mb-2">{item.role}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                  <ArrowRight className="w-4 h-4 mt-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 py-12 px-6 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              MSL School
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
            © 2024 MSL School Management System. Made with ❤️ for Education
          </p>
        </div>
      </footer>
    </div>
  )
}
