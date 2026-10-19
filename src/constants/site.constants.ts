import { env } from "@/env"

export const SITE = {
	name: "Ömer Gülçiçek",
	title: "Ömer Gülçiçek",
	jobTitle: "Frontend Mühendisi",
	defaultTitle: "Ömer Gülçiçek — Frontend Mühendisi",
	description:
		"Frontend Mühendisi ve ViraStack kurucusu. React, Next.js ve TanStack ile performanslı arayüzler; blog, projeler ve açık kaynak.",
	url: "https://omergulcicek.com",
	repository: "https://github.com/omergulcicek/omergulcicek.com",
	locale: "tr_TR",
	twitterHandle: "@omergulcicek",
	defaultOgImage: "/omergulcicek-672.jpg",
	analyticsId: env.VITE_GA_ID
} as const
