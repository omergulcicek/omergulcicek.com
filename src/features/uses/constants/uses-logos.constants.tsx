import { Fragment } from "react"
import type { ReactNode } from "react"

import {
  ClapperboardIcon,
  LibraryBigIcon,
  MusicIcon,
  PaletteIcon,
  SquareTerminalIcon
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "cn"

import { VIRASTACK_PRODUCTS } from "@/constants/virastack-products.constants"

import { Chrome } from "@/components/ui/svgs/chrome"
import { ClaudeAiIcon } from "@/components/ui/svgs/claudeAiIcon"
import { CursorDark } from "@/components/ui/svgs/cursorDark"
import { CursorLight } from "@/components/ui/svgs/cursorLight"
import { Figma } from "@/components/ui/svgs/figma"
import { Git } from "@/components/ui/svgs/git"
import { GithubLight } from "@/components/ui/svgs/githubLight"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Pnpm } from "@/components/ui/svgs/pnpm"
import { PnpmDark } from "@/components/ui/svgs/pnpmDark"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { TanstackDark } from "@/components/ui/svgs/tanstackDark"
import { TanstackLight } from "@/components/ui/svgs/tanstackLight"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Vercel } from "@/components/ui/svgs/vercel"
import { VercelDark } from "@/components/ui/svgs/vercelDark"
import { Zod } from "@/components/ui/svgs/zod"

const logoClass = "size-5 shrink-0"

// ViraStack AI uses its product icon and color, the same as on the projects page.
const virastackAi = VIRASTACK_PRODUCTS.find((product) => product.id === "ai")

/** A logo drawn twice, one per theme, so it never needs JavaScript to pick. */
function themed(key: string, light: ReactNode, dark: ReactNode) {
  return (
    <Fragment key={key}>
      <span className="contents dark:hidden">{light}</span>
      <span className="hidden dark:contents">{dark}</span>
    </Fragment>
  )
}

/** A small round image from public/logos/uses, for things with a picture but no logo. */
function avatar(name: string) {
  return (
    <img
      src={`/logos/uses/${name}-20.webp`}
      srcSet={`/logos/uses/${name}-20.webp 1x, /logos/uses/${name}-40.webp 2x`}
      alt=""
      width={20}
      height={20}
      className={cn(logoClass, "rounded-full")}
    />
  )
}

/** For tools without a logo in svgl (the terminal) and for this site's own pages. */
const glyph = (Icon: LucideIcon) => (
  <Icon aria-hidden strokeWidth={1.75} className={cn(logoClass, "text-muted-foreground")} />
)

/**
 * Logos for the uses page, keyed by name. Brand logos come from svgl (src/components/ui/svgs);
 * the macOS Terminal has none, so it gets a plain glyph. The hardware rows go without a logo.
 */
export const USES_LOGOS = {
  cursor: themed(
    "cursor",
    <CursorLight aria-hidden className={logoClass} />,
    <CursorDark aria-hidden className={logoClass} />
  ),
  terminal: glyph(SquareTerminalIcon),
  pnpm: themed(
    "pnpm",
    <Pnpm aria-hidden className={logoClass} />,
    <PnpmDark aria-hidden className={logoClass} />
  ),
  git: <Git aria-hidden className={logoClass} />,
  claude: <ClaudeAiIcon aria-hidden className={logoClass} />,
  "virastack-ai": virastackAi ? (
    <virastackAi.Icon
      aria-hidden
      strokeWidth={1.75}
      className={cn(logoClass, virastackAi.colorClass)}
    />
  ) : null,
  // The GitHub mark is drawn in currentColor, so one version suits both themes.
  github: <GithubLight aria-hidden className={logoClass} />,
  typescript: <Typescript aria-hidden className={logoClass} />,
  react: themed(
    "react",
    <ReactLight aria-hidden className={logoClass} />,
    <ReactDark aria-hidden className={logoClass} />
  ),
  nextjs: <NextjsIconDark aria-hidden className={logoClass} />,
  tanstack: themed(
    "tanstack",
    <TanstackLight aria-hidden className={logoClass} />,
    <TanstackDark aria-hidden className={logoClass} />
  ),
  tailwind: <Tailwindcss aria-hidden className={logoClass} />,
  shadcn: <ShadcnUi aria-hidden className={logoClass} />,
  "react-hook-form": (
    <img
      src="/logos/stack/react-hook-form.svg"
      alt=""
      width={20}
      height={20}
      className={logoClass}
    />
  ),
  zod: <Zod aria-hidden className={logoClass} />,
  zustand: (
    <img
      src="/logos/stack/zustand-56.webp"
      srcSet="/logos/stack/zustand-56.webp 1x, /logos/stack/zustand-112.webp 2x"
      alt=""
      width={20}
      height={20}
      className={logoClass}
    />
  ),
  "emil-skills": avatar("emil-skills"),
  "jakub-skills": avatar("jakub-skills"),
  supabase: <Supabase aria-hidden className={logoClass} />,
  vercel: themed(
    "vercel",
    <Vercel aria-hidden className={logoClass} />,
    <VercelDark aria-hidden className={logoClass} />
  ),
  figma: <Figma aria-hidden className={logoClass} />,
  chrome: <Chrome aria-hidden className={logoClass} />,
  library: glyph(LibraryBigIcon),
  films: glyph(ClapperboardIcon),
  music: glyph(MusicIcon),
  hobbies: glyph(PaletteIcon)
} satisfies Record<string, ReactNode>

export type UsesLogo = keyof typeof USES_LOGOS
