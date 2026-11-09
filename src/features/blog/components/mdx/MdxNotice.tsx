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
        "not-prose my-6 flex gap-3 rounded-xl border bg-muted/40 p-4 text-sm leading-6",
        variant === "warning" ? "border-foreground/25" : "border-border"
      )}
    >
      <Icon
        aria-hidden
        className={cn(
          "mt-1 size-4 shrink-0",
          variant === "warning" ? "text-foreground" : "text-muted-foreground"
        )}
      />
      <div className="flex min-w-0 flex-col gap-1">
        <p className="font-medium text-foreground">{title}</p>
        {/* Links inside keep the prose link style. */}
        <div className="text-pretty text-foreground/80 [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-current/30 [&_a]:underline-offset-4 [&_a:hover]:decoration-current">
          {children}
        </div>
      </div>
    </aside>
  )
}
