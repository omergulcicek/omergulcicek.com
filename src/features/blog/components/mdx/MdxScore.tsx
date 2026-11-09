import { HeartIcon, StarIcon } from "lucide-react"
import { cn } from "cn"

import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type MdxScoreProps = { score: number; favorite?: boolean; locale: Locale }

/**
 * A score out of five as stars (half stars allowed), with the number for screen readers and
 * copy-paste. A favorite gets a heart beside it.
 */
export function MdxScore({ score, favorite = false, locale }: MdxScoreProps) {
  const label = m.mdx_score_value({ score: score.toLocaleString(locale) }, { locale })

  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.max(0, Math.min(1, score - (star - 1)))

          return (
            <span key={star} className="relative size-3.5">
              <StarIcon className="absolute inset-0 size-3.5 text-muted-foreground/40" />
              {/* A clipped filled star on top draws whole and half stars alike. */}
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <StarIcon className="size-3.5 fill-current text-foreground" />
              </span>
            </span>
          )
        })}
      </span>
      <span className="text-xs text-muted-foreground tabular-nums">{label}</span>
      {favorite ? (
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <HeartIcon aria-hidden className={cn("size-3.5 fill-current text-foreground")} />
          {m.mdx_favorite({}, { locale })}
        </span>
      ) : null}
    </span>
  )
}
