import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseLink } from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion.client"
import {
	pageSectionClass,
	pageShellClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { StackCategoryList } from "@/features/stack/components/stack-category-list"
import {
	SETUP_CONTENT,
	SETUP_EDITOR_LINKS
} from "@/features/setup/constants/setup.constants"

export function SetupPage() {
	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader title={SETUP_CONTENT.pageTitle}>
						<p className={proseParagraphClass}>{SETUP_CONTENT.pageDescription}</p>
					</PageHeader>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading className="mt-0 md:mt-0">
						{SETUP_CONTENT.editorSectionTitle}
					</SectionHeading>
					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							Ana editörüm{" "}
							<ProseLink href={SETUP_EDITOR_LINKS.cursor}>Cursor</ProseLink>.
							Tema olarak{" "}
							<ProseLink href={SETUP_EDITOR_LINKS.beardedTheme}>
								Bearded Theme
							</ProseLink>
							&apos;in Black &amp; Gold varyantını, font olarak{" "}
							<ProseLink href={SETUP_EDITOR_LINKS.firaCode}>Fira Code</ProseLink>{" "}
							kullanıyorum. Tam{" "}
							<ProseLink href={SETUP_EDITOR_LINKS.settings}>
								settings.json
							</ProseLink>{" "}
							ayarlarım notes reposunda.
						</p>
						<p className={proseParagraphClass}>
							AI model tercihim Gemini. Agent&apos;ı{" "}
							<ProseLink href={SETUP_EDITOR_LINKS.virastackAiRules}>
								ViraStack AI Rules
							</ProseLink>{" "}
							ile mimari temel,{" "}
							<ProseLink href={SETUP_EDITOR_LINKS.emilSkills}>
								emilkowalski/skills
							</ProseLink>{" "}
							ile animasyonlar,{" "}
							<ProseLink href={SETUP_EDITOR_LINKS.makeInterfacesFeelBetter}>
								make-interfaces-feel-better
							</ProseLink>{" "}
							ile UI cilası için yönlendiriyorum.
						</p>
					</div>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading>{SETUP_CONTENT.stackSectionTitle}</SectionHeading>
					<StackCategoryList />
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
