import { useViraPassword } from "@virastack/password"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { demoInputClass } from "@/features/blog/components/mdx/islands/demo-field.styles"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type PasswordDemoProps = { locale: Locale }

type ToggleFieldProps = {
  label: string
  locale: Locale
  /** Text labels instead of the default eye icons, as the post's second example shows. */
  textLabels?: boolean
}

function ToggleField({ label, locale, textLabels = false }: ToggleFieldProps) {
  // The package's button label is English; aria-pressed already tells the state.
  const btnLabel = { "aria-label": m.mdx_password_toggle({}, { locale }) }
  const { inputProps, btnProps, isVisible } = useViraPassword(
    textLabels
      ? {
          btnProps: btnLabel,
          icons: {
            show: m.mdx_password_show({}, { locale }),
            hide: m.mdx_password_hide({}, { locale })
          }
        }
      : { btnProps: btnLabel }
  )

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputProps.id} className="text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          {...inputProps}
          placeholder={m.mdx_password_placeholder({}, { locale })}
          className={cn(demoInputClass, textLabels ? "pr-20" : "pr-10")}
        />
        <button
          {...btnProps}
          className={cn(
            buttonVariants({ variant: "ghost", size: textLabels ? "sm" : "icon" }),
            "absolute top-1/2 right-0.5 -translate-y-1/2 text-muted-foreground",
            textLabels ? "h-8" : "size-8"
          )}
        />
      </div>
      <p className="text-xs text-muted-foreground">
        {m.mdx_password_state(
          {
            state: isVisible
              ? m.mdx_password_visible({}, { locale })
              : m.mdx_password_hidden({}, { locale })
          },
          { locale }
        )}
      </p>
    </div>
  )
}

/**
 * The two examples the ViraStack Password post describes: the default eye-icon toggle and
 * one with "Show" / "Hide" text, each with a state line under it.
 */
export function PasswordDemo({ locale }: PasswordDemoProps) {
  return (
    <div className="not-prose my-8 flex flex-col gap-4 rounded-xl border border-border p-4">
      <p className="text-sm font-medium">{m.mdx_mask_title({}, { locale })}</p>
      <ToggleField label={m.mdx_password_icon({}, { locale })} locale={locale} />
      <ToggleField label={m.mdx_password_text({}, { locale })} locale={locale} textLabels />
    </div>
  )
}
