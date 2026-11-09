import { me } from "@/constants/me.constants"
import { STACK_ICONS } from "@/constants/stack-icons.constants"

import { localize } from "@/helpers/localize"

import { Marquee } from "@/components/ui/marquee"
import * as m from "@/paraglide/messages.js"

/** Changes the speed of every CSS animation inside, keeping its position: no jump, no restart. */
function setPlaybackRate(element: HTMLElement, rate: number) {
  for (const animation of element.getAnimations({ subtree: true })) {
    animation.updatePlaybackRate(rate)
  }
}

export function HomeStackStrip() {
  const items = me.stack.map((item) => ({
    ...item,
    icon: STACK_ICONS.get(item.id),
    description: localize(item.description)
  }))

  const renderItem = ({ id, label, description, icon }: (typeof items)[number]) => (
    <figure key={id} className="flex w-28 shrink-0 flex-col items-center gap-2 text-center">
      <span className="flex size-12 items-center justify-center">{icon}</span>
      <figcaption className="flex flex-col gap-0.5">
        <span className="text-xs font-medium text-foreground">{label}</span>
        <span className="text-xs leading-tight text-muted-foreground">{description}</span>
      </figcaption>
    </figure>
  )

  return (
    <section aria-label={m.stack_label()}>
      {/* Screen readers and reduced-motion users get one static, wrapping list. */}
      <ul className="sr-only motion-reduce:not-sr-only motion-reduce:flex motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6">
        {items.map((item) => (
          <li key={item.id}>{renderItem(item)}</li>
        ))}
      </ul>
      {/* The moving copy repeats the list for the loop, so it stays hidden from assistive tech. */}
      {/* Hover slows the strip to a quarter speed instead of stopping it dead. */}
      <div
        aria-hidden
        className="mask-x-from-90% mask-x-to-100% motion-reduce:hidden"
        onPointerEnter={(event) => setPlaybackRate(event.currentTarget, 0.25)}
        onPointerLeave={(event) => setPlaybackRate(event.currentTarget, 1)}
      >
        <Marquee repeat={2} className="py-2 [--duration:60s] [--gap:1.5rem]">
          {items.map(renderItem)}
        </Marquee>
      </div>
    </section>
  )
}
