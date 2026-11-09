import { useState, useSyncExternalStore } from "react"

import { RotateCcwIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

export const CSS_DEMOS = [
  "corner-shape",
  "clip-path",
  "picker-icon",
  "sibling-index",
  "stretch",
  "text-box"
] as const

export type CssDemoName = (typeof CSS_DEMOS)[number]

/*
 * Each option pairs the CSS it shows with a static Tailwind class for the preview, so the
 * compiler sees every class in this file. Unknown properties stay valid CSS in the class.
 */
type CssOption = { label: string; code: string; className: string }

type CssDemoConfig = {
  supports: () => boolean
  caniuse: string
  options: readonly CssOption[]
  initial: number
}

const DEMOS: Record<CssDemoName, CssDemoConfig> = {
  "corner-shape": {
    supports: () => CSS.supports("corner-shape", "squircle"),
    caniuse: "https://caniuse.com/wf-corner-shape",
    initial: 1,
    options: [
      { label: "round", code: "corner-shape: round;", className: "[corner-shape:round]" },
      { label: "scoop", code: "corner-shape: scoop;", className: "[corner-shape:scoop]" },
      { label: "bevel", code: "corner-shape: bevel;", className: "[corner-shape:bevel]" },
      { label: "notch", code: "corner-shape: notch;", className: "[corner-shape:notch]" },
      { label: "squircle", code: "corner-shape: squircle;", className: "[corner-shape:squircle]" }
    ]
  },
  "clip-path": {
    supports: () => CSS.supports("clip-path", "circle(50%)"),
    caniuse: "https://caniuse.com/css-clip-path",
    initial: 0,
    options: [
      {
        label: "circle",
        code: "clip-path: circle(40% at 50% 50%);",
        className: "[clip-path:circle(40%_at_50%_50%)]"
      },
      {
        label: "ellipse",
        code: "clip-path: ellipse(45% 35% at 50% 50%);",
        className: "[clip-path:ellipse(45%_35%_at_50%_50%)]"
      },
      {
        label: "polygon",
        code: "clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);",
        className: "[clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"
      },
      {
        label: "inset",
        code: "clip-path: inset(15% 10% round 12%);",
        className: "[clip-path:inset(15%_10%_round_12%)]"
      }
    ]
  },
  "picker-icon": {
    supports: () => CSS.supports("selector(::picker-icon)"),
    caniuse: "https://caniuse.com/mdn-css_selectors_picker-icon",
    initial: 0,
    options: [
      {
        label: "🔥",
        code: 'select::picker-icon { content: "🔥"; }',
        className: "[&::picker-icon]:content-['🔥']"
      },
      {
        label: "🧠",
        code: 'select::picker-icon { content: "🧠"; }',
        className: "[&::picker-icon]:content-['🧠']"
      },
      {
        label: "🌊",
        code: 'select::picker-icon { content: "🌊"; }',
        className: "[&::picker-icon]:content-['🌊']"
      },
      {
        label: "💎",
        code: 'select::picker-icon { content: "💎"; }',
        className: "[&::picker-icon]:content-['💎']"
      }
    ]
  },
  "sibling-index": {
    supports: () => CSS.supports("width", "calc(sibling-index() * 1px)"),
    caniuse: "https://caniuse.com/wf-sibling-count",
    initial: 0,
    options: [
      {
        label: "100ms",
        code: "animation-delay: calc(sibling-index() * 100ms);",
        className: "[animation-delay:calc(sibling-index()*100ms)]"
      },
      {
        label: "250ms",
        code: "animation-delay: calc(sibling-index() * 250ms);",
        className: "[animation-delay:calc(sibling-index()*250ms)]"
      }
    ]
  },
  stretch: {
    supports: () => CSS.supports("width", "stretch"),
    caniuse: "https://caniuse.com/css-width-stretch",
    initial: 0,
    options: [
      { label: "100%", code: "width: 100%;", className: "[width:100%]" },
      { label: "stretch", code: "width: stretch;", className: "[width:stretch]" }
    ]
  },
  "text-box": {
    supports: () => CSS.supports("text-box", "trim-both cap alphabetic"),
    caniuse: "https://caniuse.com/mdn-css_properties_text-box",
    initial: 0,
    options: [
      { label: "normal", code: "text-box: normal;", className: "[text-box:normal]" },
      {
        label: "trim-both",
        code: "text-box: trim-both cap alphabetic;",
        className: "[text-box:trim-both_cap_alphabetic]"
      }
    ]
  }
}

const subscribeNever = () => () => {}

function Preview({
  demo,
  option,
  replay
}: {
  demo: CssDemoName
  option: CssOption
  replay: number
}) {
  if (demo === "corner-shape") {
    return (
      <div
        className={cn(
          "flex h-28 w-full max-w-xs items-center justify-center rounded-[2rem] bg-primary text-sm font-medium text-primary-foreground",
          option.className
        )}
      >
        corner-shape
      </div>
    )
  }
  if (demo === "clip-path") {
    return <div className={cn("size-40 bg-primary", option.className)} />
  }
  if (demo === "picker-icon") {
    return (
      <select
        aria-label="picker-icon"
        className={cn(
          "h-9 [appearance:base-select] rounded-md border border-input bg-background px-3 text-sm [&::picker(select)]:[appearance:base-select]",
          option.className
        )}
      >
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
      </select>
    )
  }
  if (demo === "sibling-index") {
    return (
      // key restarts the animation when Replay is pressed.
      <ul key={replay} className="flex gap-2">
        {["A", "B", "C", "D", "E"].map((item) => (
          <li
            key={item}
            className={cn(
              "flex size-10 animate-[sibling-pop_0.4s_ease_both] items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground",
              option.className
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    )
  }
  if (demo === "stretch") {
    return (
      <div className="w-full max-w-sm rounded-md border border-dashed border-border p-0">
        <div
          className={cn(
            "m-4 rounded-md bg-primary p-3 text-sm text-primary-foreground",
            option.className
          )}
        >
          margin: 1rem; {option.code}
        </div>
      </div>
    )
  }
  return (
    <p
      className={cn(
        "bg-primary px-3 text-3xl font-semibold text-primary-foreground",
        option.className
      )}
    >
      Text box
    </p>
  )
}

type CssDemoProps = { demo: CssDemoName; locale: Locale }

/**
 * The live demos of the new-CSS post: pick a value, see it applied, read the line of CSS.
 * Rendered on the server with the first value, then made interactive in the browser.
 */
export function CssDemo({ demo, locale }: CssDemoProps) {
  const config = DEMOS[demo]
  const [selected, setSelected] = useState(config.initial)
  const [replay, setReplay] = useState(0)
  // The server cannot know; it assumes support so the first paint shows no warning.
  const supported = useSyncExternalStore(subscribeNever, config.supports, () => true)
  const option = config.options[selected] ?? config.options[0]
  if (!option) return null

  return (
    <div className="not-prose my-8 flex flex-col overflow-hidden rounded-xl border border-border">
      <div className="flex flex-wrap items-center gap-2 border-b border-border p-3">
        {config.options.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
            className={cn(
              buttonVariants({ variant: index === selected ? "default" : "outline", size: "sm" })
            )}
          >
            {item.label}
          </button>
        ))}
        {demo === "sibling-index" ? (
          <button
            type="button"
            onClick={() => setReplay((value) => value + 1)}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "ml-auto")}
          >
            <RotateCcwIcon aria-hidden />
            {m.mdx_replay({}, { locale })}
          </button>
        ) : null}
      </div>
      <div
        aria-label={m.mdx_preview({}, { locale })}
        role="group"
        className="flex min-h-48 items-center justify-center bg-muted/40 p-6"
      >
        <Preview demo={demo} option={option} replay={replay} />
      </div>
      <div className="flex flex-col gap-2 border-t border-border p-3 text-sm">
        <code className="font-mono text-xs">{option.code}</code>
        <p className="text-xs text-muted-foreground">
          {supported ? null : <span className="block">{m.mdx_unsupported({}, { locale })}</span>}
          <a
            href={config.caniuse}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm underline decoration-current/30 underline-offset-4 hover:decoration-current"
          >
            {m.mdx_caniuse({}, { locale })}
          </a>
        </p>
      </div>
    </div>
  )
}
