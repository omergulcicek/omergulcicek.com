import { describe, expect, it } from "vitest"

import data from "@/constants/me.json"
import { STACK_ICONS } from "@/constants/stack-icons.constants"

describe("STACK_ICONS", () => {
  it("has an icon for every technology in me.json", () => {
    const missing = data.stack.map((item) => item.id).filter((id) => !STACK_ICONS.has(id))

    expect(missing).toEqual([])
  })
})
