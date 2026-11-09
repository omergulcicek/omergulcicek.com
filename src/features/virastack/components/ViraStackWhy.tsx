import { Link } from "@tanstack/react-router"
import { cn } from "cn"

import { getLangParam } from "@/helpers/localized-url"

import { LabeledSection } from "@/components/shared/LabeledSection"
import { RichMessage } from "@/components/shared/RichMessage"
import { textLinkClass } from "@/components/shared/surface.styles"
import { ViraStackProse } from "@/features/virastack/components/ViraStackProse"
import { VIRASTACK_PRODUCT_TAGS } from "@/features/virastack/constants/virastack-product-tags.constants"
import { VIRASTACK_STORY_SLUG } from "@/features/virastack/constants/virastack.constants"
import { getViraStackSectionTitle } from "@/features/virastack/helpers/get-virastack-sections"
import * as m from "@/paraglide/messages.js"

export function ViraStackWhy() {
  const lang = getLangParam()

  return (
    <LabeledSection id="why" title={getViraStackSectionTitle("why")}>
      <ViraStackProse>
        <p>
          <RichMessage message={m.virastack_why_body_1()} tags={VIRASTACK_PRODUCT_TAGS} />
        </p>
        <p>
          <RichMessage
            message={m.virastack_why_body_2()}
            tags={{
              ...VIRASTACK_PRODUCT_TAGS,
              post: (chunk) => (
                <Link
                  to="/{-$lang}/blog/$slug"
                  params={{ lang, slug: VIRASTACK_STORY_SLUG }}
                  className={cn(textLinkClass, "font-medium text-foreground")}
                >
                  {chunk}
                </Link>
              )
            }}
          />
        </p>
      </ViraStackProse>
    </LabeledSection>
  )
}
