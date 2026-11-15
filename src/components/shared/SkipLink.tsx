import * as m from "@/paraglide/messages.js"

type SkipLinkProps = { targetId: string }

/**
 * The first stop for keyboard users: hidden until focused, then it jumps past the header and
 * the menu to the page's content. Above the sticky header, so it is never covered.
 */
export function SkipLink({ targetId }: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      // Parked above the window rather than sr-only: not-sr-only would reset its padding to 0.
      className="fixed top-4 left-4 z-50 -translate-y-16 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground outline-none focus-visible:translate-y-0 focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      {m.skip_to_content()}
    </a>
  )
}
