import * as m from "@/paraglide/messages.js"

/** Section ids and titles in page order; the sections and the TOC share them. */
export function getViraStackSections() {
  return [
    { id: "problem", title: m.virastack_problem_title() },
    { id: "learn", title: m.virastack_layer_learn_title() },
    { id: "start", title: m.virastack_layer_start_title() },
    { id: "build", title: m.virastack_layer_build_title() },
    { id: "principles", title: m.virastack_principles_title() },
    { id: "powered-by", title: m.virastack_powered_by_title() },
    { id: "why", title: m.virastack_why_title() },
    { id: "status", title: m.virastack_status_title() },
    { id: "posts", title: m.virastack_posts_title() }
  ] as const
}

export type ViraStackSectionId = ReturnType<typeof getViraStackSections>[number]["id"]

export function getViraStackSectionTitle(id: ViraStackSectionId) {
  const section = getViraStackSections().find((item) => item.id === id)
  if (!section) throw new Error(`Unknown ViraStack section: ${id}`)
  return section.title
}
