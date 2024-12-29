"use client"

import { useState } from "react"

import { cn } from "@/utils"
import { Check, ChevronsUpDown, FilterX } from "lucide-react"

import { Button } from "@/ui/button"
import { CategoryIcon } from "@/ui/category-icon"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

export function SelectFilterWidget({
	filters,
	value,
	setValue
}: {
	filters: string[]
	value: string
	setValue: (value: string) => void
}) {
	return (
		<>
			{/* TODO: Mobil filtre */}

			<SelectFilter filters={filters} value={value} setValue={setValue} />
		</>
	)
}

export const SelectFilter = ({
	filters,
	value,
	setValue
}: {
	filters: string[]
	value: string
	setValue: (value: string) => void
}) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-full md:w-60 justify-between"
					>
						{value
							? filters.find((filter) => filter === value)
							: "Kategori seç"}
						<ChevronsUpDown className="opacity-50" size={16} />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-60 h-96 p-0">
					<Command>
						<CommandInput placeholder="Filtrele..." />
						<CommandList className="max-h-none">
							<CommandEmpty>Kategori bulunamadı.</CommandEmpty>
							<CommandGroup>
								{filters.map((filter) => (
									<CommandItem
										key={filter}
										value={filter}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue)
											setOpen(false)
										}}
									>
										<CategoryIcon icon={filter} />
										{filter}
										<Check
											className={cn(
												"ml-auto",
												value === filter ? "opacity-100" : "opacity-0"
											)}
										/>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>

			{value && (
				<button
					className="flex items-center gap-2 text-sm leading-9 text-tertiary-foreground hover:text-black cursor-pointer transition"
					onClick={() => setValue("")}
				>
					<FilterX size={16} />
					<span>Temizle</span>
				</button>
			)}
		</>
	)
}
