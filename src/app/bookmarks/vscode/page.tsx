import type { Metadata } from "next"

import VSCode from "@/components/widgets/vs-code"

export const metadata: Metadata = {
	title: "Visual Studio Code eklentilerim | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/bookmarks/vscode/"
	}
}

export default function VSCodePage() {
	return <VSCode />
}
