"use client"

import { useMemo } from "react"

import { useMediaQuery } from "usehooks-ts"

import { Logo } from "@/types/logo.types"

import { Section } from "@/shared"
import { LogoCarousel } from "@/ui"

import { stackData } from "@/data"

export function Stack() {
	const allLogos: Logo[] = useMemo(() => stackData, [])
	const isDesktop = useMediaQuery("(min-width: 1024px)")

	return (
		<Section>
			<LogoCarousel allLogos={allLogos} columnCount={isDesktop ? 5 : 3} />
		</Section>
	)
}
