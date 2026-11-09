import type { ComponentType, SVGProps } from "react"

import { useNavigate } from "@tanstack/react-router"

import {
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
  /** Shown before the label: the page's menu icon, or one for its kind of post. */
  icon: ComponentType<SVGProps<SVGSVGElement>>
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
      <CommandInput placeholder={m.search_placeholder()} />
      <CommandList>
        <CommandEmpty>{loading ? m.search_loading() : m.search_empty()}</CommandEmpty>
        {groups.map((group) =>
          group.items.length > 0 ? (
            <CommandGroup key={group.heading} heading={group.heading}>
              {group.items.map(({ id, label, href, icon: Icon, keywords }) => (
                <CommandItem
                  key={id}
                  value={id}
                  keywords={[label, ...(keywords ?? [])]}
                  onSelect={() => select(href)}
                >
                  <Icon aria-hidden />
                  <span className="truncate">{label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : null
        )}
      </CommandList>
    </CommandDialog>
  )
}
