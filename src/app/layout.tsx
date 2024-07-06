import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { cn } from "@/utils"

import Footer from "@/shared/footer"
import Header from "@/shared/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Ömer Gülçiçek",
	description: "Senior Frontend Developer"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="tr" className="flex min-h-full flex-col">
			<body className={cn(inter.className, "flex h-full flex-col")}>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
