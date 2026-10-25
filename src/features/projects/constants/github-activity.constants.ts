export const GITHUB_CALENDAR_API = "https://github-contributions-api.jogruber.de/v4"
export const GITHUB_EVENTS_API = "https://api.github.com/users"

export const ACTIVITY_ACCENT = [
	"var(--github-calendar-level-1)",
	"var(--github-calendar-level-2)",
	"var(--github-calendar-level-3)",
	"var(--github-calendar-level-4)"
] as const

export const ACTIVITY_CELL_SIZE = 11
export const ACTIVITY_MONTHS = 12
export const WEEKS_PER_MONTH = 365.25 / 12 / 7
export const TOP_REPOS_LIMIT = 3
export const MIN_CARD_WIDTH = 320
export const MIN_LABEL_WEEKS = 3
export const CARD_PADDING = 32
export const CONTRIBUTION_LEVELS = [0, 1, 2, 3, 4] as const

const EASE_OUT = [0.22, 1, 0.36, 1] as const
export const ACTIVITY_SPRING = { type: "spring", bounce: 0, duration: 0.5 } as const
export const HEADER_SPRING = ACTIVITY_SPRING
export const ROW_SPRING = { ...ACTIVITY_SPRING, delay: 0.08 } as const
export const CELL_FADE = { duration: 0.2, ease: EASE_OUT } as const
export const TOOLTIP_FADE = { duration: 0.14, ease: EASE_OUT } as const
export const LABEL_REVEAL = { duration: 0.45, ease: EASE_OUT } as const

export const PANEL_RADIUS = 16
export const PANEL_INSET = 12
export const ROW_OFFSET = 16
export const TOOLTIP_EDGE = 8
export const COLUMN_STAGGER = 0.012
export const LABEL_BLUR = 6
