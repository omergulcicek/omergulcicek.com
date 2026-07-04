import {
	THEME_COOKIE_KEY,
	THEME_STORAGE_KEY,
	type Theme
} from "@/lib/theme/theme.types"

const THEME_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

export function persistThemePreference(theme: Theme) {
	window.localStorage.setItem(THEME_STORAGE_KEY, theme)
	document.cookie = `${THEME_COOKIE_KEY}=${theme};path=/;max-age=${THEME_COOKIE_MAX_AGE_SECONDS};SameSite=Lax`
}
