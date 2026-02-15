"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { ExternalLink, FileText, FolderOpen, Search } from "lucide-react"

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/ui"
import type { BlogPostType } from "@/features/blog/types/blog.types"
import { projectsData } from "@/features/projects"

import { navItemsData } from "@/data/nav.data"

interface CommandPaletteProps {
	posts: BlogPostType[]
}

export function CommandPalette({ posts }: CommandPaletteProps) {
	const [open, setOpen] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	const runCommand = (command: () => unknown) => {
		setOpen(false)
		command()
	}

	// Tüm blog yazılarını arama için hazırla
	const allPosts = posts.map((post) => ({
		...post,
		searchValue:
			`${post.metadata.title} ${post.metadata.description || ""} ${post.metadata.category || ""}`.toLowerCase()
	}))

	// Tüm projeleri arama için hazırla
	const allProjects = projectsData.map((project) => ({
		...project,
		searchValue: `${project.title} ${project.description}`.toLowerCase()
	}))

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="flex h-8 items-center gap-2 rounded-full border border-input bg-zinc-50 px-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
			>
				<Search className="size-4 text-muted-foreground" />
				<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border bg-white px-1.5 font-mono text-sm font-medium text-muted-foreground dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
					<span>⌘</span>
					<span>K</span>
				</kbd>
			</button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Sayfa, blog yazısı veya proje ara..." />
				<CommandList>
					<CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
					<CommandGroup heading="Sayfalar">
						{navItemsData.map((item) => (
							<CommandItem
								key={item.href}
								onSelect={() => runCommand(() => router.push(item.href))}
								className="data-disabled:opacity-100"
							>
								<item.icon className="mr-2 size-4" />
								{item.label}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Blog Yazıları">
						{allPosts.map((post) => (
							<CommandItem
								key={post.slug}
								onSelect={() =>
									runCommand(() => router.push(`/blog/${post.slug}`))
								}
								value={post.searchValue}
								className="data-disabled:opacity-100"
							>
								<FileText className="mr-2 h-4 w-4" />
								<div className="flex flex-col">
									<span>{post.metadata.title}</span>
									{post.metadata.description && (
										<span className="text-xs text-muted-foreground">
											{post.metadata.description}
										</span>
									)}
								</div>
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Projeler">
						{allProjects.map((project) => (
							<CommandItem
								key={project.title}
								onSelect={() =>
									runCommand(() => window.open(project.link, "_blank"))
								}
								value={project.searchValue}
								className="data-disabled:opacity-100"
							>
								<FolderOpen className="mr-2 h-4 w-4" />
								<div className="flex flex-col">
									<span>{project.title}</span>
									<span className="text-xs text-muted-foreground">
										{project.description}
									</span>
								</div>
								<ExternalLink className="ml-auto h-4 w-4" />
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
