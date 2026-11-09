import { MdxDetailCard } from "@/features/blog/components/mdx/MdxDetailCard"
import type { MdxDetailRow } from "@/features/blog/components/mdx/MdxDetailCard"
import { MdxScore } from "@/features/blog/components/mdx/MdxScore"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type MdxBookInfoProps = {
  locale: Locale
  title: string
  bookLink?: string
  author?: string
  authorLink?: string
  translator?: string
  translatorLink?: string
  publisher?: string
  publisherLink?: string
  pages?: number
  year?: number
  /** Out of 5, halves allowed. */
  myScore?: number
  isFavorite?: boolean
}

/** `<BookInfo>`: the book a review post is about. */
export function MdxBookInfo({ locale, ...book }: MdxBookInfoProps) {
  const rows: MdxDetailRow[] = []
  if (book.author)
    rows.push({ label: m.mdx_author({}, { locale }), value: book.author, href: book.authorLink })
  if (book.translator)
    rows.push({
      label: m.mdx_translator({}, { locale }),
      value: book.translator,
      href: book.translatorLink
    })
  if (book.publisher)
    rows.push({
      label: m.mdx_publisher({}, { locale }),
      value: book.publisher,
      href: book.publisherLink
    })
  if (book.pages)
    rows.push({
      label: m.mdx_pages({}, { locale }),
      value: <span className="tabular-nums">{book.pages.toLocaleString(locale)}</span>
    })
  if (book.year)
    rows.push({
      label: m.mdx_year({}, { locale }),
      value: <span className="tabular-nums">{book.year}</span>
    })

  return (
    <MdxDetailCard
      title={book.title}
      href={book.bookLink}
      rows={rows}
      footer={
        book.myScore === undefined ? null : (
          <span className="flex items-center justify-between gap-3 text-sm">
            <span className="text-muted-foreground">{m.mdx_my_score({}, { locale })}</span>
            <MdxScore score={book.myScore} favorite={book.isFavorite} locale={locale} />
          </span>
        )
      }
    />
  )
}
