import type { ComponentProps } from "react"

import { cn } from "cn"

import { surfaceDoubleFrameClass } from "@/components/shared/surface.styles"

type AboutFigureProps = ComponentProps<"img"> & { caption?: string }

/**
 * A photo with an optional short caption under it. Lazy by default: every photo but the intro's
 * sits below the fold.
 */
export function AboutFigure({ caption, className, loading = "lazy", ...props }: AboutFigureProps) {
  return (
    <figure className="flex flex-col gap-2">
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
