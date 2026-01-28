import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

import { GeistSans } from "geist/font/sans"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { SITE } from "@/constants/site"
import { USER } from "@/constants/user"

import {
	Footer,
	Header,
	StructuredData,
	ThemeProvider,
	WebVitals
} from "@/shared"

import { getAllPosts } from "@/data/blog.data"

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
	const posts = getAllPosts()

	return (
		<html lang="tr" suppressHydrationWarning>
			<body className={`${GeistSans.className} antialiased font-sans`}>
				<StructuredData type="website" />
				<StructuredData type="person" />
				<ThemeProvider>
					<WebVitals />
					<NuqsAdapter>
						<div data-vaul-drawer-wrapper="">
							<div className="relative flex min-h-screen flex-col bg-background">
								<Header posts={posts} />
								<main id="main-content" className="min-h-screen">
									{children}
								</main>
								<Footer />
							</div>
						</div>
					</NuqsAdapter>
				</ThemeProvider>
			</body>
			{SITE.analyticsId && <GoogleAnalytics gaId={SITE.analyticsId} />}
		</html>
	)
}
