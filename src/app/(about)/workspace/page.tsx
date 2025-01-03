import type { Metadata } from "next"

import { Workspace } from "@/widgets/workspace"

export const metadata: Metadata = {
	title:
		"Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/bookmarks/books/"
	}
}

export default function WorkspacePage() {
	return <Workspace />
}
