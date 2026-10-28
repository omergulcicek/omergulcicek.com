import {
	THEME_COOKIE_KEY,
	THEME_DARK_CLASS,
	THEME_STORAGE_KEY,
	THEME_SYSTEM_DARK_QUERY
} from "@/lib/theme/theme.types"

/**
 * Inline script that runs in <head> before the first paint. Pages are prerendered without
 * knowing the visitor's theme, so the theme is resolved here instead of after hydration:
 * a saved choice (localStorage, then cookie) wins, otherwise the OS preference.
 * If storage is blocked (privacy mode), the OS preference is the fallback by design.
 */
export const THEME_BOOT_SCRIPT = `(function(){var t=null;try{t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})}catch(e){t=null}if(t!=="dark"&&t!=="light"){var m=document.cookie.match(/(?:^|;\\s*)${THEME_COOKIE_KEY}=(dark|light)/);t=m?m[1]:null}var d=t?t==="dark":window.matchMedia(${JSON.stringify(THEME_SYSTEM_DARK_QUERY)}).matches;document.documentElement.classList.toggle(${JSON.stringify(THEME_DARK_CLASS)},d)})()`
