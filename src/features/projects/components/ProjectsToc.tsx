import { PageToc } from "@/components/shared/PageToc"
import { getProjectSections } from "@/features/projects/helpers/get-project-sections"

export function ProjectsToc() {
  return <PageToc items={getProjectSections().map(({ id, title }) => ({ id, label: title }))} />
}
