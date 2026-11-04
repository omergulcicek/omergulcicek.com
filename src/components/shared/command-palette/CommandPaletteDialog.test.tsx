import { renderWithRouter } from "@/test/render"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { useCommandPalette } from "@/hooks/use-command-palette"

import { CommandPaletteDialog } from "@/components/shared/command-palette/CommandPaletteDialog"
import { CommandPaletteProvider } from "@/components/shared/command-palette/CommandPaletteProvider"
import { CommandGroup, CommandItem } from "@/components/ui/command"

function FeatureGroup() {
	const { runCommand } = useCommandPalette()

	return (
		<CommandGroup heading="Özel grup">
			<CommandItem onSelect={() => runCommand(() => {})}>
				Özel sonuç
			</CommandItem>
		</CommandGroup>
	)
}

async function renderPalette() {
	const user = userEvent.setup()
	const view = await renderWithRouter(
		<CommandPaletteProvider>
			<CommandPaletteDialog>
				<FeatureGroup />
			</CommandPaletteDialog>
		</CommandPaletteProvider>
	)

	return { user, ...view }
}

describe("CommandPaletteDialog", () => {
	it("opens with Ctrl+K and lists the pages and the feature groups", async () => {
		const { user } = await renderPalette()

		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

		await user.keyboard("{Control>}k{/Control}")

		expect(await screen.findByRole("dialog")).toBeInTheDocument()
		expect(
			screen.getByText(SITE_CONTENT.commandGroups.pages)
		).toBeInTheDocument()
		expect(screen.getByText("Özel grup")).toBeInTheDocument()
	})

	it("navigates to a page and closes", async () => {
		const { user, router } = await renderPalette()

		await user.keyboard("{Control>}k{/Control}")
		await user.click(await screen.findByRole("option", { name: /^Blog/ }))

		expect(router.state.location.pathname).toBe("/blog")
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})

	it("closes after a feature group item runs", async () => {
		const { user } = await renderPalette()

		await user.keyboard("{Control>}k{/Control}")
		await user.click(await screen.findByRole("option", { name: "Özel sonuç" }))

		expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
	})

	it("shows the empty state when nothing matches", async () => {
		const { user } = await renderPalette()

		await user.keyboard("{Control>}k{/Control}")
		await user.type(await screen.findByRole("combobox"), "zzzzqqq")

		expect(
			await screen.findByText(SITE_CONTENT.commandPaletteEmpty)
		).toBeInTheDocument()
	})
})
