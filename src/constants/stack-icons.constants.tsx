import { Fragment } from "react"
import type { ReactNode } from "react"

import { cn } from "cn"

import { ClaudeAiIcon } from "@/components/ui/svgs/claudeAiIcon"
import { Figma } from "@/components/ui/svgs/figma"
import { Motion } from "@/components/ui/svgs/motion"
import { MotionDark } from "@/components/ui/svgs/motionDark"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Playwright } from "@/components/ui/svgs/playwright"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { Storybook } from "@/components/ui/svgs/storybook"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { TanstackDark } from "@/components/ui/svgs/tanstackDark"
import { TanstackLight } from "@/components/ui/svgs/tanstackLight"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Vite } from "@/components/ui/svgs/vite"
import { Vitest } from "@/components/ui/svgs/vitest"
import { Zod } from "@/components/ui/svgs/zod"

const iconClass = "size-10"

/** Brand icons for `me.stack`, keyed by id. Logos with light and dark versions swap with the theme. */
export const STACK_ICONS = new Map<string, ReactNode>([
  ["typescript", <Typescript key="typescript" aria-hidden className={iconClass} />],
  [
    "react",
    <Fragment key="react">
      <ReactLight aria-hidden className={cn(iconClass, "dark:hidden")} />
      <ReactDark aria-hidden className={cn(iconClass, "hidden dark:block")} />
    </Fragment>
  ],
  ["nextjs", <NextjsIconDark key="nextjs" aria-hidden className={iconClass} />],
  [
    "tanstack",
    <Fragment key="tanstack">
      <TanstackLight aria-hidden className={cn(iconClass, "dark:hidden")} />
      <TanstackDark aria-hidden className={cn(iconClass, "hidden dark:block")} />
    </Fragment>
  ],
  ["vite", <Vite key="vite" aria-hidden className={iconClass} />],
  ["tailwindcss", <Tailwindcss key="tailwindcss" aria-hidden className={iconClass} />],
  ["shadcn", <ShadcnUi key="shadcn" aria-hidden className={iconClass} />],
  [
    "motion",
    <Fragment key="motion">
      <Motion aria-hidden className={cn(iconClass, "dark:hidden")} />
      <MotionDark aria-hidden className={cn(iconClass, "hidden dark:block")} />
    </Fragment>
  ],
  // React Hook Form and Zustand are not in svgl; their files live in public/logos/stack.
  [
    "react-hook-form",
    <img
      key="react-hook-form"
      src="/logos/stack/react-hook-form.svg"
      alt=""
      width={40}
      height={40}
      loading="lazy"
      className={iconClass}
    />
  ],
  ["zod", <Zod key="zod" aria-hidden className={iconClass} />],
  [
    "zustand",
    <img
      key="zustand"
      src="/logos/stack/zustand-56.webp"
      srcSet="/logos/stack/zustand-56.webp 1x, /logos/stack/zustand-112.webp 2x"
      alt=""
      width={40}
      height={40}
      loading="lazy"
      className={iconClass}
    />
  ],
  ["vitest", <Vitest key="vitest" aria-hidden className={iconClass} />],
  ["playwright", <Playwright key="playwright" aria-hidden className={iconClass} />],
  ["storybook", <Storybook key="storybook" aria-hidden className={iconClass} />],
  ["supabase", <Supabase key="supabase" aria-hidden className={iconClass} />],
  ["figma", <Figma key="figma" aria-hidden className={iconClass} />],
  ["claude", <ClaudeAiIcon key="claude" aria-hidden className={iconClass} />]
])
