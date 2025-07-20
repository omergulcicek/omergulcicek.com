import type { Metadata } from "next"

import { GeistSans } from "geist/font/sans"

import "./globals.css"

import { SITE } from "@/constants/site"
import { USER } from "@/constants/user"

import { Header } from "@/shared"

export const metadata: Metadata = {
	metadataBase: new URL(SITE.url),
	alternates: {
		canonical: "/"
	},
	title: {
		template: `%s | ${SITE.title}`,
		default: `${USER.displayName} - ${USER.jobTitle}`
	},
	description: SITE.description,
	keywords: SITE.keywords,
	authors: [
		{
			name: "ncdai",
			url: SITE.url
		}
	],
	creator: "ncdai",
	openGraph: {
		siteName: SITE.name,
		url: "/",
		type: "profile",
		firstName: USER.firstName,
		lastName: USER.lastName,
		username: USER.username
	},
	twitter: {
		card: "summary_large_image",
		creator: USER.username
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="tr" suppressHydrationWarning>
			<body className={`${GeistSans.className} antialiased font-sans`}>
				<Header />
				<main className="min-h-screen">{children}</main>
			</body>
		</html>
	)
}
