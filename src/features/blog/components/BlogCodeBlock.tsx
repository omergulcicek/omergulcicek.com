import type { ComponentProps } from "react"

import { CheckIcon, ChevronDownIcon, CopyIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { CODE_LANGUAGE_LABELS } from "@/features/blog/constants/code-languages.constants"

/** Blocks longer than this start collapsed to about this many lines. */
const COLLAPSE_AFTER_LINES = 25

export type CodeBlockLabels = {
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
 * language. A long block starts collapsed behind a fade, with a button to show all of it.
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
      className="group/code not-prose relative my-6 overflow-hidden rounded-xl border border-border bg-muted/40"
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
          <CopyIcon aria-hidden="true" className="group-data-copied:hidden" />
          <CheckIcon aria-hidden="true" className="hidden group-data-copied:block" />
        </button>
      </figcaption>
      <pre
        {...preProps}
        // Focusable, so a long line can still be scrolled by keyboard with the bar hidden.
        tabIndex={0}
        className={cn(
          className,
          // Scrolls sideways without a visible bar (trackpad, shift + wheel, or arrow keys once focused).
          "[scrollbar-width:none] overflow-x-auto p-4 text-sm leading-relaxed [&::-webkit-scrollbar]:hidden",
          // About 25 lines; only the last few fade, a short hard edge like shadcn's code previews.
          collapsible &&
            "max-h-[36rem] overflow-y-hidden [mask-image:linear-gradient(to_bottom,black_calc(100%-6rem),transparent_calc(100%-1.5rem))] group-data-expanded/code:max-h-none group-data-expanded/code:[mask-image:none]"
        )}
      />
      {collapsible ? (
        // Floats over the faded lines while collapsed, then settles under the code once open.
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center group-data-expanded/code:pointer-events-auto group-data-expanded/code:static group-data-expanded/code:pb-4">
          <button
            type="button"
            data-expand-code=""
            data-expand-label={labels.expand(lines)}
            data-collapse-label={labels.collapse}
            aria-expanded="false"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "group/expand pointer-events-auto rounded-lg shadow-sm"
            )}
          >
            <span data-expand-text="">{labels.expand(lines)}</span>
            <ChevronDownIcon
              aria-hidden="true"
              className="transition-[rotate] duration-150 ease-out group-aria-expanded/expand:rotate-180 motion-reduce:transition-none"
            />
          </button>
        </div>
      ) : null}
    </figure>
  )
}
