"use client"

import { useMemo } from "react"

import { Logo } from "@/types/logo-type"

import { LogoCarousel } from "@/ui"
import { Section } from "@/widgets"

import { STACK } from "@/data/stack-data"

export function Stack() {
	const allLogos: Logo[] = useMemo(() => STACK, [])

	return (
		<Section>
			<LogoCarousel allLogos={allLogos} columnCount={4} />
		</Section>
	)
}
