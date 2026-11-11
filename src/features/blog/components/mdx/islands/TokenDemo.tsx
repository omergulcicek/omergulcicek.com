import { useState } from "react"
import type { CSSProperties, ReactNode } from "react"

import { CheckIcon, HeartIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type TokenDemoProps = { locale: Locale }

type Color = { name: string; value: string }

// Raw values, because Tailwind only emits the palette variables a page actually uses.
const TEAL: Color = { name: "teal-700", value: "oklch(0.511 0.096 186.391)" }
const PINK: Color = { name: "pink-600", value: "oklch(0.592 0.249 0.584)" }
const VIOLET: Color = { name: "violet-600", value: "oklch(0.541 0.281 293.009)" }

// The no-token card starts the way hand-written colors drift: three files, three choices.
const START: readonly Color[] = [
  { name: "orange-600", value: "oklch(0.646 0.222 41.116)" },
  { name: "fuchsia-600", value: "oklch(0.591 0.293 322.896)" },
  { name: "yellow-500", value: "oklch(0.795 0.184 86.047)" }
]

const FILES = [
  { file: "Button.tsx", utility: "bg" },
  { file: "Checkbox.tsx", utility: "bg" },
  { file: "Icon.tsx", utility: "text" }
] as const

type VarStyle = CSSProperties & Record<`--${string}`, string>

const swatchesFor = (locale: Locale) => [
  { label: m.mdx_token_color_teal({}, { locale }), color: TEAL },
  { label: m.mdx_token_color_pink({}, { locale }), color: PINK },
  { label: m.mdx_token_color_violet({}, { locale }), color: VIOLET }
]

/** The three UI pieces both cards show, colored by whatever the caller decides. */
function Preview({
  locale,
  button,
  checkbox,
  icon
}: {
  locale: Locale
  button: { className?: string; style?: CSSProperties }
  checkbox: { className: string; style?: CSSProperties }
  icon: { className?: string; style?: CSSProperties }
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 bg-muted/40 px-4 py-8">
      <button type="button" className={cn(buttonVariants(), button.className)} style={button.style}>
        {m.mdx_token_save({}, { locale })}
      </button>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox defaultChecked className={checkbox.className} style={checkbox.style} />
        {m.mdx_token_agree({}, { locale })}
      </label>
      <HeartIcon
        aria-hidden
        className={cn("size-6 fill-current", icon.className)}
        style={icon.style}
      />
    </div>
  )
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <p className="border-b border-border px-4 py-2.5 text-sm font-medium">{title}</p>
      {children}
    </div>
  )
}

/**
 * Two cards side by side: hard-coded colors, where a new color reaches one file per edit,
 * and the site's `--brand` token, where one value recolors all three components.
 */
export function TokenDemo({ locale }: TokenDemoProps) {
  const swatches = swatchesFor(locale)
  const [picked, setPicked] = useState<Color | null>(null)
  const [colors, setColors] = useState<readonly Color[]>(START)
  const [edited, setEdited] = useState(0)

  function pick(color: Color) {
    setPicked(color)
    // Changing the color by hand starts with one file; the others wait for their own edit.
    setColors((current) => current.map((item, index) => (index === 0 ? color : item)))
    setEdited(1)
  }

  function editNext() {
    if (!picked) return
    setColors((current) => current.map((item, index) => (index === edited ? picked : item)))
    setEdited((count) => count + 1)
  }

  // Teal is the site's own token, so leaving it unset shows the real `--brand` of the theme.
  const brand = picked ?? TEAL
  const brandStyle: VarStyle | undefined =
    picked && picked !== TEAL
      ? { "--brand": picked.value, "--brand-foreground": "oklch(0.985 0 0)" }
      : undefined

  const [buttonColor, checkboxColor, iconColor] = colors
  const checkboxVar: VarStyle = { "--c": checkboxColor?.value ?? "" }

  return (
    <div className="not-prose my-8 flex flex-col overflow-hidden rounded-xl border border-border">
      <div
        role="group"
        aria-label={m.mdx_token_pick({}, { locale })}
        className="flex flex-wrap items-center gap-2 border-b border-border p-3"
      >
        {swatches.map(({ label, color }) => (
          <button
            key={color.name}
            type="button"
            aria-pressed={picked === color}
            onClick={() => pick(color)}
            className={cn(
              buttonVariants({ variant: picked === color ? "secondary" : "outline", size: "sm" })
            )}
          >
            <span aria-hidden className="size-3 rounded-full" style={{ background: color.value }} />
            {label}
          </button>
        ))}
      </div>

      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <Card title={m.mdx_token_without({}, { locale })}>
          <Preview
            locale={locale}
            button={{ style: { background: buttonColor?.value, color: "oklch(0.985 0 0)" } }}
            checkbox={{
              className:
                "data-checked:border-(--c) data-checked:bg-(--c) data-checked:text-white dark:data-checked:bg-(--c)",
              style: checkboxVar
            }}
            icon={{ style: { color: iconColor?.value } }}
          />
          <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 font-mono text-xs">
            {FILES.map(({ file, utility }, index) => {
              const color = colors[index]
              const done = picked !== null && color === picked
              return (
                <li key={file} className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">{file}</span>
                  <span className="flex items-center gap-1.5">
                    {utility}-{color?.name}
                    <CheckIcon
                      aria-hidden
                      className={cn("size-3.5 text-brand", done ? "visible" : "invisible")}
                    />
                  </span>
                </li>
              )
            })}
          </ul>
          <div className="mt-auto flex min-h-14 items-center justify-between gap-2 border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            <span aria-live="polite">
              {picked === null
                ? m.mdx_token_start_without({}, { locale })
                : edited < FILES.length
                  ? m.mdx_token_files({ count: edited }, { locale })
                  : m.mdx_token_files_done({}, { locale })}
            </span>
            {picked !== null && edited < FILES.length ? (
              <button
                type="button"
                onClick={editNext}
                className={cn(buttonVariants({ variant: "default", size: "sm" }))}
              >
                {m.mdx_token_next_file({}, { locale })}
              </button>
            ) : null}
          </div>
        </Card>

        <Card title={m.mdx_token_with({}, { locale })}>
          <div style={brandStyle} className="flex flex-1 flex-col">
            <Preview
              locale={locale}
              button={{ className: "bg-brand text-brand-foreground hover:bg-brand/90" }}
              checkbox={{
                className:
                  "data-checked:border-brand data-checked:bg-brand data-checked:text-brand-foreground dark:data-checked:bg-brand"
              }}
              icon={{ className: "text-brand" }}
            />
            <div className="flex flex-col gap-1 border-t border-border px-4 py-3 font-mono text-xs">
              <p>
                --brand: <span className="text-brand">var(--color-{brand.name})</span>
              </p>
              <p className="text-muted-foreground">Button, Checkbox, Icon → var(--brand)</p>
              {/* Keeps the code block as tall as the three file lines next to it. */}
              <p aria-hidden className="invisible">
                .
              </p>
            </div>
            <p
              aria-live="polite"
              className="mt-auto flex min-h-14 items-center border-t border-border px-4 py-2.5 text-xs text-muted-foreground"
            >
              {picked === null
                ? m.mdx_token_start_with({}, { locale })
                : m.mdx_token_one_line({}, { locale })}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
