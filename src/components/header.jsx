"use client"

import { useState, useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"

import HeaderMobile from "./headerMobile"
import HeaderDesktop from "./headerDesktop"

export default function Header() {
  const [mounted, setMounted] = useState(false)

  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return false

  if (isDesktop) {
    return <HeaderDesktop />
  } else {
    return <HeaderMobile />
  }
}
