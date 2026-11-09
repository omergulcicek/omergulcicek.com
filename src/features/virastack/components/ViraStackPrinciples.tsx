import type { ReactNode } from "react"

import { LabeledSection } from "@/components/shared/LabeledSection"
import { RichMessage } from "@/components/shared/RichMessage"
import { VIRASTACK_PRODUCT_TAGS } from "@/features/virastack/constants/virastack-product-tags.constants"
import { getViraStackSectionTitle } from "@/features/virastack/helpers/get-virastack-sections"
import * as m from "@/paraglide/messages.js"

/** Product colors plus tool names in medium weight and file names as code. */
const tags: Record<string, (chunk: string) => ReactNode> = {
  ...VIRASTACK_PRODUCT_TAGS,
  bold: (chunk) => <span className="font-medium text-foreground">{chunk}</span>,
  code: (chunk) => (
    <code className="rounded-sm bg-muted px-1 py-0.5 font-mono text-[0.8125rem] text-foreground">
      {chunk}
    </code>
  )
}

/** What ViraStack holds to; each claim names only the products that earn it. */
export function ViraStackPrinciples() {
  const principles = [
    {
      id: "headless",
      title: m.virastack_principle_headless_title(),
      body: m.virastack_principle_headless_body()
    },
    {
      id: "type-safe",
      title: m.virastack_principle_typesafe_title(),
      body: m.virastack_principle_typesafe_body()
    },
    {
      id: "agents",
      title: m.virastack_principle_agents_title(),
      body: m.virastack_principle_agents_body()
    },
    {
      id: "independent",
      title: m.virastack_principle_independent_title(),
      body: m.virastack_principle_independent_body()
    }
  ]

  return (
    <LabeledSection id="principles" title={getViraStackSectionTitle("principles")}>
      <dl className="flex flex-col gap-5">
        {principles.map(({ id, title, body }) => (
          <div key={id} className="flex flex-col gap-1">
            <dt className="text-base font-medium">{title}</dt>
            <dd className="text-sm leading-6 text-pretty text-muted-foreground">
              <RichMessage message={body} tags={tags} />
            </dd>
          </div>
        ))}
      </dl>
    </LabeledSection>
  )
}
