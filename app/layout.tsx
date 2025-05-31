import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Thai } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/components/query-provider"
import { AuthProvider } from "@/components/auth-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"] })

export const metadata: Metadata = {
  title: "MSL School Management System",
  description: "ระบบจัดการโรงเรียนอาชีวศึกษา MSL School",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${inter.className} ${notoSansThai.className}`}>
        <ThemeProvider>
          <QueryProvider>
            <AuthProvider>
              {children}
              <Toaster />
            </AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
