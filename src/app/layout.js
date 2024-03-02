import { Inter } from "next/font/google"
import "./globals.css"

import { Aside } from "@/features/aside"

import { cn } from "@/utils/cn"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ömer Gülçiçek",
  description: "Senior Frontend Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={cn(inter.className, "flex min-h-dvh")}>
        <Aside />
        <main className="flex-1 flex">{children}</main>
      </body>
    </html>
  )
}
