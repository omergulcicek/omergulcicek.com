import { createIsomorphicFn } from "@tanstack/react-start"
import { getCookie } from "@tanstack/react-start/server"

import { THEME_COOKIE_KEY, type Theme } from "@/lib/theme/theme.types"

function parseTheme(value: string | undefined | null): Theme {
	return value === "dark" ? "dark" : "light"
}

function readThemeCookieFromDocument(): Theme {
	const match = document.cookie.match(
		new RegExp(`(?:^|;\\s*)${THEME_COOKIE_KEY}=(dark|light)`)
	)

	return parseTheme(match?.[1])
}

export const resolveDocumentTheme = createIsomorphicFn()
	.server(() => parseTheme(getCookie(THEME_COOKIE_KEY)))
	.client(() => readThemeCookieFromDocument())
