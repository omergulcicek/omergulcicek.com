import VSCode from "@/components/widgets/vs-code";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Visual Studio Code eklentilerim | Ömer Gülçiçek",
  alternates: {
		canonical: 'https://omergulcicek.com/bookmarks/vscode/',
	}
}

export default function VSCodePage() {
	return (
		<VSCode />
	)
}
