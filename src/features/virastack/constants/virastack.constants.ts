export const VIRASTACK_GITHUB = "https://github.com/virastack"

/** The page's three layers, in virastack.com's order: learn, start, then build with the hooks. */
export const VIRASTACK_LAYERS = [
  { id: "learn", productIds: ["academy", "guide"] },
  { id: "start", productIds: ["start", "ai"] },
  { id: "build", productIds: ["mask", "password", "address"] }
] as const

export type ViraStackLayerId = (typeof VIRASTACK_LAYERS)[number]["id"]

/** `me.stack` ids ViraStack's templates and hooks are built on, for the "powered by" grid. */
export const VIRASTACK_POWERED_BY = [
  "nextjs",
  "tanstack",
  "react",
  "typescript",
  "react-hook-form",
  "zod",
  "tailwindcss",
  "shadcn"
] as const

/** The post that tells the ViraStack story; the "why" section links to it. */
export const VIRASTACK_STORY_SLUG = "frontend-ekosistemi-insa-etmek"

/** The blog tag of ViraStack posts. */
export const VIRASTACK_BLOG_TAG = "ViraStack"
