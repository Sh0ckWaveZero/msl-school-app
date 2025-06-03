import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useUIStore } from "@/lib/stores/ui-store"

export interface Student {
  id: string
  studentId: string
  name: string
  email: string
  phone: string
  grade: string
  class: string
  status: "active" | "inactive" | "graduated"
  avatar?: string
  parentName?: string
  parentPhone?: string
  address?: string
  birthDate?: string
  enrollmentDate: string
}

// Mock data
const mockStudents: Student[] = [
  {
    id: "1",
    studentId: "STD001",
    name: "สมชาย ใจดี",
    email: "somchai@student.msl.ac.th",
    phone: "081-234-5678",
    grade: "ม.1",
    class: "1/1",
    status: "active",
    parentName: "นายสมศักดิ์ ใจดี",
    parentPhone: "081-234-5679",
    enrollmentDate: "2024-01-15",
  },
  {
    id: "2",
    studentId: "STD002",
    name: "สมหญิง รักเรียน",
    email: "somying@student.msl.ac.th",
    phone: "082-345-6789",
    grade: "ม.2",
    class: "2/1",
    status: "active",
    parentName: "นางสมใจ รักเรียน",
    parentPhone: "082-345-6790",
    enrollmentDate: "2023-01-15",
  },
]

// API functions
const studentsApi = {
  getAll: async (): Promise<Student[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return mockStudents
  },

  getById: async (id: string): Promise<Student> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const student = mockStudents.find((s) => s.id === id)
    if (!student) throw new Error("Student not found")
    return student
  },

  create: async (data: Omit<Student, "id" | "enrollmentDate">): Promise<Student> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const newStudent: Student = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      enrollmentDate: new Date().toISOString().split("T")[0],
    }
    mockStudents.push(newStudent)
    return newStudent
  },

  update: async (id: string, data: Partial<Student>): Promise<Student> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const index = mockStudents.findIndex((s) => s.id === id)
    if (index === -1) throw new Error("Student not found")

    mockStudents[index] = { ...mockStudents[index], ...data }
    return mockStudents[index]
  },

  delete: async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const index = mockStudents.findIndex((s) => s.id === id)
    if (index === -1) throw new Error("Student not found")
    mockStudents.splice(index, 1)
  },
}

// Query hooks
export function useStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: studentsApi.getAll,
    staleTime: 1000 * 60 * 2, // 2 minutes
  })
}

export function useStudent(id: string) {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => studentsApi.getById(id),
    enabled: !!id,
  })
}

// Mutation hooks
export function useCreateStudent() {
  const queryClient = useQueryClient()
  const addNotification = useUIStore((state) => state.addNotification)

  return useMutation({
    mutationFn: studentsApi.create,
    onSuccess: (newStudent) => {
      // Optimistic update
      queryClient.setQueryData(["students"], (old: Student[] = []) => [...old, newStudent])

      addNotification({
        type: "success",
        title: "เพิ่มนักเรียนสำเร็จ",
        message: `เพิ่ม ${newStudent.name} เรียบร้อยแล้ว`,
      })
    },
    onError: (error) => {
      addNotification({
        type: "error",
        title: "เกิดข้อผิดพลาด",
        message: error instanceof Error ? error.message : "ไม่สามารถเพิ่มนักเรียนได้",
      })
    },
  })
}

export function useUpdateStudent() {
  const queryClient = useQueryClient()
  const addNotification = useUIStore((state) => state.addNotification)

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Student> }) => studentsApi.update(id, data),
    onSuccess: (updatedStudent) => {
      // Update cache
      queryClient.setQueryData(["students"], (old: Student[] = []) =>
        old.map((student) => (student.id === updatedStudent.id ? updatedStudent : student)),
      )

      queryClient.setQueryData(["students", updatedStudent.id], updatedStudent)

      addNotification({
        type: "success",
        title: "อัปเดตข้อมูลสำเร็จ",
        message: `อัปเดตข้อมูล ${updatedStudent.name} เรียบร้อยแล้ว`,
      })
    },
    onError: (error) => {
      addNotification({
        type: "error",
        title: "เกิดข้อผิดพลาด",
        message: error instanceof Error ? error.message : "ไม่สามารถอัปเดตข้อมูลได้",
      })
    },
  })
}

export function useDeleteStudent() {
  const queryClient = useQueryClient()
  const addNotification = useUIStore((state) => state.addNotification)

  return useMutation({
    mutationFn: studentsApi.delete,
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.setQueryData(["students"], (old: Student[] = []) => old.filter((student) => student.id !== deletedId))

      queryClient.removeQueries({ queryKey: ["students", deletedId] })

      addNotification({
        type: "success",
        title: "ลบนักเรียนสำเร็จ",
        message: "ลบข้อมูลนักเรียนเรียบร้อยแล้ว",
      })
    },
    onError: (error) => {
      addNotification({
        type: "error",
        title: "เกิดข้อผิดพลาด",
        message: error instanceof Error ? error.message : "ไม่สามารถลบนักเรียนได้",
      })
    },
  })
}
