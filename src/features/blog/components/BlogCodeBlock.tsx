import type { ComponentProps } from "react"

import { CheckIcon, ChevronDownIcon, CopyIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { CODE_LANGUAGE_LABELS } from "@/features/blog/constants/code-languages.constants"

/** Blocks longer than this start collapsed to about this many lines. */
const COLLAPSE_AFTER_LINES = 25

type CodeBlockLabels = {
  copy: string
  copied: string
  collapse: string
  expand: (lines: number) => string
}

type BlogCodeBlockProps = ComponentProps<"pre"> & {
  "data-title"?: string
  "data-language"?: string
  "data-lines"?: number
  labels: CodeBlockLabels
}

/**
 * A Shiki `pre` with a header: the file name when the fence has `title="…"`, else the
 * language. A long block starts collapsed with a hard cut, above a full-width row that shows all of it.
 * Rendered to static HTML on the server, so BlogPostArticle wires both buttons.
 */
export function BlogCodeBlock({
  "data-title": title,
  "data-language": language,
  "data-lines": lines = 0,
  labels,
  className,
  ...preProps
}: BlogCodeBlockProps) {
  const languageLabel =
    language && language !== "text" ? (CODE_LANGUAGE_LABELS.get(language) ?? language) : null
  const collapsible = lines > COLLAPSE_AFTER_LINES

  return (
    <figure
      data-collapsible={collapsible ? "" : undefined}
      // White in light mode: Shiki's light colors and the muted label lose AA contrast on muted.
      className="group/code not-prose my-6 overflow-hidden rounded-xl border border-border bg-background dark:bg-muted"
    >
      <figcaption className="flex h-10 items-center justify-between gap-2 border-b border-border pr-1 pl-4 text-xs text-muted-foreground">
        {/* A file name is code, a language label is a word. */}
        <span className={cn("truncate", title && "font-mono")}>{title ?? languageLabel}</span>
        <button
          type="button"
          data-copy-code=""
          data-copy-label={labels.copy}
          data-copied-label={labels.copied}
          aria-label={labels.copy}
          title={labels.copy}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "group size-8 text-muted-foreground"
          )}
        >
          <span className="icon-swap">
            <CopyIcon aria-hidden="true" />
            <CheckIcon aria-hidden="true" />
          </span>
        </button>
      </figcaption>
      <pre
        {...preProps}
        // Focusable, so a long line can still be scrolled by keyboard with the bar hidden.
        tabIndex={0}
        className={cn(
          className,
          // Scrolls sideways without a visible bar (trackpad, shift + wheel, or arrow keys once focused).
          "[scrollbar-width:none] overflow-x-auto p-4 text-sm [&::-webkit-scrollbar]:hidden",
          // About 25 lines, cut hard; the expand row below marks the cut, so no fade is needed.
          collapsible && "max-h-[36rem] overflow-y-hidden group-data-expanded/code:max-h-none"
        )}
      />
      {collapsible ? (
        // A full-width row under the code, collapsed or open, so the cut always has an edge.
        <button
          type="button"
          data-expand-code=""
          data-expand-label={labels.expand(lines)}
          data-collapse-label={labels.collapse}
          aria-expanded="false"
          className="group/expand flex h-10 w-full items-center justify-center gap-2 border-t border-border text-sm text-muted-foreground transition-colors duration-150 ease-out outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-inset"
        >
          <span data-expand-text="">{labels.expand(lines)}</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="size-4 transition-[rotate] duration-150 ease-out group-aria-expanded/expand:rotate-180 motion-reduce:transition-none"
          />
        </button>
      ) : null}
    </figure>
  )
}
