import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { SITE } from "@/constants/site"
import { USER } from "@/constants/user"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
			>
				<main className="min-h-screen">{children}</main>
			</body>
		</html>
	)
}
