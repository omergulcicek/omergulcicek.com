import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import { ProseIconLink } from "@/components/shared/prose-link"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { ThemeAwareDualIcon } from "@/components/shared/theme-aware-dual-icon"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { Tanstack } from "@/components/ui/svgs/tanstack"

const introIconClass = "size-3.5 shrink-0"

/**
 * Rich-text version of `SITE_CONTENT.virastackSectionIntro`.
 * Keep the wording in sync with that constant (used for plain-text surfaces).
 */
export function VirastackSectionIntro() {
	return (
		<p className={proseParagraphClass}>
			<ProseEmphasis>ViraStack</ProseEmphasis>, bir frontend projesine
			başlarken ihtiyaç duyduğun parçaları bir araya getiren{" "}
			<em>açık kaynak</em> bir ekosistemdir:{" "}
			<ProseIconLink
				href="https://nextjs.org"
				icon={
					<NextjsIconDark
						className={`${introIconClass} dark:invert`}
						aria-hidden
					/>
				}
			>
				Next.js
			</ProseIconLink>{" "}
			ve{" "}
			<ProseIconLink
				href="https://tanstack.com/start"
				icon={<Tanstack className={introIconClass} aria-hidden />}
			>
				TanStack
			</ProseIconLink>{" "}
			başlangıç şablonları, yapay zekâyı mimarine göre yönlendiren{" "}
			<ProseEmphasis>ViraStack AI</ProseEmphasis> ve formlar ile erişilebilirlik
			gibi alanlarda kullanılan{" "}
			<ProseIconLink
				href="https://react.dev"
				icon={
					<ThemeAwareDualIcon
						light={ReactLight}
						dark={ReactDark}
						className={introIconClass}
						label="React"
					/>
				}
			>
				React
			</ProseIconLink>{" "}
			paketleri. <ProseEmphasis>Academy</ProseEmphasis> ise bu araçları
			kullanırken ihtiyaç duyacağın temelleri öğreten <em>ücretsiz</em>{" "}
			rehberlerdir.
		</p>
	)
}
