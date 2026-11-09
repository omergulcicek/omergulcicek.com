import { useEffect, useState } from "react"

import { cn } from "cn"

import { VIRASTACK_PRODUCTS } from "@/constants/virastack-products.constants"

import { mediaFrameClass } from "@/components/shared/surface.styles"
import * as m from "@/paraglide/messages.js"

/** How long each product stays lit. */
const STEP_MS = 650
/** Steps with nothing lit at the end of each round, so the loop breathes. */
const REST_STEPS = 2

/** A slight overshoot, close to a stiff spring, so a lit dot pops instead of sliding to size. */
const springEase = "ease-[cubic-bezier(0.34,1.56,0.64,1)]"

/** The lit product and the one before it, so the old name can leave upward as the new one enters. */
type Spotlight = { index: number | null; previous: number | null }

/**
 * The ViraStack products as a row of colored dots: one at a time grows while the others dim,
 * and "ViraStack <Product>" appears underneath; then a short rest. Hovering a dot lights it.
 * With reduced motion nothing cycles.
 */
export function JourneyProductsVisual() {
  const [auto, setAuto] = useState<Spotlight>({ index: null, previous: null })
  const [hover, setHover] = useState<Spotlight>({ index: null, previous: null })
  const spotlight = hover.index === null ? auto : hover
  const activeIndex = spotlight.index

  function hoverTo(index: number | null) {
    setHover((current) => ({ index, previous: current.index ?? auto.index }))
  }

  // A timer is an outside clock, the one thing an Effect is for here.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Starts from the rest, so the first tick lights the first product.
    let step = -1
    const timer = window.setInterval(() => {
      step = (step + 1) % (VIRASTACK_PRODUCTS.length + REST_STEPS)
      const next = step < VIRASTACK_PRODUCTS.length ? step : null
      setAuto((current) => ({ index: next, previous: current.index }))
    }, STEP_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    // Same width and frame as the journey photos, so it reads as one of them.
    <figure className={cn("w-full max-w-md overflow-hidden", mediaFrameClass)}>
      <div
        role="img"
        aria-label={m.journey_products_label({
          names: VIRASTACK_PRODUCTS.map((product) => product.name).join(", ")
        })}
        className="flex aspect-[2/1] flex-col items-center justify-center gap-1 bg-card/50"
      >
        <div aria-hidden className="flex items-center" onMouseLeave={() => hoverTo(null)}>
          {VIRASTACK_PRODUCTS.map(({ id, dotClass }, index) => (
            <span
              key={id}
              className="flex size-6 items-center justify-center"
              onMouseEnter={() => hoverTo(index)}
            >
              <span
                className={cn(
                  "block size-2.5 rounded-full transition-[scale,opacity] duration-400 motion-reduce:transition-none",
                  springEase,
                  dotClass,
                  activeIndex === index && "scale-150",
                  activeIndex !== null && activeIndex !== index && "opacity-35"
                )}
              />
            </span>
          ))}
        </div>
        {/* One fixed slot: the new name rises in, the old one rises out, both with a light blur. */}
        <div aria-hidden className="relative h-5 w-full text-sm">
          {VIRASTACK_PRODUCTS.map(({ id, name, colorClass }, index) => (
            <span
              key={id}
              className={cn(
                "absolute inset-x-0 top-0 block text-center whitespace-nowrap transition-[opacity,translate,filter] duration-180 ease-out motion-reduce:transition-none",
                index === activeIndex
                  ? "translate-y-0 opacity-100 blur-none"
                  : index === spotlight.previous
                    ? "-translate-y-1 opacity-0 blur-[2px]"
                    : "translate-y-1 opacity-0 blur-[2px]"
              )}
            >
              <span className="font-semibold text-foreground">ViraStack</span>{" "}
              <span className={cn("font-medium italic", colorClass)}>{name}</span>
            </span>
          ))}
        </div>
      </div>
    </figure>
  )
}
