import { DownloadIcon, StarIcon } from "lucide-react"
import { cn } from "cn"

import { me } from "@/constants/me.constants"
import { VIRASTACK_PRODUCTS } from "@/constants/virastack-products.constants"

import { localize } from "@/helpers/localize"

import { LabeledSection } from "@/components/shared/LabeledSection"
import { RichMessage } from "@/components/shared/RichMessage"
import { titleLinkClass } from "@/components/shared/surface.styles"
import { VIRASTACK_LAYERS } from "@/features/virastack/constants/virastack.constants"
import type { ViraStackLayerId } from "@/features/virastack/constants/virastack.constants"
import { getViraStackSectionTitle } from "@/features/virastack/helpers/get-virastack-sections"
import type { ViraStackStats } from "@/features/virastack/types/virastack.types"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

// Small star counts read as noise rather than proof, the same floor the projects page uses.
const MIN_STARS_SHOWN = 10

function getLayerLead(id: ViraStackLayerId) {
  if (id === "learn") return m.virastack_layer_learn_lead()
  if (id === "start") return m.virastack_layer_start_lead()
  return m.virastack_layer_build_lead()
}

type ViraStackLayerProps = {
  id: ViraStackLayerId
  stats: ViraStackStats
}

/** One layer (learn, start, build): a lead sentence and its products with live numbers. */
export function ViraStackLayer({ id, stats }: ViraStackLayerProps) {
  const locale = getLocale()
  const layer = VIRASTACK_LAYERS.find((item) => item.id === id)
  const productIds: readonly string[] = layer?.productIds ?? []
  const products = VIRASTACK_PRODUCTS.filter((product) => productIds.includes(product.id))

  return (
    <LabeledSection id={id} title={getViraStackSectionTitle(id)}>
      <p className="text-base leading-7 text-pretty text-foreground/80">{getLayerLead(id)}</p>
      <ul className="flex flex-col gap-5">
        {products.map(({ id: productId, name, Icon, colorClass }) => {
          const project = me.projects.find((item) => item.id === productId)
          if (!project) return null

          const stat = stats[productId]
          const stars =
            stat?.stars !== undefined && stat.stars >= MIN_STARS_SHOWN
              ? stat.stars.toLocaleString(locale)
              : null
          const downloads = stat?.downloads ? stat.downloads.toLocaleString(locale) : null

          return (
            <li key={productId} className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-3">
                <p className="flex min-w-0 items-center gap-2 text-base font-medium">
                  <Icon
                    aria-hidden
                    strokeWidth={1.75}
                    className={cn("size-5 shrink-0", colorClass)}
                  />
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={titleLinkClass}
                    >
                      {name}
                    </a>
                  ) : (
                    name
                  )}
                </p>
                {/*
                 * Numbers only, beside the name: the labels stay for screen readers and as a
                 * hover hint, and "Where it stands" spells out the period once. Downloads sit
                 * last, so most products line them up in one right-hand column.
                 */}
                {stars || downloads ? (
                  <p className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                    {stars ? (
                      <span title={m.project_stars()} className="inline-flex items-center gap-1">
                        <StarIcon aria-hidden className="size-3.5" />
                        <span className="font-mono tabular-nums">{stars}</span>
                        <span className="sr-only">{m.project_stars()}</span>
                      </span>
                    ) : null}
                    {downloads ? (
                      <span
                        title={m.project_downloads_period()}
                        className="inline-flex items-center gap-1"
                      >
                        <DownloadIcon aria-hidden className="size-3.5" />
                        <span className="font-mono tabular-nums">{downloads}</span>
                        <span className="sr-only">{m.project_downloads_period()}</span>
                      </span>
                    ) : null}
                  </p>
                ) : null}
              </div>
              <p className="text-sm leading-6 text-pretty text-muted-foreground">
                <RichMessage
                  message={localize(project.description)}
                  tags={{
                    code: (chunk) => (
                      <code className="rounded-sm bg-muted px-1 py-0.5 font-mono text-[0.8125rem] text-foreground">
                        {chunk}
                      </code>
                    )
                  }}
                />
              </p>
            </li>
          )
        })}
      </ul>
    </LabeledSection>
  )
}
