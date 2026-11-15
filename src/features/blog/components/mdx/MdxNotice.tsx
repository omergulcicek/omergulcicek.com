import type { ReactNode } from "react"

import { InfoIcon, TriangleAlertIcon } from "lucide-react"
import { cn } from "cn"

type MdxNoticeProps = {
  title: string
  /** `warning` for content that has gone out of date, `info` for a side note. */
  variant?: "info" | "warning"
  children?: ReactNode
}

/** `<BlogNotice>`: a note at the top or inside a post, such as "this package moved". */
export function MdxNotice({ title, variant = "info", children }: MdxNoticeProps) {
  const Icon = variant === "warning" ? TriangleAlertIcon : InfoIcon

  return (
    <aside
      role="note"
      className={cn(
        // Both variants share one frame; the icon shape and color tell them apart.
        "not-prose my-6 flex gap-3 rounded-xl border border-border bg-muted p-4 text-sm"
      )}
    >
      <Icon
        aria-hidden
        className={cn(
          "size-4 shrink-0 translate-y-0.5",
          variant === "warning" ? "text-foreground" : "text-muted-foreground"
        )}
      />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="font-medium text-foreground">{title}</p>
        {/* Links inside keep the prose link style. */}
        <div className="text-pretty text-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-brand/50 [&_a]:underline-offset-4 [&_a:hover]:decoration-brand">
          {children}
        </div>
      </div>
    </aside>
  )
}
