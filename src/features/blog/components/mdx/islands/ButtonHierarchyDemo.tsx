import { useState } from "react"

import { ExternalLinkIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type ButtonHierarchyDemoProps = { locale: Locale }

/** How much weight a button carries, mapped to the closest look the site's own Button has. */
type Weight = "filled" | "secondary" | "outline" | "subtle"

type Label = "save" | "cancel" | "draft" | "ok"

type Layout = {
  align: "start" | "end"
  buttons: readonly { label: Label; weight: Weight; primary?: boolean }[]
}

type System = {
  id: string
  name: string
  source: string
  page: Layout | null
  dialog: Layout | null
}

const WEIGHT_VARIANT = {
  filled: "default",
  secondary: "secondary",
  outline: "outline",
  subtle: "ghost"
} as const satisfies Record<Weight, "default" | "secondary" | "outline" | "ghost">

/*
 * Only what each source documents: a context it says nothing about stays null, so the demo
 * never invents a rule for a system.
 */
const SYSTEMS = [
  {
    id: "apple",
    name: "Apple HIG",
    source: "https://developer.apple.com/design/human-interface-guidelines/alerts",
    page: null,
    dialog: {
      align: "end",
      buttons: [
        { label: "cancel", weight: "outline" },
        { label: "save", weight: "filled", primary: true }
      ]
    }
  },
  {
    id: "material",
    name: "Google · Material 3",
    source: "https://developer.android.com/develop/ui/compose/components/dialog",
    page: null,
    dialog: {
      align: "end",
      buttons: [
        { label: "cancel", weight: "subtle" },
        { label: "save", weight: "subtle", primary: true }
      ]
    }
  },
  {
    id: "carbon",
    name: "IBM · Carbon",
    source: "https://carbondesignsystem.com/components/button/usage",
    page: {
      align: "start",
      buttons: [
        { label: "save", weight: "filled", primary: true },
        { label: "cancel", weight: "secondary" }
      ]
    },
    dialog: {
      align: "end",
      buttons: [
        { label: "cancel", weight: "secondary" },
        { label: "save", weight: "filled", primary: true }
      ]
    }
  },
  {
    id: "primer",
    name: "GitHub · Primer",
    source: "https://primer.style/product/components/button/guidelines/",
    page: null,
    dialog: {
      align: "end",
      buttons: [
        { label: "cancel", weight: "outline" },
        { label: "save", weight: "filled", primary: true }
      ]
    }
  },
  {
    id: "atlassian",
    name: "Atlassian",
    source: "https://atlassian.design/components/modal-dialog/usage",
    page: null,
    dialog: {
      align: "end",
      buttons: [
        { label: "cancel", weight: "subtle" },
        { label: "save", weight: "filled", primary: true }
      ]
    }
  },
  {
    id: "fluent",
    name: "Microsoft · Fluent 2",
    source: "https://fluent2.microsoft.design/components/web/react/core/button/usage",
    page: {
      align: "start",
      buttons: [
        { label: "save", weight: "filled", primary: true },
        { label: "cancel", weight: "outline" }
      ]
    },
    dialog: null
  },
  {
    id: "spectrum",
    name: "Adobe · Spectrum",
    source: "https://spectrum.adobe.com/web/rsp/components/button-group",
    page: {
      align: "start",
      buttons: [
        { label: "save", weight: "filled", primary: true },
        { label: "cancel", weight: "outline" }
      ]
    },
    dialog: {
      align: "end",
      buttons: [
        { label: "cancel", weight: "outline" },
        { label: "save", weight: "filled", primary: true }
      ]
    }
  },
  {
    id: "govuk",
    name: "GOV.UK",
    source: "https://design-system.service.gov.uk/components/button/",
    page: {
      align: "start",
      buttons: [
        { label: "save", weight: "filled", primary: true },
        { label: "draft", weight: "secondary" }
      ]
    },
    dialog: null
  },
  {
    id: "windows",
    name: "Windows · NN/g",
    source: "https://www.nngroup.com/articles/ok-cancel-or-cancel-ok/",
    page: null,
    dialog: {
      align: "end",
      buttons: [
        { label: "ok", weight: "filled", primary: true },
        { label: "cancel", weight: "outline" }
      ]
    }
  }
] as const satisfies readonly System[]

type SystemId = (typeof SYSTEMS)[number]["id"]

function ruleFor(id: SystemId, locale: Locale) {
  const options = { locale }
  switch (id) {
    case "apple":
      return m.mdx_buttons_rule_apple({}, options)
    case "material":
      return m.mdx_buttons_rule_material({}, options)
    case "carbon":
      return m.mdx_buttons_rule_carbon({}, options)
    case "primer":
      return m.mdx_buttons_rule_primer({}, options)
    case "atlassian":
      return m.mdx_buttons_rule_atlassian({}, options)
    case "fluent":
      return m.mdx_buttons_rule_fluent({}, options)
    case "spectrum":
      return m.mdx_buttons_rule_spectrum({}, options)
    case "govuk":
      return m.mdx_buttons_rule_govuk({}, options)
    case "windows":
      return m.mdx_buttons_rule_windows({}, options)
  }
}

function labelFor(label: Label, locale: Locale) {
  const options = { locale }
  switch (label) {
    case "save":
      return m.mdx_buttons_save({}, options)
    case "cancel":
      return m.mdx_buttons_cancel({}, options)
    case "draft":
      return m.mdx_buttons_draft({}, options)
    case "ok":
      return m.mdx_buttons_ok({}, options)
  }
}

/** Where the primary button sits next to the others, read from the layout itself. */
function primarySide(layout: Layout) {
  const index = layout.buttons.findIndex((button) => button.primary)
  return index === 0 ? "left" : "right"
}

function Preview({
  title,
  layout,
  dialog,
  locale
}: {
  title: string
  layout: Layout | null
  dialog: boolean
  locale: Locale
}) {
  return (
    <div className="flex flex-col">
      <p className="border-b border-border px-4 py-2.5 text-sm font-medium">{title}</p>
      <div className="flex flex-1 items-center justify-center bg-muted/40 px-4 py-6">
        {layout === null ? (
          <p className="max-w-56 text-center text-xs text-muted-foreground">
            {m.mdx_buttons_none({}, { locale })}
          </p>
        ) : (
          <div
            className={cn(
              "flex w-full max-w-72 flex-col gap-4 rounded-lg border border-border bg-background p-4",
              dialog && "shadow-md"
            )}
          >
            <div aria-hidden className="flex flex-col gap-1.5">
              <span className="h-2.5 w-2/3 rounded-full bg-muted" />
              <span className="h-2 w-full rounded-full bg-muted/70" />
            </div>
            {/* Drawn, not clickable: the preview only shows order and weight. */}
            <div
              className={cn(
                "flex flex-wrap gap-2",
                layout.align === "end" ? "justify-end" : "justify-start"
              )}
            >
              {layout.buttons.map((button) => (
                <span
                  key={button.label}
                  className={cn(
                    buttonVariants({ variant: WEIGHT_VARIANT[button.weight], size: "sm" }),
                    "pointer-events-none active:scale-100"
                  )}
                >
                  {labelFor(button.label, locale)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <p className="flex min-h-10 items-center border-t border-border px-4 py-2 text-xs text-muted-foreground">
        {layout === null
          ? "—"
          : primarySide(layout) === "left"
            ? m.mdx_buttons_primary_left({}, { locale })
            : m.mdx_buttons_primary_right({}, { locale })}
      </p>
    </div>
  )
}

/**
 * The same two actions as each design system lays them out, on a page and in a dialog, so
 * the reader sees where the sources agree (one primary) and where they differ (its side).
 */
export function ButtonHierarchyDemo({ locale }: ButtonHierarchyDemoProps) {
  const [selectedId, setSelectedId] = useState<SystemId>("apple")
  const selected = SYSTEMS.find((system) => system.id === selectedId) ?? SYSTEMS[0]

  return (
    <div className="not-prose my-8 flex flex-col overflow-hidden rounded-xl border border-border">
      <div
        role="group"
        aria-label={m.mdx_buttons_pick({}, { locale })}
        className="flex flex-wrap gap-2 border-b border-border p-3"
      >
        {SYSTEMS.map((system) => (
          <button
            key={system.id}
            type="button"
            aria-pressed={system.id === selectedId}
            onClick={() => setSelectedId(system.id)}
            className={buttonVariants({
              variant: system.id === selectedId ? "secondary" : "outline",
              size: "sm"
            })}
          >
            {system.name}
          </button>
        ))}
      </div>

      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <Preview
          title={m.mdx_buttons_page({}, { locale })}
          layout={selected.page}
          dialog={false}
          locale={locale}
        />
        <Preview
          title={m.mdx_buttons_dialog({}, { locale })}
          layout={selected.dialog}
          dialog
          locale={locale}
        />
      </div>

      <div className="flex flex-col gap-2 border-t border-border px-4 py-3 text-sm">
        <p aria-live="polite" className="text-pretty">
          {ruleFor(selected.id, locale)}
        </p>
        <a
          href={selected.source}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-1 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {m.mdx_buttons_source({}, { locale })}: {selected.name}
          <ExternalLinkIcon aria-hidden className="size-3" />
        </a>
      </div>
    </div>
  )
}
