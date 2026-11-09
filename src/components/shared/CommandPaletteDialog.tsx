import { useNavigate } from "@tanstack/react-router"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import * as m from "@/paraglide/messages.js"

export type CommandPaletteItem = {
  /** Unique across all groups; also what cmdk matches the query against, with the keywords. */
  id: string
  label: string
  /** A localized URL path, such as `/blog/barrel-file` or `/en/about`. */
  href: string
  keywords?: string[]
}

export type CommandPaletteGroup = { heading: string; items: CommandPaletteItem[] }

type CommandPaletteDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  groups: CommandPaletteGroup[]
  loading: boolean
}

/** The palette itself, loaded only once someone opens it. */
export function CommandPaletteDialog({
  open,
  onOpenChange,
  groups,
  loading
}: CommandPaletteDialogProps) {
  const navigate = useNavigate()

  const select = (href: string) => {
    onOpenChange(false)
    void navigate({ href })
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title={m.search_title()}
      description={m.search_description()}
      // Opened from the keyboard many times a day: it appears at once, with no zoom or fade.
      className="transition-none"
    >
      {/* shadcn's CommandDialog leaves the cmdk root to the caller. */}
      <Command>
        <CommandInput placeholder={m.search_placeholder()} />
        <CommandList>
          <CommandEmpty>{loading ? m.search_loading() : m.search_empty()}</CommandEmpty>
          {groups.map((group) =>
            group.items.length > 0 ? (
              <CommandGroup key={group.heading} heading={group.heading}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.id}
                    keywords={[item.label, ...(item.keywords ?? [])]}
                    onSelect={() => select(item.href)}
                  >
                    <span className="truncate">{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : null
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
