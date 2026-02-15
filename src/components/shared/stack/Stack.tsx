"use client"

import { useMemo } from "react"

import { Logo } from "@/types/logo.types"

import { Section } from "@/shared"
import { LogoCarousel } from "@/ui"

import { stackData } from "@/data"

export function Stack() {
	const allLogos: Logo[] = useMemo(() => stackData, [])

	return (
		<Section>
			<LogoCarousel allLogos={allLogos} columnCount={5} />
		</Section>
	)
}
