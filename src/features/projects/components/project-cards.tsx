import { SectionHeading } from "@/components/shared/SectionHeading"

export function ProjectsSectionHeading({
	children,
	className
}: {
	children: string
	className?: string
}) {
	return <SectionHeading className={className}>{children}</SectionHeading>
}
