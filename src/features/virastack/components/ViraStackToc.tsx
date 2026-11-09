import { PageToc } from "@/components/shared/PageToc"
import { getViraStackSections } from "@/features/virastack/helpers/get-virastack-sections"

export function ViraStackToc() {
  return <PageToc items={getViraStackSections().map(({ id, title }) => ({ id, label: title }))} />
}
