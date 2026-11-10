import { Fragment } from "react"
import type { ReactNode } from "react"

import { cn } from "cn"

const LOGO_DIR = "/logos/stack"
const iconClass = "size-10"

function logo(name: string, className?: string, srcSet?: string) {
  return (
    <img
      key={name}
      src={`${LOGO_DIR}/${name}`}
      srcSet={srcSet}
      alt=""
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      className={cn(iconClass, className)}
    />
  )
}

/** A logo with a light and a dark file, swapped with the theme. */
function themedLogo(id: string) {
  return (
    <Fragment key={id}>
      {logo(`${id}-light.svg`, "dark:hidden")}
      {logo(`${id}-dark.svg`, "hidden dark:block")}
    </Fragment>
  )
}

/**
 * Brand icons for `me.stack`, keyed by id. Files in public/logos/stack rather than inline SVG
 * components: inline, the home strip's logos added about 60 KB to the first JS bundle and,
 * repeated for the loop, 150 KB to the HTML; as files the browser fetches each once and caches it.
 */
export const STACK_ICONS = new Map<string, ReactNode>([
  ["typescript", logo("typescript.svg")],
  ["react", themedLogo("react")],
  ["nextjs", logo("nextjs.svg")],
  ["tanstack", themedLogo("tanstack")],
  ["vite", logo("vite.svg")],
  ["tailwindcss", logo("tailwindcss.svg")],
  ["shadcn", themedLogo("shadcn")],
  ["motion", themedLogo("motion")],
  ["react-hook-form", logo("react-hook-form.svg")],
  ["zod", logo("zod.svg")],
  [
    "zustand",
    logo(
      "zustand-56.webp",
      undefined,
      `${LOGO_DIR}/zustand-56.webp 1x, ${LOGO_DIR}/zustand-112.webp 2x`
    )
  ],
  ["vitest", logo("vitest.svg")],
  ["playwright", logo("playwright.svg")],
  ["storybook", logo("storybook.svg")],
  ["supabase", logo("supabase.svg")],
  ["figma", logo("figma.svg")],
  ["claude", logo("claude.svg")]
])
