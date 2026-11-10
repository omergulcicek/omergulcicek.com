import { createFileRoute } from "@tanstack/react-router"

import { homeHead } from "@/config/seo.config"

import { Pending } from "@/components/shared/Pending"
import { Separator } from "@/components/ui/separator"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogHomePosts } from "@/features/blog/components/BlogHomePosts"
import { ExperienceHighlights } from "@/features/experiences/components/ExperienceHighlights"
import { HomeHero } from "@/features/home/components/HomeHero"
import { HomeStackStrip } from "@/features/home/components/HomeStackStrip"

export const Route = createFileRoute("/{-$lang}/")({
  head: homeHead,
  loader: ({ context }) =>
    context.queryClient.query({ ...blogPostsQueryOptions("technical"), staleTime: "static" }),
  pendingComponent: Pending,
  component: Home
})

// Features never import each other, so the home page composes them here.
function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HomeHero />
      <HomeStackStrip />
      {/* The primitive keys its height on data-horizontal, which Base UI never sets. */}
      <Separator className="h-px" />
      {/* Same order as the sidebar: writing first, then work. */}
      <BlogHomePosts />
      <Separator className="h-px" />
      <ExperienceHighlights />
    </div>
  )
}
