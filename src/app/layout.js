import { Inter } from "next/font/google"
import "./globals.css"

import { Aside } from "@/features/aside"
import { Main } from "@/shared/main"

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
        <Main>{children}</Main>
      </body>
    </html>
  )
}
