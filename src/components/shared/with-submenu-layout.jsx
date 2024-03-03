"use client"

import { usePathname } from "next/navigation"

import { Container } from "@/shared/container"
import { Submenu } from "@/features/submenu"

export default function WithSubmenuLayout({ children }) {
  const pathname = usePathname()

  return (
    <>
      <Submenu />

      <div className="flex-1">
        <Container>{children}</Container>
      </div>
    </>
  )
}
