import { me } from "@/constants/me.constants"
import { VIRASTACK_PRODUCTS } from "@/constants/virastack-products.constants"

import { LabeledSection } from "@/components/shared/LabeledSection"
import { getViraStackSectionTitle } from "@/features/virastack/helpers/get-virastack-sections"
import type { ViraStackStats } from "@/features/virastack/types/virastack.types"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

type ViraStackStatusProps = { stats: ViraStackStats }

/** Where ViraStack stands, as totals over every product; a total with no data is left out. */
export function ViraStackStatus({ stats }: ViraStackStatusProps) {
  const locale = getLocale()
  const ids = me.projects.filter((project) => project.group === "virastack").map(({ id }) => id)
  const sum = (field: "stars" | "totalDownloads") =>
    ids.reduce((total, id) => total + (stats[id]?.[field] ?? 0), 0)

  const downloads = sum("totalDownloads")
  const stars = sum("stars")
  const figures = [
    { id: "products", value: VIRASTACK_PRODUCTS.length, label: m.virastack_status_products() },
    { id: "downloads", value: downloads, label: m.virastack_status_downloads() },
    { id: "stars", value: stars, label: m.virastack_status_stars() }
  ].filter((figure) => figure.value > 0)

  return (
    <LabeledSection id="status" title={getViraStackSectionTitle("status")}>
      <dl className="grid grid-cols-3 gap-4">
        {figures.map(({ id, value, label }) => (
          // The label comes first for screen readers; the number shows on top.
          <div key={id} className="flex flex-col-reverse gap-1">
            <dt className="text-xs text-muted-foreground">{label}</dt>
            <dd className="font-mono text-2xl font-semibold tracking-tight tabular-nums">
              {value.toLocaleString(locale)}
            </dd>
          </div>
        ))}
      </dl>
      <p className="text-base leading-7 text-pretty text-foreground/80">
        {m.virastack_status_body()}
      </p>
    </LabeledSection>
  )
}
