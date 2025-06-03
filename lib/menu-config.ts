import {
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  GraduationCap,
  UserCheck,
  MessageSquare,
  Award,
  Target,
  Bell,
  School,
  ClipboardList,
  Flag,
  FileText,
  Database,
  Shield,
  HelpCircle,
  Star,
  TrendingUp,
  CheckCircle,
  BookMarked,
  PresentationIcon as PresentationChart,
  Calculator,
  Palette,
} from "lucide-react"

export interface MenuItem {
  id: string
  title: string
  href: string
  icon: any
  description?: string
  badge?: string | number
  children?: MenuItem[]
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

// เมนูสำหรับ Admin
export const adminMenuConfig: MenuSection[] = [
  {
    title: "ภาพรวมระบบ",
    items: [
      {
        id: "dashboard",
        title: "แดชบอร์ด",
        href: "/dashboard/admin",
        icon: LayoutDashboard,
        description: "ภาพรวมข้อมูลทั้งหมด",
      },
    ],
  },
  {
    title: "จัดการผู้ใช้",
    items: [
      {
        id: "students",
        title: "นักเรียน",
        href: "/dashboard/admin/students",
        icon: GraduationCap,
        description: "จัดการข้อมูลนักเรียน",
        badge: "1,247",
      },
      {
        id: "teachers",
        title: "ครู/บุคลากร",
        href: "/dashboard/admin/teachers",
        icon: Users,
        description: "จัดการข้อมูลครูและบุคลากร",
        badge: "89",
      },
      {
        id: "classrooms",
        title: "ห้องเรียน",
        href: "/dashboard/admin/classrooms",
        icon: School,
        description: "จัดการห้องเรียนและชั้นเรียน",
        badge: "24",
      },
      {
        id: "users",
        title: "ผู้ใช้ระบบ",
        href: "/dashboard/admin/users",
        icon: Shield,
        description: "จัดการบัญชีผู้ใช้และสิทธิ์",
      },
    ],
  },
  {
    title: "การเรียนการสอน",
    items: [
      {
        id: "courses",
        title: "หลักสูตร/วิชา",
        href: "/dashboard/admin/courses",
        icon: BookOpen,
        description: "จัดการหลักสูตรและรายวิชา",
        badge: "42",
      },
      {
        id: "schedules",
        title: "ตารางเรียน",
        href: "/dashboard/admin/schedules",
        icon: Calendar,
        description: "จัดการตารางเรียนและตารางสอน",
      },
      {
        id: "curriculum",
        title: "หลักสูตรการเรียน",
        href: "/dashboard/admin/curriculum",
        icon: BookMarked,
        description: "จัดการหลักสูตรและแผนการเรียน",
      },
    ],
  },
  {
    title: "การเข้าเรียน",
    items: [
      {
        id: "attendance",
        title: "เช็คชื่อเข้าเรียน",
        href: "/dashboard/admin/attendance",
        icon: UserCheck,
        description: "บันทึกการเข้าเรียนรายวิชา",
      },
      {
        id: "flag-ceremony",
        title: "เข้าแถวเคารพธงชาติ",
        href: "/dashboard/admin/flag-ceremony",
        icon: Flag,
        description: "บันทึกการเข้าแถวเคารพธงชาติ",
      },
      {
        id: "attendance-report",
        title: "รายงานการเข้าเรียน",
        href: "/dashboard/admin/attendance-report",
        icon: ClipboardList,
        description: "รายงานสถิติการเข้าเรียน",
      },
    ],
  },
  {
    title: "การประเมิน",
    items: [
      {
        id: "grades",
        title: "การให้เกรด",
        href: "/dashboard/admin/grades",
        icon: Award,
        description: "จัดการเกรดและการประเมิน",
      },
      {
        id: "assignments",
        title: "งานมอบหมาย",
        href: "/dashboard/admin/assignments",
        icon: Target,
        description: "จัดการงานและโครงงาน",
        badge: "12",
      },
      {
        id: "exams",
        title: "การสอบ",
        href: "/dashboard/admin/exams",
        icon: FileText,
        description: "จัดการการสอบและผลสอบ",
      },
    ],
  },
  {
    title: "รายงานและสถิติ",
    items: [
      {
        id: "reports",
        title: "รายงานและสถิติ",
        href: "/dashboard/admin/reports",
        icon: BarChart3,
        description: "รายงานและสถิติต่างๆ",
      },
      {
        id: "analytics",
        title: "การวิเคราะห์ข้อมูล",
        href: "/dashboard/admin/analytics",
        icon: TrendingUp,
        description: "วิเคราะห์ข้อมูลเชิงลึก",
      },
      {
        id: "performance",
        title: "ประสิทธิภาพการเรียน",
        href: "/dashboard/admin/performance",
        icon: PresentationChart,
        description: "รายงานประสิทธิภาพการเรียนรู้",
      },
    ],
  },
  {
    title: "การสื่อสาร",
    items: [
      {
        id: "announcements",
        title: "ประกาศ",
        href: "/dashboard/admin/announcements",
        icon: Bell,
        description: "จัดการประกาศและข่าวสาร",
        badge: "5",
      },
      {
        id: "messages",
        title: "ข้อความ",
        href: "/dashboard/admin/messages",
        icon: MessageSquare,
        description: "ระบบข้อความและการสื่อสาร",
        badge: "8",
      },
      {
        id: "notifications",
        title: "การแจ้งเตือน",
        href: "/dashboard/admin/notifications",
        icon: Bell,
        description: "จัดการการแจ้งเตือนระบบ",
      },
    ],
  },
  {
    title: "การตั้งค่า",
    items: [
      {
        id: "settings",
        title: "ตั้งค่าระบบ",
        href: "/dashboard/admin/settings",
        icon: Settings,
        description: "การตั้งค่าและกำหนดค่าระบบ",
      },
      {
        id: "backup",
        title: "สำรองข้อมูล",
        href: "/dashboard/admin/backup",
        icon: Database,
        description: "จัดการการสำรองข้อมูล",
      },
      {
        id: "themes",
        title: "ธีมและรูปแบบ",
        href: "/dashboard/admin/themes",
        icon: Palette,
        description: "จัดการธีมและการแสดงผล",
      },
      {
        id: "help",
        title: "ช่วยเหลือ",
        href: "/dashboard/admin/help",
        icon: HelpCircle,
        description: "คำแนะนำและการใช้งาน",
      },
    ],
  },
]

// เมนูสำหรับ Teacher
export const teacherMenuConfig: MenuSection[] = [
  {
    title: "ภาพรวม",
    items: [
      {
        id: "dashboard",
        title: "แดชบอร์ด",
        href: "/dashboard/teacher",
        icon: LayoutDashboard,
        description: "ภาพรวมการสอนและชั้นเรียน",
      },
    ],
  },
  {
    title: "การสอน",
    items: [
      {
        id: "classes",
        title: "ชั้นเรียนของฉัน",
        href: "/dashboard/teacher/classes",
        icon: School,
        description: "ชั้นเรียนที่สอน",
        badge: "6",
      },
      {
        id: "schedule",
        title: "ตารางสอน",
        href: "/dashboard/teacher/schedule",
        icon: Calendar,
        description: "ตารางสอนของฉัน",
      },
      {
        id: "lessons",
        title: "บทเรียน",
        href: "/dashboard/teacher/lessons",
        icon: BookOpen,
        description: "จัดการเนื้อหาบทเรียน",
      },
    ],
  },
  {
    title: "การประเมิน",
    items: [
      {
        id: "attendance",
        title: "เช็คชื่อ",
        href: "/dashboard/teacher/attendance",
        icon: UserCheck,
        description: "เช็คชื่อนักเรียน",
      },
      {
        id: "grades",
        title: "ให้คะแนน",
        href: "/dashboard/teacher/grades",
        icon: Award,
        description: "ให้คะแนนและเกรด",
      },
      {
        id: "assignments",
        title: "งานมอบหมาย",
        href: "/dashboard/teacher/assignments",
        icon: Target,
        description: "สร้างและจัดการงาน",
        badge: "8",
      },
      {
        id: "exams",
        title: "การสอบ",
        href: "/dashboard/teacher/exams",
        icon: FileText,
        description: "จัดการข้อสอบและผลสอบ",
      },
    ],
  },
  {
    title: "การสื่อสาร",
    items: [
      {
        id: "messages",
        title: "ข้อความ",
        href: "/dashboard/teacher/messages",
        icon: MessageSquare,
        description: "ข้อความจากผู้ปกครองและนักเรียน",
        badge: "3",
      },
      {
        id: "announcements",
        title: "ประกาศ",
        href: "/dashboard/teacher/announcements",
        icon: Bell,
        description: "ประกาศให้นักเรียน",
      },
    ],
  },
  {
    title: "รายงาน",
    items: [
      {
        id: "reports",
        title: "รายงานชั้นเรียน",
        href: "/dashboard/teacher/reports",
        icon: BarChart3,
        description: "รายงานผลการเรียนของชั้น",
      },
      {
        id: "progress",
        title: "ความก้าวหน้า",
        href: "/dashboard/teacher/progress",
        icon: TrendingUp,
        description: "ติดตามความก้าวหน้าของนักเรียน",
      },
    ],
  },
]

// เมนูสำหรับ Student
export const studentMenuConfig: MenuSection[] = [
  {
    title: "ภาพรวม",
    items: [
      {
        id: "dashboard",
        title: "แดชบอร์ด",
        href: "/dashboard/student",
        icon: LayoutDashboard,
        description: "ภาพรวมการเรียนของฉัน",
      },
    ],
  },
  {
    title: "การเรียน",
    items: [
      {
        id: "courses",
        title: "วิชาเรียนของฉัน",
        href: "/dashboard/student/courses",
        icon: BookOpen,
        description: "วิชาที่ลงทะเบียนเรียน",
        badge: "8",
      },
      {
        id: "schedule",
        title: "ตารางเรียน",
        href: "/dashboard/student/schedule",
        icon: Calendar,
        description: "ตารางเรียนของฉัน",
      },
      {
        id: "lessons",
        title: "บทเรียน",
        href: "/dashboard/student/lessons",
        icon: BookMarked,
        description: "เนื้อหาบทเรียนและสื่อการเรียน",
      },
    ],
  },
  {
    title: "ผลการเรียน",
    items: [
      {
        id: "grades",
        title: "เกรดและคะแนน",
        href: "/dashboard/student/grades",
        icon: Award,
        description: "ผลการเรียนและเกรด",
      },
      {
        id: "attendance",
        title: "การเข้าเรียน",
        href: "/dashboard/student/attendance",
        icon: UserCheck,
        description: "สถิติการเข้าเรียนของฉัน",
      },
      {
        id: "transcript",
        title: "ใบแสดงผลการเรียน",
        href: "/dashboard/student/transcript",
        icon: FileText,
        description: "ใบรายงานผลการเรียนรวม",
      },
    ],
  },
  {
    title: "งานและกิจกรรม",
    items: [
      {
        id: "assignments",
        title: "งานที่ได้รับมอบหมาย",
        href: "/dashboard/student/assignments",
        icon: Target,
        description: "งานที่ต้องทำ",
        badge: "3",
      },
      {
        id: "exams",
        title: "การสอบ",
        href: "/dashboard/student/exams",
        icon: Calculator,
        description: "ตารางสอบและผลสอบ",
      },
      {
        id: "activities",
        title: "กิจกรรม",
        href: "/dashboard/student/activities",
        icon: Star,
        description: "กิจกรรมและการแข่งขัน",
      },
    ],
  },
  {
    title: "การสื่อสาร",
    items: [
      {
        id: "messages",
        title: "ข้อความ",
        href: "/dashboard/student/messages",
        icon: MessageSquare,
        description: "ข้อความจากครู",
      },
      {
        id: "announcements",
        title: "ประกาศ",
        href: "/dashboard/student/announcements",
        icon: Bell,
        description: "ประกาศจากโรงเรียน",
        badge: "2",
      },
    ],
  },
]

// เมนูสำหรับ Parent
export const parentMenuConfig: MenuSection[] = [
  {
    title: "ภาพรวม",
    items: [
      {
        id: "dashboard",
        title: "แดชบอร์ด",
        href: "/dashboard/parent",
        icon: LayoutDashboard,
        description: "ภาพรวมข้อมูลลูก",
      },
    ],
  },
  {
    title: "ติดตามลูก",
    items: [
      {
        id: "children",
        title: "ข้อมูลลูก",
        href: "/dashboard/parent/children",
        icon: Users,
        description: "ข้อมูลและผลการเรียนของลูก",
      },
      {
        id: "grades",
        title: "ผลการเรียน",
        href: "/dashboard/parent/grades",
        icon: Award,
        description: "เกรดและคะแนนของลูก",
      },
      {
        id: "attendance",
        title: "การเข้าเรียน",
        href: "/dashboard/parent/attendance",
        icon: UserCheck,
        description: "สถิติการเข้าเรียนของลูก",
      },
      {
        id: "schedule",
        title: "ตารางเรียน",
        href: "/dashboard/parent/schedule",
        icon: Calendar,
        description: "ตารางเรียนของลูก",
      },
    ],
  },
  {
    title: "การสื่อสาร",
    items: [
      {
        id: "messages",
        title: "ข้อความจากครู",
        href: "/dashboard/parent/messages",
        icon: MessageSquare,
        description: "ข้อความและการติดต่อจากครู",
        badge: "2",
      },
      {
        id: "announcements",
        title: "ประกาศจากโรงเรียน",
        href: "/dashboard/parent/announcements",
        icon: Bell,
        description: "ข่าวสารและประกาศ",
        badge: "1",
      },
      {
        id: "meetings",
        title: "นัดหมายพบครู",
        href: "/dashboard/parent/meetings",
        icon: Calendar,
        description: "จองและดูนัดหมายพบครู",
      },
    ],
  },
  {
    title: "รายงาน",
    items: [
      {
        id: "progress",
        title: "ความก้าวหน้าการเรียน",
        href: "/dashboard/parent/progress",
        icon: TrendingUp,
        description: "รายงานความก้าวหน้าของลูก",
      },
      {
        id: "behavior",
        title: "รายงานพฤติกรรม",
        href: "/dashboard/parent/behavior",
        icon: CheckCircle,
        description: "รายงานพฤติกรรมและความประพฤติ",
      },
    ],
  },
  {
    title: "การตั้งค่า",
    items: [
      {
        id: "profile",
        title: "ข้อมูลส่วนตัว",
        href: "/dashboard/parent/profile",
        icon: Users,
        description: "จัดการข้อมูลส่วนตัว",
      },
      {
        id: "notifications",
        title: "การแจ้งเตือน",
        href: "/dashboard/parent/notifications",
        icon: Bell,
        description: "ตั้งค่าการแจ้งเตือน",
      },
    ],
  },
]

// ฟังก์ชันสำหรับดึงเมนูตามบทบาท
export function getMenuByRole(role: string): MenuSection[] {
  switch (role.toLowerCase()) {
    case "admin":
      return adminMenuConfig
    case "teacher":
      return teacherMenuConfig
    case "student":
      return studentMenuConfig
    case "parent":
      return parentMenuConfig
    default:
      return []
  }
}

// ฟังก์ชันสำหรับหา active menu item
export function findActiveMenuItem(menuSections: MenuSection[], pathname: string): MenuItem | null {
  for (const section of menuSections) {
    for (const item of section.items) {
      if (item.href === pathname) {
        return item
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.href === pathname) {
            return child
          }
        }
      }
    }
  }
  return null
}
