import { lazy, Suspense, useEffect, useEffectEvent } from "react"

import { SearchIcon } from "lucide-react"
import { cn } from "cn"

import type { CommandPaletteGroup } from "@/components/shared/CommandPaletteDialog"
import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"

// cmdk and the dialog stay out of every page's bundle until the palette first opens.
const CommandPaletteDialog = lazy(() =>
  import("@/components/shared/CommandPaletteDialog").then((mod) => ({
    default: mod.CommandPaletteDialog
  }))
)

type CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  groups: CommandPaletteGroup[]
  loading: boolean
}

/**
 * The header's search button and its ⌘K / Ctrl+K shortcut. The data comes from the caller, since
 * shared components cannot read a feature's posts.
 */
export function CommandPalette({ open, onOpenChange, groups, loading }: CommandPaletteProps) {
  const toggle = useEffectEvent(() => onOpenChange(!open))

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggle()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(true)}
        aria-keyshortcuts="Meta+K Control+K"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "h-8 gap-2 px-2 font-normal text-muted-foreground sm:w-48 sm:justify-start sm:px-2.5"
        )}
      >
        <SearchIcon aria-hidden className="size-4" />
        <span className="sr-only sm:not-sr-only">{m.search_open()}</span>
        <kbd
          aria-hidden
          className="ml-auto hidden rounded border border-border bg-muted px-1.5 font-mono text-[11px] leading-5 sm:inline"
        >
          ⌘K
        </kbd>
      </button>
      {open ? (
        <Suspense fallback={null}>
          <CommandPaletteDialog
            open={open}
            onOpenChange={onOpenChange}
            groups={groups}
            loading={loading}
          />
        </Suspense>
      ) : null}
    </>
  )
}
