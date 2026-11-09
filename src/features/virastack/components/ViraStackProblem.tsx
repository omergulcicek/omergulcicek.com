import { LabeledSection } from "@/components/shared/LabeledSection"
import { ViraStackProse } from "@/features/virastack/components/ViraStackProse"
import { getViraStackSectionTitle } from "@/features/virastack/helpers/get-virastack-sections"
import * as m from "@/paraglide/messages.js"

export function ViraStackProblem() {
  return (
    <LabeledSection id="problem" title={getViraStackSectionTitle("problem")}>
      <ViraStackProse>
        <p>{m.virastack_problem_body_1()}</p>
        <p>{m.virastack_problem_body_2()}</p>
      </ViraStackProse>
    </LabeledSection>
  )
}
