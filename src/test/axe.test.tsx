import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { getA11yViolations } from "@/test/axe"

describe("getA11yViolations", () => {
  // Guards the helper itself: a check that never fails would pass every page.
  it("reports an image without alt and a button without a name", async () => {
    render(
      <main>
        <img src="/a.png" />
        <button type="button" />
      </main>
    )

    const violations = await getA11yViolations()

    expect(violations).toEqual([
      expect.stringMatching(/^button-name:/),
      expect.stringMatching(/^image-alt:/)
    ])
  })

  it("passes accessible markup", async () => {
    render(
      <main>
        <img src="/a.png" alt="Bir fotoğraf" />
        <button type="button">Kaydet</button>
      </main>
    )

    expect(await getA11yViolations()).toEqual([])
  })
})
