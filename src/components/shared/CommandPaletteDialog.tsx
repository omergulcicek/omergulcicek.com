import type { ComponentType, SVGProps } from "react"

import { useNavigate } from "@tanstack/react-router"
import { defaultFilter } from "cmdk"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

type CommandPaletteItem = {
  /** Unique across all groups; also what cmdk matches the query against, with the keywords. */
  id: string
  label: string
  /** A localized URL path, such as `/blog/barrel-file` or `/en/about`. */
  href: string
  /** Shown before the label: the page's menu icon, or one for its kind of post. */
  icon: ComponentType<SVGProps<SVGSVGElement>>
  keywords?: string[]
  /** Matched as plain text, word by word, after the fuzzy match on the label and keywords. */
  description?: string
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

  // cmdk's fuzzy match suits short labels, but on a 150-character description almost any query
  // finds its letters in order. Descriptions match only when every word appears as written.
  const locale = getLocale()
  const descriptions = new Map(
    groups.flatMap((group) =>
      group.items.flatMap(({ id, description }) =>
        description ? [[id, description.toLocaleLowerCase(locale)] as const] : []
      )
    )
  )
  const filter = (value: string, search: string, keywords?: string[]) => {
    const fuzzy = defaultFilter(value, search, keywords)
    if (fuzzy > 0) return fuzzy
    const description = descriptions.get(value)
    if (!description) return 0
    const words = search.toLocaleLowerCase(locale).split(/\s+/).filter(Boolean)
    // Below any fuzzy hit, so title and tag matches stay on top.
    return words.length > 0 && words.every((word) => description.includes(word)) ? 0.01 : 0
  }

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
      filter={filter}
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
