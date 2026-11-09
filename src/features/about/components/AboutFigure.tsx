import type { ComponentProps } from "react"

import { cn } from "cn"

import { surfaceDoubleFrameClass } from "@/components/shared/surface.styles"
import { useRevealOnScroll } from "@/features/about/hooks/use-reveal-on-scroll"

type AboutFigureProps = ComponentProps<"img"> & { caption?: string }

/**
 * A photo with an optional short caption under it. Lazy by default: every photo but the intro's
 * sits below the fold, and those open from the bottom as they scroll into view.
 */
export function AboutFigure({ caption, className, loading = "lazy", ...props }: AboutFigureProps) {
  const revealRef = useRevealOnScroll<HTMLElement>(loading === "lazy")

  return (
    <figure ref={revealRef} className="flex flex-col gap-2">
      <img
        loading={loading}
        decoding="async"
        className={cn("w-full object-cover", surfaceDoubleFrameClass, className)}
        {...props}
      />
      {caption ? (
        <figcaption className="text-center text-sm text-pretty text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
