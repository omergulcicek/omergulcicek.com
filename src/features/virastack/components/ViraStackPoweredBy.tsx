import { me } from "@/constants/me.constants"
import { STACK_ICONS } from "@/constants/stack-icons.constants"

import { LabeledSection } from "@/components/shared/LabeledSection"
import { VIRASTACK_POWERED_BY } from "@/features/virastack/constants/virastack.constants"
import { getViraStackSectionTitle } from "@/features/virastack/helpers/get-virastack-sections"
import * as m from "@/paraglide/messages.js"

/** The libraries the templates and hooks build on; labels and icons come from `me.stack`. */
export function ViraStackPoweredBy() {
  const ids: readonly string[] = VIRASTACK_POWERED_BY
  const items = me.stack.filter((item) => ids.includes(item.id))

  return (
    <LabeledSection id="powered-by" title={getViraStackSectionTitle("powered-by")}>
      <p className="text-base leading-7 text-pretty text-foreground/80">
        {m.virastack_powered_by_lead()}
      </p>
      <ul className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
        {items.map(({ id, label }) => (
          <li key={id} className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-10 items-center justify-center">{STACK_ICONS.get(id)}</span>
            <span className="text-xs font-medium text-foreground">{label}</span>
          </li>
        ))}
      </ul>
    </LabeledSection>
  )
}
