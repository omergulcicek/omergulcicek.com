/** Live numbers per `me.projects` id, passed in by the route; a missing field hides that number. */
export type ViraStackStats = Record<
  string,
  { stars?: number; downloads?: number; totalDownloads?: number }
>
