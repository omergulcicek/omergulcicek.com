export const projectKeys = {
  all: ["projects"] as const,
  stats: () => [...projectKeys.all, "stats"] as const
}
