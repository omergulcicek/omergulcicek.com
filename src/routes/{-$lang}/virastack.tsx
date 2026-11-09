import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { pageHead } from "@/config/seo.config"

import { PageHeader } from "@/components/shared/PageHeader"
import { Pending } from "@/components/shared/Pending"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogTaggedPosts } from "@/features/blog/components/BlogTaggedPosts"
import { projectStatsQueryOptions } from "@/features/projects/api/project.queries"
import { useProjectStats } from "@/features/projects/hooks/use-project-stats"
import { ViraStackLayer } from "@/features/virastack/components/ViraStackLayer"
import { ViraStackLinks } from "@/features/virastack/components/ViraStackLinks"
import { ViraStackPoweredBy } from "@/features/virastack/components/ViraStackPoweredBy"
import { ViraStackPrinciples } from "@/features/virastack/components/ViraStackPrinciples"
import { ViraStackProblem } from "@/features/virastack/components/ViraStackProblem"
import { ViraStackStatus } from "@/features/virastack/components/ViraStackStatus"
import { ViraStackToc } from "@/features/virastack/components/ViraStackToc"
import { ViraStackWhy } from "@/features/virastack/components/ViraStackWhy"
import { VIRASTACK_BLOG_TAG } from "@/features/virastack/constants/virastack.constants"
import { getViraStackSectionTitle } from "@/features/virastack/helpers/get-virastack-sections"
import * as m from "@/paraglide/messages.js"

export const Route = createFileRoute("/{-$lang}/virastack")({
  head: () =>
    pageHead({
      path: "/virastack",
      title: m.virastack_title(),
      description: m.virastack_description()
    }),
  loader: ({ context }) =>
    Promise.all([
      context.queryClient.query(projectStatsQueryOptions()),
      context.queryClient.query({ ...blogPostsQueryOptions("technical"), staleTime: "static" })
    ]),
  pendingComponent: Pending,
  component: ViraStackPage
})

// Features never import each other, so the stats and the posts are composed here.
function ViraStackPage() {
  const { data: stats } = useProjectStats()

  return (
    <div className={cn("flex flex-col gap-12", readingWidthClass)}>
      <div className="flex flex-col gap-4">
        <PageHeader title={m.virastack_title()} description={m.virastack_description()} />
        <ViraStackLinks />
      </div>
      <ViraStackProblem />
      <ViraStackLayer id="learn" stats={stats} />
      <ViraStackLayer id="start" stats={stats} />
      <ViraStackLayer id="build" stats={stats} />
      <ViraStackPrinciples />
      <ViraStackPoweredBy />
      <ViraStackWhy />
      <ViraStackStatus stats={stats} />
      <BlogTaggedPosts
        id="posts"
        title={getViraStackSectionTitle("posts")}
        tag={VIRASTACK_BLOG_TAG}
      />
      <ViraStackToc />
    </div>
  )
}
