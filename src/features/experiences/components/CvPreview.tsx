import { useState } from "react"
import type { MouseEvent } from "react"

import { DownloadIcon, ExternalLinkIcon, EyeIcon, XIcon } from "lucide-react"
import { cn } from "cn"

import { formatYearMonth } from "@/helpers/format-year-month"

import {
  linkedCardClass,
  surfaceDoubleFrameClass,
  textLinkClass
} from "@/components/shared/surface.styles"
import { buttonVariants } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

/** The v10 file names, kept so links shared before (LinkedIn, applications) still work. */
const CV_FILES = { tr: "/omergulcicek_cv.pdf", en: "/omergulcicek_eng_cv.pdf" } as const

/** First pages, rendered from the PDFs; re-render them when a CV changes. */
const CV_THUMBNAILS = { tr: "/media/cv/cv-tr.webp", en: "/media/cv/cv-en.webp" } as const

/** Both PDFs have the same pages and date; update these with the files. */
const CV_PAGES = 3
const CV_UPDATED = "2026-10"

type CvLang = keyof typeof CV_FILES

/*
 * Mobile browsers do not render a PDF inside an iframe (Android shows a download prompt, iOS
 * only the first page), so the preview dialog is for desktop; elsewhere the link opens the
 * browser's own PDF viewer in a new tab, which has its own download button.
 */
const INLINE_PDF_QUERY = "(min-width: 1024px) and (pointer: fine)"

function getTitle(lang: CvLang) {
  return lang === "tr" ? m.cv_preview_title_tr() : m.cv_preview_title_en()
}

/** Both resumes, previewed before any download. The page's language comes first. */
export function CvPreview() {
  const [open, setOpen] = useState<CvLang | null>(null)
  const locale = getLocale()
  const langs = locale === "en" ? (["en", "tr"] as const) : (["tr", "en"] as const)

  function handleClick(event: MouseEvent<HTMLAnchorElement>, lang: CvLang) {
    if (!window.matchMedia(INLINE_PDF_QUERY).matches) return
    event.preventDefault()
    setOpen(lang)
  }

  const [primary, other] = langs

  return (
    <>
      {/*
       * A document card rather than buttons: the first page says "this is a CV" at a glance.
       * The title link stretches over the card; the other language sits above it (z-10).
       */}
      <div
        className={cn(
          "relative flex items-center gap-4 bg-background p-3 sm:max-w-sm",
          surfaceDoubleFrameClass,
          linkedCardClass
        )}
      >
        <img
          src={CV_THUMBNAILS[primary]}
          alt=""
          width={240}
          height={340}
          className="w-14 shrink-0 rounded-sm border border-border bg-white shadow-xs"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <a
            href={CV_FILES[primary]}
            target="_blank"
            rel="noreferrer"
            hrefLang={primary}
            type="application/pdf"
            aria-haspopup="dialog"
            onClick={(event) => handleClick(event, primary)}
            className="font-medium outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"
          >
            {m.cv_card_title()}
          </a>
          <p className="text-sm text-muted-foreground">
            {m.cv_card_meta({ pages: CV_PAGES, date: formatYearMonth(CV_UPDATED, locale) })}
          </p>
          <a
            href={CV_FILES[other]}
            target="_blank"
            rel="noreferrer"
            hrefLang={other}
            type="application/pdf"
            aria-haspopup="dialog"
            onClick={(event) => handleClick(event, other)}
            className={cn(
              textLinkClass,
              "relative z-10 w-fit text-sm text-muted-foreground hover:text-foreground"
            )}
          >
            {other === "en" ? m.cv_alt_en() : m.cv_alt_tr()}
          </a>
        </div>
        <EyeIcon
          aria-hidden
          className="size-4 shrink-0 self-start text-muted-foreground transition-colors duration-150 ease-out group-hover:text-foreground"
        />
      </div>
      <Dialog open={open !== null} onOpenChange={(next) => (next ? null : setOpen(null))}>
        <DialogContent
          showCloseButton={false}
          className="flex h-[90dvh] w-[calc(100%-2rem)] max-w-4xl flex-col gap-0 overflow-hidden p-0"
        >
          {open ? (
            <>
              <div className="flex items-center justify-between gap-3 border-b border-border py-2 pr-2 pl-5">
                <DialogTitle className="text-base">{getTitle(open)}</DialogTitle>
                <div className="flex items-center gap-1">
                  <a href={CV_FILES[open]} download className={cn(buttonVariants({ size: "sm" }))}>
                    <DownloadIcon aria-hidden />
                    {m.cv_download()}
                  </a>
                  <a
                    href={CV_FILES[open]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={m.cv_open_tab()}
                    title={m.cv_open_tab()}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-8")}
                  >
                    <ExternalLinkIcon aria-hidden />
                  </a>
                  <DialogClose
                    aria-label={m.dialog_close()}
                    title={m.dialog_close()}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-8")}
                  >
                    <XIcon aria-hidden />
                  </DialogClose>
                </div>
              </div>
              <iframe
                src={`${CV_FILES[open]}#view=FitH&navpanes=0`}
                title={getTitle(open)}
                className="w-full flex-1 bg-muted"
              />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
