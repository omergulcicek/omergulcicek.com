"use client"

import { useEffect, useState } from "react"

import { AnimationListLayout } from "@/layouts/animation-list-layout"
import { sortBooks } from "@/utils"
import { motion } from "framer-motion"

import { Input } from "@/ui/input"
import { bookData } from "@/data/book-data"

export function BookList() {
	const [text, setText] = useState("")
	const [filterData, setFilterData] = useState(bookData)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [])

	useEffect(() => {
		if (!text) {
			setFilterData(bookData)
			return
		}

		const lowerText = text.toLocaleLowerCase()
		const filteredData = bookData.filter(
			(data: { title: string; description: string }) =>
				(data.description ?? "").toLocaleLowerCase().includes(lowerText) ||
				(data.title ?? "").toLocaleLowerCase().includes(lowerText)
		)

		setFilterData(filteredData)
	}, [text])

	if (!filterData || !mounted) return null

	return (
		<>
			<motion.div
				initial={{ opacity: 0, translateY: "100px" }}
				animate={{ opacity: 1, translateY: "0px" }}
				transition={{ delay: 0.25 }}
				className="flex items-center justify-center mb-10 md:md-0"
			>
				<Input
					type="text"
					className="w-full md:w-1/2 lg:w-72 text-base placeholder:text-sm"
					placeholder="Kitap yada yazar ara"
					onChange={(e) => setText(e.target.value)}
				/>
			</motion.div>

			<AnimationListLayout data={sortBooks(filterData)} />
		</>
	)
}
