import { api } from "@/lib/api"

import {
  npmDownloadsSchema,
  npmPackageSchema
} from "@/features/projects/schemas/project-stats.schema"

const DAY_MS = 24 * 60 * 60 * 1000

/** npm answers at most 18 months per request; 540 days stays under it. */
const MAX_RANGE_DAYS = 540

const day = (date: Date) => date.toISOString().slice(0, 10)

/** `YYYY-MM-DD:YYYY-MM-DD` for the last `days` days, ending yesterday because npm counts lag a day. */
export function npmRange(days: number, now: Date) {
  const end = new Date(now.getTime() - DAY_MS)
  const start = new Date(end.getTime() - (days - 1) * DAY_MS)

  return `${day(start)}:${day(end)}`
}

/**
 * Back-to-back ranges from `from` through yesterday, each within npm's 18-month limit, so their
 * sums add up to every download since `from` with no day counted twice.
 */
export function npmRangesSince(from: Date, now: Date) {
  // Whole UTC days, so a package published late yesterday still gets yesterday's range.
  const end = new Date(day(new Date(now.getTime() - DAY_MS)))
  const ranges: string[] = []

  for (let start = new Date(day(from)); start <= end;) {
    const chunkEnd = new Date(
      Math.min(start.getTime() + (MAX_RANGE_DAYS - 1) * DAY_MS, end.getTime())
    )
    ranges.push(`${day(start)}:${day(chunkEnd)}`)
    start = new Date(chunkEnd.getTime() + DAY_MS)
  }

  return ranges
}

async function getDownloadsIn(range: string, pkg: string, signal?: AbortSignal) {
  // Scoped names are not supported by npm's bulk endpoint, so each package is its own request.
  const data = await api.get(`https://api.npmjs.org/downloads/point/${range}/${pkg}`, {
    schema: npmDownloadsSchema,
    signal
  })

  return data.downloads
}

/** Downloads of one package over the last 90 days, the window virastack.com also shows. */
export function getNpmDownloads(pkg: string, signal?: AbortSignal) {
  return getDownloadsIn(npmRange(90, new Date()), pkg, signal)
}

/** Every download since the package was first published, summed over 18-month ranges. */
export async function getNpmTotalDownloads(pkg: string, signal?: AbortSignal) {
  const meta = await api.get(`https://registry.npmjs.org/${pkg}`, {
    schema: npmPackageSchema,
    signal
  })
  const counts = await Promise.all(
    npmRangesSince(new Date(meta.time.created), new Date()).map((range) =>
      getDownloadsIn(range, pkg, signal)
    )
  )

  return counts.reduce((total, count) => total + count, 0)
}
