import { useState } from "react"

import { useViraPassword } from "@virastack/password"
import { definePolicy } from "@virastack/password/strength"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { demoInputClass } from "@/features/blog/components/mdx/islands/demo-field.styles"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type PasswordDemoProps = { locale: Locale }

// The package's default: NIST SP 800-63B, 15 to 64 characters, no composition rules.
const policy = definePolicy()

function levelLabel(level: string, locale: Locale) {
  if (level === "strong") return m.mdx_password_level_strong({}, { locale })
  if (level === "good") return m.mdx_password_level_good({}, { locale })
  if (level === "fair") return m.mdx_password_level_fair({}, { locale })
  return m.mdx_password_level_weak({}, { locale })
}

function issueLabel(issue: string, locale: Locale) {
  if (issue === "password.tooShort") return m.mdx_password_issue_too_short({}, { locale })
  if (issue === "password.common") return m.mdx_password_issue_common({}, { locale })
  if (issue === "password.repetitive") return m.mdx_password_issue_repetitive({}, { locale })
  if (issue === "password.mismatch") return m.mdx_password_issue_mismatch({}, { locale })
  return issue
}

type FieldProps = {
  label: string
  field: ReturnType<typeof useViraPassword>
}

function Field({ label, field }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={field.inputProps.id} className="text-sm">
        {label}
      </label>
      <div className="relative">
        <input {...field.inputProps} className={cn(demoInputClass, "pr-10")} />
        <button
          {...field.btnProps}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "absolute top-1/2 right-0.5 size-8 -translate-y-1/2 text-muted-foreground"
          )}
        />
      </div>
    </div>
  )
}

/**
 * The post's example, live: a new password with the default policy and a confirm field. The
 * lines under them are what the hook returns: level, error keys and whether the two match.
 */
export function PasswordDemo({ locale }: PasswordDemoProps) {
  const [password, setPassword] = useState("")
  // The package's button label is English; aria-pressed already tells the state.
  const btnProps = { "aria-label": m.mdx_password_toggle({}, { locale }) }

  const main = useViraPassword({
    policy,
    btnProps,
    inputProps: { onChange: (event) => setPassword(event.target.value) }
  })
  const confirm = useViraPassword({ matchWith: password, btnProps })

  const issues = [...main.issues, ...confirm.issues]

  return (
    <div className="not-prose my-8 flex flex-col gap-4 rounded-xl border border-border p-4">
      <p className="text-sm font-medium">{m.mdx_mask_title({}, { locale })}</p>
      <Field label={m.mdx_password_new({}, { locale })} field={main} />
      <Field label={m.mdx_password_confirm({}, { locale })} field={confirm} />
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
        <dt>level</dt>
        <dd {...main.strengthProps}>
          {main.strength && password ? levelLabel(main.strength.level, locale) : "–"}
        </dd>
        <dt>issues</dt>
        <dd>
          {issues.length > 0 ? issues.map((issue) => issueLabel(issue, locale)).join(", ") : "–"}
        </dd>
        <dt>matches</dt>
        <dd>{confirm.matches === null ? "–" : String(confirm.matches)}</dd>
      </dl>
    </div>
  )
}
