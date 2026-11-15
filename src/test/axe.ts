import axe from "axe-core"

/*
 * WCAG 2.2 A and AA rules only. color-contrast needs real CSS, which jsdom does not load, so
 * contrast is checked in the browser instead.
 */
const OPTIONS: axe.RunOptions = {
  runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
  rules: { "color-contrast": { enabled: false } }
}

/**
 * The axe violations in a rendered tree, one readable line each: rule, what it asks for and the
 * failing elements. An empty array means axe found nothing; assert it with `toEqual([])`.
 */
export async function getA11yViolations(container: Element = document.body) {
  const { violations } = await axe.run(container, OPTIONS)

  return violations.map(
    ({ id, help, nodes }) =>
      `${id}: ${help} → ${nodes.map((node) => node.target.join(" ")).join(", ")}`
  )
}
