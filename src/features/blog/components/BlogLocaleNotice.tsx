import { InfoIcon } from "lucide-react"
import { cn } from "cn"

import { RichMessage } from "@/components/shared/RichMessage"
import { textLinkClass } from "@/components/shared/surface.styles"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"
import { baseLocale, getLocale, localizeHref } from "@/paraglide/runtime.js"

type BlogLocaleNoticeProps = { category: BlogCategory }

/**
 * Outside the base locale, says what the list holds: the blog only that language's posts, the
 * notes the Turkish ones. A link leads to the full list in Turkish.
 */
export function BlogLocaleNotice({ category }: BlogLocaleNoticeProps) {
  if (getLocale() === baseLocale) return null

  const message = category === "technical" ? m.blog_locale_notice() : m.notes_locale_notice()
  const tags = {
    link: (chunk: string) =>
      category === "technical" ? (
        // A plain link: switching languages loads a new document, so the server and URL agree.
        <a
          href={localizeHref("/blog", { locale: baseLocale })}
          className={cn(textLinkClass, "text-foreground")}
        >
          {chunk}
        </a>
      ) : (
        chunk
      )
  }

  return (
    <p className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm leading-6 text-pretty text-muted-foreground">
      <InfoIcon aria-hidden className="mt-1 size-4 shrink-0" />
      <span>
        <RichMessage message={message} tags={tags} />
      </span>
    </p>
  )
}
