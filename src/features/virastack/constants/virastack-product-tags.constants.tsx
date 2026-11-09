import type { ReactNode } from "react"

import { cn } from "cn"

import { VIRASTACK_PRODUCTS } from "@/constants/virastack-products.constants"

/*
 * `<mask>Mask</mask>` and the like print in the product's color inside RichMessage, so a
 * sentence shows at a glance which product it means. Requested exception to the icons-only
 * brand color rule (AGENTS.md).
 */
export const VIRASTACK_PRODUCT_TAGS: Record<string, (chunk: string) => ReactNode> =
  Object.fromEntries(
    VIRASTACK_PRODUCTS.map(({ id, colorClass }) => [
      id,
      (chunk: string) => <span className={cn("font-medium", colorClass)}>{chunk}</span>
    ])
  )
