import { useId } from "react"

import { useViraMask } from "@virastack/mask"
import { createMask } from "@virastack/mask/server"
import { useForm, useWatch } from "react-hook-form"

import { demoInputClass } from "@/features/blog/components/mdx/islands/demo-field.styles"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type CardForm = { card: string; expiry: string; cvv: string }

const DEFAULTS: CardForm = { card: "", expiry: "", cvv: "" }

/** The mask's error keys this form can produce, as the docs list them, mapped to messages. */
function getErrorMessage(key: string | undefined, locale: Locale) {
  if (key === "card.incomplete") return m.mdx_mask_card_incomplete({}, { locale })
  if (key === "card.invalid") return m.mdx_mask_card_invalid({}, { locale })
  if (key === "expiry.incomplete") return m.mdx_mask_expiry_incomplete({}, { locale })
  if (key === "expiry.invalid") return m.mdx_mask_expiry_invalid({}, { locale })
  if (key === "expiry.min") return m.mdx_mask_expiry_min({}, { locale })
  if (key === "cvv.incomplete") return m.mdx_mask_cvv_incomplete({}, { locale })
  return key
}

// The same masks the form uses, here only to print the formatted text next to the raw value.
const shownMasks = { card: createMask("card"), expiry: createMask("expiry") }

/** What the input shows for a raw value. A CVV shows as typed. */
function formatShown(name: keyof CardForm, raw: string | undefined) {
  if (!raw) return ""
  return name === "cvv" ? raw : shownMasks[name].format(raw)
}

type MaskDemoProps = { locale: Locale }

/**
 * The credit card form the ViraStack Mask post describes: card, expiry and a CVV that
 * follows the card type (4 digits for Amex). Under each field, the raw value the form keeps
 * beside the formatted one on screen, and the field's error once it has one.
 */
export function MaskDemo({ locale }: MaskDemoProps) {
  const id = useId()
  const form = useForm<CardForm>({ defaultValues: DEFAULTS, mode: "onChange" })
  const values = useWatch({ control: form.control })
  const { errors } = form.formState
  const fields = useViraMask(form, {
    card: "card",
    expiry: "expiry",
    cvv: { preset: "cvv", from: "card" }
  })

  const rows = [
    { name: "card", label: m.mdx_mask_card({}, { locale }), placeholder: "0000 0000 0000 0000" },
    { name: "expiry", label: m.mdx_mask_expiry({}, { locale }), placeholder: "12/28" },
    { name: "cvv", label: m.mdx_mask_cvv({}, { locale }), placeholder: "123" }
  ] as const
  const empty = m.mdx_mask_empty({}, { locale })

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(() => undefined)}
      className="not-prose my-8 flex flex-col gap-4 rounded-xl border border-border p-4"
    >
      <p className="text-sm font-medium">{m.mdx_mask_title({}, { locale })}</p>
      {rows.map(({ name, label, placeholder }) => {
        const inputId = `${id}-${name}`
        const errorId = `${inputId}-error`
        const error = getErrorMessage(errors[name]?.message, locale)

        return (
          <div key={name} className="flex flex-col gap-1.5">
            <label htmlFor={inputId} className="text-sm">
              {label}
            </label>
            <input
              {...fields[name]}
              id={inputId}
              placeholder={placeholder}
              aria-describedby={error ? errorId : undefined}
              className={demoInputClass}
            />
            {error ? (
              <p id={errorId} className="text-xs text-destructive">
                {error}
              </p>
            ) : null}
            <p className="flex flex-wrap gap-x-4 text-xs text-muted-foreground">
              <span>
                {m.mdx_mask_value({}, { locale })}:{" "}
                <code className="font-mono text-foreground">{values[name] || empty}</code>
              </span>
              <span>
                {m.mdx_mask_shown({}, { locale })}:{" "}
                <code className="font-mono text-foreground">
                  {formatShown(name, values[name]) || empty}
                </code>
              </span>
            </p>
          </div>
        )
      })}
    </form>
  )
}
