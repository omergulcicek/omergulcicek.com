import { Suspense, type ReactNode } from "react"
import { useNavigate } from "@tanstack/react-router"
import { ExternalLink } from "lucide-react"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { useCommandPalette } from "@/hooks/use-command-palette"
import { withOutboundUtm } from "@/helpers/outbound-url"
import { clearedRouteSearch } from "@/helpers/router/cleared-route-search"

import {
	SEARCH_ACTIONS,
	SEARCH_PAGES
} from "@/components/shared/command-palette/command-palette.constants"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/components/ui/command"

type CommandPaletteDialogProps = {
	/** Feature result groups, composed at the route level so this file imports no feature. */
	children?: ReactNode
}

export function CommandPaletteDialog({ children }: CommandPaletteDialogProps) {
	const { open, setOpen, runCommand } = useCommandPalette()
	const navigate = useNavigate()

	return (
		<CommandDialog
			open={open}
			onOpenChange={setOpen}
			title={SITE_CONTENT.commandPaletteTitle}
			description={SITE_CONTENT.commandPaletteDescription}
		>
			<CommandInput placeholder={SITE_CONTENT.commandPalettePlaceholder} />
			<CommandList>
				<CommandEmpty>{SITE_CONTENT.commandPaletteEmpty}</CommandEmpty>
				<CommandGroup heading={SITE_CONTENT.commandGroups.pages}>
					{SEARCH_PAGES.map((page) => (
						<CommandItem
							key={page.href}
							value={`${page.label} ${page.href}`}
							onSelect={() =>
								runCommand(() => {
									if (page.external) {
										window.open(
											withOutboundUtm(page.href),
											"_blank",
											"noopener,noreferrer"
										)
										return
									}

									void navigate({
										to: page.href,
										search: clearedRouteSearch,
										viewTransition: false
									})
								})
							}
						>
							<page.icon className="size-3.5 text-muted-foreground" />
							{page.label}
							{page.external ? (
								<ExternalLink className="ml-auto size-3.5 shrink-0 text-muted-foreground" />
							) : null}
						</CommandItem>
					))}
				</CommandGroup>
				<Suspense fallback={null}>{children}</Suspense>
				<CommandGroup heading={SITE_CONTENT.commandGroups.actions}>
					{SEARCH_ACTIONS.map((action) => {
						const ActionIcon = action.icon

						return (
							<CommandItem
								key={action.href}
								value={action.label}
								onSelect={() =>
									runCommand(() => {
										window.open(
											withOutboundUtm(action.href),
											"_blank",
											"noopener,noreferrer"
										)
									})
								}
							>
								<ActionIcon className={action.iconClassName} />
								{action.label}
							</CommandItem>
						)
					})}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	)
}
