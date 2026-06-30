const GITHUB_CALENDAR_COLORS = [
	"var(--github-calendar-empty)",
	"var(--github-calendar-level-1)",
	"var(--github-calendar-level-2)",
	"var(--github-calendar-level-3)",
	"var(--github-calendar-level-4)"
] as const

export const GITHUB_CALENDAR_BLOCK_SIZE = 10
export const GITHUB_CALENDAR_BLOCK_MARGIN = 3
const GITHUB_CALENDAR_FONT_SIZE = 14
const GITHUB_CALENDAR_LABEL_MARGIN = 8
const GITHUB_CALENDAR_CONTAINER_GAP = 8
const GITHUB_CALENDAR_WRAPPER_PADDING_Y = 16
const GITHUB_CALENDAR_FOOTER_WRAP_BUFFER = 15

const githubCalendarSvgHeight =
	GITHUB_CALENDAR_FONT_SIZE +
	GITHUB_CALENDAR_LABEL_MARGIN +
	(GITHUB_CALENDAR_BLOCK_SIZE + GITHUB_CALENDAR_BLOCK_MARGIN) * 7 -
	GITHUB_CALENDAR_BLOCK_MARGIN

const githubCalendarScrollPaddingTop = Math.ceil(0.1 * GITHUB_CALENDAR_FONT_SIZE)

export const GITHUB_CALENDAR_CONTAINER_HEIGHT_PX =
	githubCalendarScrollPaddingTop +
	githubCalendarSvgHeight +
	GITHUB_CALENDAR_CONTAINER_GAP +
	GITHUB_CALENDAR_FONT_SIZE +
	8 +
	GITHUB_CALENDAR_FOOTER_WRAP_BUFFER +
	GITHUB_CALENDAR_WRAPPER_PADDING_Y

export const GITHUB_CALENDAR_THEME = {
	light: [...GITHUB_CALENDAR_COLORS],
	dark: [...GITHUB_CALENDAR_COLORS]
}
