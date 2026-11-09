import { useId } from "react"

import { formatAddress, useViraAddress } from "@virastack/address"
import { cn } from "cn"

import { demoInputClass } from "@/features/blog/components/mdx/islands/demo-field.styles"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type AddressDemoProps = { locale: Locale }

// The same look as the demo inputs; a native select keeps the hook's prop getters as they are.
const selectClass = cn(demoInputClass, "appearance-auto")

/**
 * The ViraStack Address post's example, live: province, district and neighbourhood selects
 * plus a postal code input that fills them the other way. Under them, the hook's `value` and
 * the one-line address `formatAddress` makes of it.
 */
export function AddressDemo({ locale }: AddressDemoProps) {
  const id = useId()
  const {
    getProvinceProps,
    getDistrictProps,
    getNeighbourhoodProps,
    getPostalCodeInputProps,
    postalCodeStatus,
    value
  } = useViraAddress()

  const fields = [
    {
      id: `${id}-province`,
      label: m.mdx_address_province({}, { locale }),
      props: getProvinceProps({ id: `${id}-province` })
    },
    {
      id: `${id}-district`,
      label: m.mdx_address_district({}, { locale }),
      props: getDistrictProps({ id: `${id}-district` })
    },
    {
      id: `${id}-neighbourhood`,
      label: m.mdx_address_neighbourhood({}, { locale }),
      props: getNeighbourhoodProps({ id: `${id}-neighbourhood` })
    }
  ]
  const postalCodeId = `${id}-postal-code`
  const postalCode = getPostalCodeInputProps({ id: postalCodeId })
  const line = formatAddress(value, { postalCode: true })

  return (
    <div className="not-prose my-8 flex flex-col gap-4 rounded-xl border border-border p-4">
      <p className="text-sm font-medium">{m.mdx_mask_title({}, { locale })}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(({ id: fieldId, label, props }) => (
          <div key={fieldId} className="flex flex-col gap-1.5">
            <label htmlFor={fieldId} className="text-sm">
              {label}
            </label>
            <select {...props} className={selectClass} />
          </div>
        ))}
        <div className="flex flex-col gap-1.5">
          <label htmlFor={postalCodeId} className="text-sm">
            {m.mdx_address_postal_code({}, { locale })}
          </label>
          <input {...postalCode} placeholder="54100" className={demoInputClass} />
        </div>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
        <dt>province</dt>
        <dd>{value.province ?? "–"}</dd>
        <dt>district</dt>
        <dd>{value.district ?? "–"}</dd>
        <dt>neighbourhood</dt>
        <dd>{value.neighbourhood ?? "–"}</dd>
        <dt>postalCode</dt>
        <dd>{value.postalCode ?? "–"}</dd>
        <dt>status</dt>
        <dd>{postalCodeStatus ?? "–"}</dd>
        <dt>formatAddress</dt>
        <dd className="font-sans">{line || "–"}</dd>
      </dl>
    </div>
  )
}
