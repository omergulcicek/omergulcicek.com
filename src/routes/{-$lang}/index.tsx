import { createFileRoute } from "@tanstack/react-router"

import { homeHead } from "@/config/seo.config"

import { Pending } from "@/components/shared/Pending"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogHomePosts } from "@/features/blog/components/BlogHomePosts"
import { ExperienceHighlights } from "@/features/experiences/components/ExperienceHighlights"
import { HomeHero } from "@/features/home/components/HomeHero"
import { HomeStackStrip } from "@/features/home/components/HomeStackStrip"

export const Route = createFileRoute("/{-$lang}/")({
  loader: ({ context }) =>
    context.queryClient.query({ ...blogPostsQueryOptions("technical"), staleTime: "static" }),
  head: homeHead,
  pendingComponent: Pending,
  component: Home
})

// Features never import each other, so the home page composes them here.
function Home() {
  return (
    // Bands are set apart by space alone; separator lines would add noise.
    <div className="flex flex-col gap-16">
      <HomeHero />
      <HomeStackStrip />
      {/* Same order as the sidebar: writing first, then work. */}
      <BlogHomePosts />
      <ExperienceHighlights />
    </div>
  )
}
