import { createCsrfMiddleware, createMiddleware, createStart } from "@tanstack/react-start"

/**
 * Baseline security headers (parity with the Next.js template's `headers()`).
 * Extend or replace when you add CSP / auth middleware.
 */
const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next()

  result.response.headers.set("X-Frame-Options", "DENY")
  result.response.headers.set("X-Content-Type-Options", "nosniff")
  result.response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  result.response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  return result
})

/**
 * Lets Vercel's CDN keep rendered pages, so a visit no longer waits on a fresh server render and
 * a Supabase round trip (0.7–1.1s TTFB before). Safe because a page's HTML is the same for every
 * visitor: the URL alone picks the language, and theme and analytics run in the browser. A
 * deploy clears the cache; a new post shows within ten minutes, the stale copy being served
 * while the CDN fetches the fresh one. Browsers still revalidate on every visit.
 */
const pageCacheMiddleware = createMiddleware().server(async ({ next, request }) => {
  const result = await next()
  const { response } = result
  const isPage = response.headers.get("Content-Type")?.startsWith("text/html")

  if (request.method === "GET" && response.status === 200 && isPage) {
    response.headers.set("CDN-Cache-Control", "max-age=600, stale-while-revalidate=86400")
  }

  return result
})

/** A custom `src/start.ts` turns off TanStack Start's automatic CSRF protection, so it is added here. */
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn"
})

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeadersMiddleware, pageCacheMiddleware, csrfMiddleware]
}))
