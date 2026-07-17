import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon, NpmIcon, XIcon } from "@/components/icons"
import { SOCIAL_LINKS } from "@/constants/social.constants"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

const SOCIAL_ICONS = {
	GitHub: GitHubIcon,
	npm: NpmIcon,
	LinkedIn: LinkedInIcon,
	X: XIcon
} as const

const SOCIAL_ICON_COLORS = {
	GitHub: "text-[#181717] dark:text-[#f0f6fc]",
	npm: "",
	LinkedIn: "",
	X: "text-foreground"
} as const

type SocialLinksProps = {
	className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
	return (
		<nav className={cn("flex items-center", className)} aria-label="Sosyal linkler">
			{SOCIAL_LINKS.map((social) => {
				const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS]
				const iconColor =
					SOCIAL_ICON_COLORS[social.label as keyof typeof SOCIAL_ICON_COLORS]

				return (
					<Button key={social.href} variant="ghost" size="icon-sm" asChild>
						<a
							href={withOutboundUtm(social.href)}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${social.label} profilini ziyaret et`}
						>
							<Icon className={cn("size-4", iconColor)} />
						</a>
					</Button>
				)
			})}
		</nav>
	)
}
