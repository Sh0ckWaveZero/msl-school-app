import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useStudentsStore, type Student } from "@/lib/stores/students-store"
import { useUIStore } from "@/lib/stores/ui-store"

// Mock API functions
const studentsApi = {
  getStudents: async (): Promise<Student[]> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Get from store (in real app, this would be an API call)
    return useStudentsStore.getState().students
  },

  getStudent: async (id: string): Promise<Student> => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const students = useStudentsStore.getState().students
    const student = students.find((s) => s.id === id)
    if (!student) {
      throw new Error("Student not found")
    }
    return student
  },

  createStudent: async (studentData: Omit<Student, "id">): Promise<Student> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newStudent: Student = {
      ...studentData,
      id: Date.now().toString(),
    }

    // Update store
    useStudentsStore.getState().addStudent(studentData)
    return newStudent
  },

  updateStudent: async (id: string, updates: Partial<Student>): Promise<Student> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const students = useStudentsStore.getState().students
    const student = students.find((s) => s.id === id)
    if (!student) {
      throw new Error("Student not found")
    }

    const updatedStudent = { ...student, ...updates }
    useStudentsStore.getState().updateStudent(id, updates)
    return updatedStudent
  },

  deleteStudent: async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    useStudentsStore.getState().deleteStudent(id)
  },
}

// Query keys
export const studentsKeys = {
  all: ["students"] as const,
  lists: () => [...studentsKeys.all, "list"] as const,
  list: (filters: Record<string, any>) => [...studentsKeys.lists(), filters] as const,
  details: () => [...studentsKeys.all, "detail"] as const,
  detail: (id: string) => [...studentsKeys.details(), id] as const,
}

// Hooks
export function useStudents() {
  const { searchTerm, selectedClass } = useStudentsStore()

  return useQuery({
    queryKey: studentsKeys.list({ searchTerm, selectedClass }),
    queryFn: studentsApi.getStudents,
    // Mobile optimizations
    staleTime: 2 * 60 * 1000, // 2 minutes for list data
    select: (data) => {
      // Filter data based on store state
      return data.filter((student) => {
        const matchesSearch =
          student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.studentId.includes(searchTerm)
        const matchesClass = selectedClass ? student.classroom === selectedClass : true
        return matchesSearch && matchesClass
      })
    },
  })
}

export function useStudent(id: string) {
  return useQuery({
    queryKey: studentsKeys.detail(id),
    queryFn: () => studentsApi.getStudent(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes for detail data
  })
}

export function useCreateStudent() {
  const queryClient = useQueryClient()
  const addNotification = useUIStore((state) => state.addNotification)

  return useMutation({
    mutationFn: studentsApi.createStudent,
    onSuccess: (newStudent) => {
      // Invalidate and refetch students list
      queryClient.invalidateQueries({ queryKey: studentsKeys.lists() })

      // Add to cache optimistically
      queryClient.setQueryData(studentsKeys.detail(newStudent.id), newStudent)

      // Show success notification
      addNotification({
        title: "เพิ่มนักเรียนสำเร็จ",
        message: `เพิ่มนักเรียน ${newStudent.firstName} ${newStudent.lastName} เรียบร้อยแล้ว`,
        type: "success",
      })
    },
    onError: (error: any) => {
      addNotification({
        title: "เกิดข้อผิดพลาด",
        message: error.message || "ไม่สามารถเพิ่มนักเรียนได้",
        type: "error",
      })
    },
  })
}

export function useUpdateStudent() {
  const queryClient = useQueryClient()
  const addNotification = useUIStore((state) => state.addNotification)

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Student> }) => studentsApi.updateStudent(id, updates),
    onSuccess: (updatedStudent) => {
      // Update cache
      queryClient.setQueryData(studentsKeys.detail(updatedStudent.id), updatedStudent)
      queryClient.invalidateQueries({ queryKey: studentsKeys.lists() })

      addNotification({
        title: "อัปเดตข้อมูลสำเร็จ",
        message: `อัปเดตข้อมูลนักเรียน ${updatedStudent.firstName} ${updatedStudent.lastName} เรียบร้อยแล้ว`,
        type: "success",
      })
    },
    onError: (error: any) => {
      addNotification({
        title: "เกิดข้อผิดพลาด",
        message: error.message || "ไม่สามารถอัปเดตข้อมูลได้",
        type: "error",
      })
    },
  })
}

export function useDeleteStudent() {
  const queryClient = useQueryClient()
  const addNotification = useUIStore((state) => state.addNotification)

  return useMutation({
    mutationFn: studentsApi.deleteStudent,
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: studentsKeys.detail(deletedId) })
      queryClient.invalidateQueries({ queryKey: studentsKeys.lists() })

      addNotification({
        title: "ลบนักเรียนสำเร็จ",
        message: "ลบข้อมูลนักเรียนเรียบร้อยแล้ว",
        type: "success",
      })
    },
    onError: (error: any) => {
      addNotification({
        title: "เกิดข้อผิดพลาด",
        message: error.message || "ไม่สามารถลบนักเรียนได้",
        type: "error",
      })
    },
  })
}

// Mobile-specific hook for offline support
export function useStudentsOffline() {
  const { data: students, isLoading, error } = useStudents()
  const { searchTerm, selectedClass } = useStudentsStore()

  // Fallback to store data when offline
  const fallbackStudents = useStudentsStore((state) => state.filteredStudents)

  return {
    students: students || fallbackStudents,
    isLoading,
    error,
    isOffline: !students && fallbackStudents.length > 0,
  }
}
