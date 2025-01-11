import type { Metadata } from "next"
import { Fira_Code, Inter } from "next/font/google"
import Head from "next/head"

import { Providers } from "@/providers"
import { cn } from "@/utils"
import { GoogleAnalytics } from "@next/third-parties/google"

import Footer from "@/shared/footer"
import Header from "@/shared/header"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const fira_code = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
	display: "swap"
})

export const metadata: Metadata = {
	title: "Ömer Gülçiçek | Frontend Developer",
	description:
		"Ömer Gülçiçek'in kişisel web sitesi. HTML, CSS, JavaScript, React, Next.js, Tailwind CSS ve diğer teknolojiler hakkında içerikler.",
	authors: {
		name: "Ömer Gülçiçek",
		url: "https://omergulcicek.com"
	},
	publisher: "Ömer Gülçiçek",
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: "https://omergulcicek.com"
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="tr" className="flex min-h-full flex-col">
			<Head>
				<link rel="shortcut icon" href="/static/favicon.svg" />
				<link rel="icon" />
			</Head>
			<body
				className={cn(
					inter.className,
					`${fira_code.variable}`,
					"flex h-full flex-col"
				)}
			>
				<Providers>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</Providers>
			</body>
			<GoogleAnalytics gaId="G-2SSDRN8Z0R" />
		</html>
	)
}
