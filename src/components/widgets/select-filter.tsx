"use client"

import { useState } from "react"

import { Check, ChevronsUpDown, FilterX, SlidersHorizontal } from "lucide-react"

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
import { Separator } from "@/ui/separator"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/ui/sheet"

import { cn, personalFilters, technicalFilters } from "@/utils"

export function SelectFilterWidget({
	filters,
	value,
	setValue,
	articleCounts
}: {
	filters: string[]
	value: string
	setValue: (value: string) => void
	articleCounts: { personal: number; technical: number }
}) {
	const filteredFilters = personalFilters.includes(value)
		? personalFilters.filter((filter) => filter !== "Kişisel")
		: technicalFilters.includes(value)
			? technicalFilters.filter((filter) => filter !== "Teknik")
			: filters

	return (
		<>
			<div className="flex items-center md:items-start mb-10 md:h-20">
				<div className="flex flex-col flex-1">
					<div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-4 md:h-10">
						<Button
							variant="link"
							className={cn(
								technicalFilters.find((filter) => filter === value) &&
									"text-black dark:text-white pointer-events-none",
								"px-0"
							)}
							onClick={() => setValue("Teknik")}
						>
							Teknik yazılar ({articleCounts.technical} adet)
						</Button>

						<Separator className="hidden md:flex" orientation="vertical" />

						<Button
							variant="link"
							className={cn(
								personalFilters.find((filter) => filter === value) &&
									"text-black dark:text-white pointer-events-none",
								"px-0"
							)}
							onClick={() => setValue("Kişisel")}
						>
							Kişisel yazılar ({articleCounts.personal} adet)
						</Button>
					</div>

					{value !== "Kişisel" && value !== "Teknik" && (
						<p className="font-mono text-sm md:leading-9 text-tertiary-foreground">
							<strong>{value}</strong> kategorisi seçildi.
						</p>
					)}
				</div>

				<FilterSheet
					filters={filteredFilters}
					value={value}
					setValue={setValue}
				/>

				<FilterDropdown
					filters={filteredFilters}
					value={value}
					setValue={setValue}
				/>
			</div>
		</>
	)
}

export const FilterSheet = ({
	filters,
	value,
	setValue
}: {
	filters: string[]
	value: string
	setValue: (value: string) => void
}) => {
	return (
		<>
			<Sheet>
				<SheetTrigger className="flex md:hidden">
					<Button variant="outline" size="icon">
						<SlidersHorizontal size={16} />
					</Button>
				</SheetTrigger>

				<SheetContent>
					<SheetHeader className="gap-5">
						<SheetTitle>Kategori Seç</SheetTitle>
						<SheetDescription className="flex flex-col items-start gap-5">
							<p>Yazı filtrelemek için bir şey seçin.</p>

							<div>
								{filters.map((filter) => (
									<SheetClose
										key={filter}
										className="flex items-center gap-2 w-full p-2 rounded-sm transition cursor-pointer hover:bg-accent"
										onClick={() => setValue(filter)}
									>
										<CategoryIcon icon={filter} />
										{filter}
										<Check
											className={cn(
												"ml-auto",
												value === filter ? "opacity-100" : "opacity-0"
											)}
										/>
									</SheetClose>
								))}
							</div>

							{value !== "Kişisel" && value !== "Teknik" && (
								<div className="pt-2 w-full flex items-center justify-center">
									<Button
										variant="link"
										className="flex items-center gap-2 text-sm leading-9 text-tertiary-foreground hover:text-black dark:hover:text-white cursor-pointer transition"
										onClick={() => setValue("Teknik")}
									>
										<FilterX size={16} />
										<span>Temizle</span>
									</Button>
								</div>
							)}
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</>
	)
}

export const FilterDropdown = ({
	filters,
	value,
	setValue
}: {
	filters: string[]
	value: string
	setValue: (value: string) => void
}) => {
	const [open, setOpen] = useState(false)

	const filterText =
		filters.find((filter) => filter === value) || "Kategori seç"

	return (
		<>
			<div className="hidden md:flex flex-col items-center w-40 md:w-auto">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							aria-label="Kategori seç"
							className="w-full md:w-60 justify-between"
						>
							{filterText}
							<ChevronsUpDown className="opacity-50" size={16} />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-60 p-0">
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
												if (value !== filter) {
													setValue(currentValue === value ? "" : currentValue)
													setOpen(false)
												}
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

				{value !== "Kişisel" && value !== "Teknik" && (
					<Button
						variant="link"
						className="flex items-center gap-2 text-sm leading-9 text-tertiary-foreground hover:text-black dark:hover:text-white cursor-pointer transition"
						onClick={() => setValue("Teknik")}
					>
						<FilterX size={16} />
						<span>Temizle</span>
					</Button>
				)}
			</div>
		</>
	)
}
