import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // เพิ่มเวลา stale สำหรับ mobile เพื่อลด network requests
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (เปลี่ยนจาก cacheTime เป็น gcTime ใน v5)
      retry: (failureCount, error: any) => {
        // ไม่ retry สำหรับ 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false
        }
        return failureCount < 3
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      // เพิ่ม network mode สำหรับ offline support
      networkMode: "offlineFirst",
      // ปิด refetch เมื่อ window focus บน mobile เพื่อประหยัด battery
      refetchOnWindowFocus: false,
      // เปิด background refetch สำหรับข้อมูลที่สำคัญ
      refetchOnReconnect: true,
      // ปรับ refetch interval สำหรับ mobile
      refetchInterval: false,
    },
    mutations: {
      // เพิ่ม network mode สำหรับ mutations
      networkMode: "offlineFirst",
      retry: (failureCount, error: any) => {
        if (error?.status >= 400 && error?.status < 500) {
          return false
        }
        return failureCount < 2
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    },
  },
})

// เพิ่ม global error handler
queryClient.setMutationDefaults(["students", "create"], {
  mutationFn: async (data: any) => {
    const response = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to create student")
    return response.json()
  },
})

// เพิ่ม query defaults สำหรับ students
queryClient.setQueryDefaults(["students"], {
  staleTime: 1000 * 60 * 2, // 2 minutes สำหรับข้อมูลที่เปลี่ยนแปลงบ่อย
})
