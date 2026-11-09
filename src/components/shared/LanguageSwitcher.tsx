import { Button } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"
import { getLocale, locales, setLocale } from "@/paraglide/runtime.js"

export function LanguageSwitcher() {
  const currentLang = getLocale()
  const nextLang = locales[(locales.indexOf(currentLang) + 1) % locales.length] ?? currentLang

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8 font-mono text-xs"
      // setLocale loads the localized URL as a new document, so the server HTML and the URL agree.
      onClick={() => void setLocale(nextLang)}
    >
      {currentLang.toLocaleUpperCase(currentLang)}
      {/* The name starts with the visible code, so voice control users can say what they see. */}
      <span className="sr-only">: {m.language_switch()}</span>
    </Button>
  )
}
