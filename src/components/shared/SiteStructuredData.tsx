import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SITE } from "@/constants/site.constants"
import { SOCIAL_LINKS } from "@/constants/social.constants"

export function SiteStructuredData() {
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: SITE.name,
		jobTitle: SITE.jobTitle,
		url: SITE.url,
		email: EXTERNAL_LINKS.email.replace("mailto:", ""),
		image: `${SITE.url}${SITE.defaultOgImage}`,
		sameAs: SOCIAL_LINKS.map((link) => link.href)
	}

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE.name,
		url: SITE.url,
		description: SITE.description,
		inLanguage: "tr-TR",
		author: {
			"@type": "Person",
			name: SITE.name,
			url: SITE.url
		},
		publisher: {
			"@type": "Person",
			name: SITE.name,
			url: SITE.url
		}
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
		</>
	)
}
