import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseLink } from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion"
import {
	pageSectionClass,
	pageShellClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { StackCategoryList } from "@/features/stack/components/stack-category-list"
import { SETUP_LINKS } from "@/features/setup/constants/setup.constants"

export function SetupPage() {
	const { setup } = SITE_COPY

	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader title={setup.title}>
						<p className={proseParagraphClass}>{setup.intro}</p>
					</PageHeader>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading className="mt-0 md:mt-0">
						{setup.toolsTitle}
					</SectionHeading>
					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							{setup.assistant.before}
							<ProseLink href={SETUP_LINKS.claudeCode}>
								{setup.assistant.link}
							</ProseLink>
							{setup.assistant.after}
						</p>
						<p className={proseParagraphClass}>
							{setup.agent.before}
							<ProseLink href={SETUP_LINKS.virastackAiRules}>
								{setup.agent.virastackAi}
							</ProseLink>
							{setup.agent.afterVirastackAi}
							<ProseLink href={SETUP_LINKS.emilSkills}>
								{setup.agent.emilSkills}
							</ProseLink>
							{setup.agent.afterEmilSkills}
							<ProseLink href={SETUP_LINKS.jakubSkills}>
								{setup.agent.jakubSkills}
							</ProseLink>
							{setup.agent.after}
						</p>
						<p className={proseParagraphClass}>{setup.computer}</p>
					</div>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading>{setup.stackTitle}</SectionHeading>
					<StackCategoryList />
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
