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
      },
      {
        id: "schedules",
        title: "ตารางเรียน",
        href: "/dashboard/admin/schedules",
        icon: Calendar,
        description: "จัดการตารางเรียนและตารางสอน",
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
    title: "รายงานและสถิติ",
    items: [
      {
        id: "reports",
        title: "รายงานและสถิติ",
        href: "/dashboard/admin/reports",
        icon: BarChart3,
        description: "รายงานและสถิติต่างๆ",
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
