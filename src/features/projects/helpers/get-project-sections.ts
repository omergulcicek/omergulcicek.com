import { me } from "@/constants/me.constants"
import { PROJECT_GROUPS } from "@/schemas/me.schema"

import * as m from "@/paraglide/messages.js"

function getGroupTitle(group: string) {
  if (group === "virastack") return m.project_group_virastack()
  if (group === "side") return m.project_group_side()
  if (group === "translation") return m.project_group_translation()
  return m.project_group_archive()
}

/** Project groups in page order, without empty ones. The page sections and the TOC share it. */
export function getProjectSections() {
  return PROJECT_GROUPS.flatMap((group) => {
    const projects = me.projects.filter((project) => project.group === group)
    if (projects.length === 0) return []

    return [{ id: `projects-${group}`, title: getGroupTitle(group), projects }]
  })
}
