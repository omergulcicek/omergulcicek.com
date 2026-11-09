import { describe, expect, it } from "vitest"

import data from "@/constants/me.json"
import { meSchema } from "@/schemas/me.schema"

describe("me.json", () => {
  it("matches the schema, with every localized field in every locale", () => {
    expect(() => meSchema.parse(data)).not.toThrow()
  })
})
