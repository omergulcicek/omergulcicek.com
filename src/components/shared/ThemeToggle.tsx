"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useIsClient } from "usehooks-ts"

import { useTheme } from "@/providers/ThemeProvider"

import { Button } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isClient = useIsClient()

  if (!isClient) {
    return <Button variant="ghost" size="icon" aria-hidden className="size-8 opacity-0" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8"
      aria-label={isDark ? m.theme_to_light() : m.theme_to_dark()}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // Both icons stay mounted; the theme class on <html> cross-fades them (see .icon-swap).
      data-theme-swap=""
    >
      <span className="icon-swap">
        <MoonIcon aria-hidden className="size-3.5" />
        <SunIcon aria-hidden className="size-3.5" />
      </span>
    </Button>
  )
}
