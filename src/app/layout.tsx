import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

import { GeistSans } from "geist/font/sans"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { SITE } from "@/constants/site"
import { USER } from "@/constants/user"

import { Footer, Header, WebVitals } from "@/shared"

import "./globals.css"

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
			name: "omergulcicek",
			url: SITE.url
		}
	],
	creator: "omergulcicek",
	openGraph: {
		siteName: SITE.name,
		url: "/",
		type: "profile",
		firstName: USER.firstName,
		lastName: USER.lastName,
		username: USER.username,
		images: [
			{
				url: "/omergulcicek.png",
				width: 1200,
				height: 630,
				alt: `${USER.displayName} - ${USER.jobTitle}`
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		creator: USER.username,
		images: ["/omergulcicek.png"]
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="tr" suppressHydrationWarning className="scroll-smooth">
			<body className={`${GeistSans.className} antialiased font-sans`}>
				<WebVitals />
				<NuqsAdapter>
					<div data-vaul-drawer-wrapper="">
						<div className="relative flex min-h-screen flex-col bg-background">
							<Header />
							<main className="min-h-screen">{children}</main>
							<Footer />
						</div>
					</div>
				</NuqsAdapter>
			</body>
			{SITE.analyticsId && <GoogleAnalytics gaId={SITE.analyticsId} />}
		</html>
	)
}
