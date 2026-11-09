import { z } from "zod"

/** The part of `GET /repos/{owner}/{repo}` the projects page uses. */
export const githubRepoSchema = z.object({
  stargazers_count: z.number().int().nonnegative()
})

/** `GET https://api.npmjs.org/downloads/point/{range}/{package}`. */
export const npmDownloadsSchema = z.object({
  downloads: z.number().int().nonnegative()
})

/** The part of `GET https://registry.npmjs.org/{package}` that dates the first release. */
export const npmPackageSchema = z.object({
  time: z.object({ created: z.iso.datetime() })
})

/** Per project id; a missing field means that source failed or the project has none. */
export type ProjectStats = Record<
  string,
  {
    stars?: number
    /** The last 90 days. */
    downloads?: number
    /** Since the first release. */
    totalDownloads?: number
  }
>
