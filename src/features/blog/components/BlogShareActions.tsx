import { useEffect, useState } from "react"

import { CheckIcon, LinkIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { Linkedin } from "@/components/ui/svgs/linkedin"
import { X } from "@/components/ui/svgs/x"
import * as m from "@/paraglide/messages.js"

type BlogShareActionsProps = { title: string; url: string }

const COPIED_MS = 2000
const iconButtonClass = cn(
  buttonVariants({ variant: "ghost", size: "icon" }),
  "size-8 text-muted-foreground"
)

/** Share the post on X or LinkedIn, or copy its link. */
export function BlogShareActions({ title, url }: BlogShareActionsProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), COPIED_MS)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch (error) {
      // Clipboard access can be denied; the address bar still has the link, so only report it.
      console.error(new Error("Could not copy the post link", { cause: error }))
    }
  }

  const links = [
    {
      label: m.share_x(),
      href: `https://x.com/intent/post?${new URLSearchParams({ text: title, url })}`,
      Icon: X
    },
    {
      label: m.share_linkedin(),
      href: `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams({ url })}`,
      Icon: Linkedin
    }
  ]
  const copyLabel = copied ? m.share_copied() : m.share_copy()

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">{m.share_title()}</span>
      <ul className="flex items-center gap-1">
        {links.map(({ label, href, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className={iconButtonClass}
            >
              <Icon aria-hidden className="size-4" />
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={copyLink}
            aria-label={copyLabel}
            title={copyLabel}
            className={iconButtonClass}
          >
            {copied ? <CheckIcon aria-hidden /> : <LinkIcon aria-hidden />}
          </button>
          {/* Announces the copy, since the label change alone is not read out. */}
          <span role="status" className="sr-only">
            {copied ? m.share_copied() : ""}
          </span>
        </li>
      </ul>
    </div>
  )
}
