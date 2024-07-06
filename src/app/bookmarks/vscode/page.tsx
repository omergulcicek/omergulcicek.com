"use client"

import Bookmarks from "@/layouts/bookmarks-layout"

import { VSCodeList } from "@/widgets/vscode-list"

export default function VSCode() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>VS Code</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>
				Visual Studio Code eklentilerim
			</Bookmarks.PageSubTitle>
			<Bookmarks.PageContent>
				<VSCodeList />
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
