import { env } from "@/env"

export const SITE = {
	name: "Ömer Gülçiçek",
	title: "Ömer Gülçiçek",
	jobTitle: "Frontend Engineer",
	defaultTitle: "Ömer Gülçiçek — Frontend Engineer",
	description:
		"Frontend Engineer. React, Next.js ve TypeScript ile performanslı arayüzler; blog, projeler ve açık kaynak (ViraStack).",
	url: "https://omergulcicek.com",
	repository: "https://github.com/omergulcicek/omergulcicek.com",
	locale: "tr_TR",
	twitterHandle: "@omergulcicek",
	defaultOgImage: "/omergulcicek-672.jpg",
	analyticsId: env.VITE_GA_ID
} as const
