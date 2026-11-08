import { ChevronDownIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"
import { assertIsLocale, getLocale, setLocale } from "@/paraglide/runtime.js"

export function LanguageSwitcher() {
  const currentLang = getLocale()

  // setLocale loads the localized URL as a new document, so the server HTML and the URL agree.
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    void setLocale(assertIsLocale(e.target.value))
  }

  return (
    <div className="relative">
      <select
        aria-label={m.language()}
        value={currentLang}
        onChange={onChange}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "cursor-pointer appearance-none bg-transparent pr-7 pl-2.5"
        )}
      >
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
      <ChevronDownIcon
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  )
}
