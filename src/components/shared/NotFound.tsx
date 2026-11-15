import { Link } from "@tanstack/react-router"

import { getLangParam } from "@/helpers/localized-url"

import { Button } from "@/components/ui/button"
import * as m from "@/paraglide/messages.js"

export function NotFound() {
  return (
    <div className="mx-auto flex flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <p className="text-sm font-medium text-muted-foreground tabular-nums">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">{m.not_found_title()}</h1>
      <p className="max-w-md text-sm text-muted-foreground">{m.not_found_description()}</p>
      <Button
        nativeButton={false}
        render={<Link to="/{-$lang}" params={{ lang: getLangParam() }} />}
      >
        {m.go_home()}
      </Button>
    </div>
  )
}
