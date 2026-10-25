import { ME } from "@/constants/me.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { env } from "@/env"

export const SITE = {
	name: ME.personal.fullName,
	title: ME.personal.fullName,
	jobTitle: ME.personal.title,
	defaultTitle: `${ME.personal.fullName} — ${ME.personal.title}`,
	description: SITE_COPY.meta.home,
	url: ME.site.url,
	repository: ME.site.repository,
	feedPath: "/feed.xml",
	locale: "tr_TR",
	twitterHandle: ME.contact.xHandle,
	defaultOgImage: "/omergulcicek-672.jpg",
	googleSiteVerification: "zmwXV_nPeKUGEdvaM6Ue26BgLZLUTuzjVVUHI6c8OO8",
	analyticsId: env.VITE_GA_ID
} as const
