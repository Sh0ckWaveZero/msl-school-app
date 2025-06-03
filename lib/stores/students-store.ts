import { create } from "zustand"

export interface Student {
  id: string
  studentId: string
  firstName: string
  lastName: string
  classroom: string
  email?: string
  phone?: string
  address?: string
  parentName?: string
  parentPhone?: string
  enrollmentDate: Date
  status: "active" | "inactive" | "graduated"
  avatar?: string
}

interface StudentsState {
  students: Student[]
  selectedStudent: Student | null
  searchTerm: string
  selectedClass: string
  currentPage: number
  itemsPerPage: number
  isLoading: boolean
  error: string | null

  // Computed values
  filteredStudents: Student[]
  totalPages: number

  // Actions
  setStudents: (students: Student[]) => void
  setSelectedStudent: (student: Student | null) => void
  setSearchTerm: (term: string) => void
  setSelectedClass: (classroom: string) => void
  setCurrentPage: (page: number) => void
  setItemsPerPage: (items: number) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  addStudent: (student: Omit<Student, "id">) => void
  updateStudent: (id: string, updates: Partial<Student>) => void
  deleteStudent: (id: string) => void
  clearFilters: () => void
}

// Mock data
const mockStudents: Student[] = [
  {
    id: "1",
    studentId: "68201020001",
    firstName: "กิตติพงษ์",
    lastName: "บุตรศักดิ์",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    email: "kittipong@student.msl.ac.th",
    phone: "081-234-5678",
    enrollmentDate: new Date("2024-05-15"),
    status: "active",
  },
  {
    id: "2",
    studentId: "68201020002",
    firstName: "ชุมแพน",
    lastName: "โพธิ์ทอง",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    email: "chumpan@student.msl.ac.th",
    phone: "081-234-5679",
    enrollmentDate: new Date("2024-05-15"),
    status: "active",
  },
  {
    id: "3",
    studentId: "68201020003",
    firstName: "ชัดเจน",
    lastName: "ดุมาร",
    classroom: "ปวช.1/1-ช่างกลโรงงาน",
    email: "chadjen@student.msl.ac.th",
    phone: "081-234-5680",
    enrollmentDate: new Date("2024-05-15"),
    status: "active",
  },
  // Add more mock students...
]

export const useStudentsStore = create<StudentsState>((set, get) => ({
  students: mockStudents,
  selectedStudent: null,
  searchTerm: "",
  selectedClass: "",
  currentPage: 1,
  itemsPerPage: 10,
  isLoading: false,
  error: null,

  // Computed values
  get filteredStudents() {
    const { students, searchTerm, selectedClass } = get()
    return students.filter((student) => {
      const matchesSearch =
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.includes(searchTerm)
      const matchesClass = selectedClass ? student.classroom === selectedClass : true
      return matchesSearch && matchesClass
    })
  },

  get totalPages() {
    const { filteredStudents, itemsPerPage } = get()
    return Math.ceil(filteredStudents.length / itemsPerPage)
  },

  // Actions
  setStudents: (students) => set({ students }),
  setSelectedStudent: (selectedStudent) => set({ selectedStudent }),
  setSearchTerm: (searchTerm) => set({ searchTerm, currentPage: 1 }),
  setSelectedClass: (selectedClass) => set({ selectedClass, currentPage: 1 }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setItemsPerPage: (itemsPerPage) => set({ itemsPerPage, currentPage: 1 }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  addStudent: (studentData) => {
    const newStudent: Student = {
      ...studentData,
      id: Date.now().toString(),
    }
    set((state) => ({
      students: [...state.students, newStudent],
    }))
  },

  updateStudent: (id, updates) => {
    set((state) => ({
      students: state.students.map((student) => (student.id === id ? { ...student, ...updates } : student)),
    }))
  },

  deleteStudent: (id) => {
    set((state) => ({
      students: state.students.filter((student) => student.id !== id),
    }))
  },

  clearFilters: () =>
    set({
      searchTerm: "",
      selectedClass: "",
      currentPage: 1,
    }),
}))
