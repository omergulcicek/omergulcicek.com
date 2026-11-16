import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type MdxButtonVariantsProps = { locale: Locale }

// shadcn/ui calls its primary button `default`, so the label and the variant name differ there.
const VARIANTS = [
  { label: "Primary", variant: "default" },
  { label: "Secondary", variant: "secondary" },
  { label: "Outline", variant: "outline" },
  { label: "Ghost", variant: "ghost" },
  { label: "Link", variant: "link" },
  // Not a weight but a meaning, so it closes the row instead of sitting in the scale.
  { label: "Destructive", variant: "destructive" }
] as const

/**
 * `<ButtonVariants>`: shadcn/ui's button variants side by side, strongest to weakest. Static,
 * so it needs no island.
 */
export function MdxButtonVariants({ locale }: MdxButtonVariantsProps) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-xl border border-border">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 bg-background p-4 sm:grid-cols-3">
        {VARIANTS.map(({ label, variant }) => (
          <li key={variant} className="flex flex-col items-center gap-2">
            {/* Real buttons with no action, so hover, press and focus show each variant's states. */}
            <button type="button" className={buttonVariants({ variant })}>
              {label}
            </button>
            <code className="font-mono text-xs text-muted-foreground">{variant}</code>
          </li>
        ))}
      </ul>
      <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
        {m.mdx_button_variants_caption({}, { locale })}
      </figcaption>
    </figure>
  )
}
