"use client"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { WorkpaceItem } from "@/widgets/workpace-item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs"
import { Title } from "@/ui/title"
import {
	backpackWorkspace,
	deskWorkspace,
	homeWorkspace,
	photoWorkspace
} from "@/data/workspace-data"

export default function Workspace() {
	return (
		<Container className="mt-10 md:mt-24 max-w-2xl">
			<motion.h1
				initial={{ opacity: 0, translateY: "100px" }}
				animate={{ opacity: 1, translateY: "0px" }}
				transition={{ delay: 0.05 }}
			>
				<Title tag="h1">Ekipmanlarım</Title>
			</motion.h1>

			<p className="text-lg leading-8 text-neutral-500 my-2">
				Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi
			</p>

			<Tabs defaultValue="backpack" className="mt-20 w-full">
				<TabsList className="grid grid-cols-4 mb-10">
					<TabsTrigger value="backpack">Sırt Çantası</TabsTrigger>
					<TabsTrigger value="home">Ev</TabsTrigger>
					<TabsTrigger value="desk">Masa</TabsTrigger>
					<TabsTrigger value="photo">Fotoğraf</TabsTrigger>
				</TabsList>

				<TabsContent value="backpack">
					<WorkpaceItem data={backpackWorkspace} />
				</TabsContent>
				<TabsContent value="home">
					<WorkpaceItem data={homeWorkspace} />
				</TabsContent>
				<TabsContent value="desk">
					<WorkpaceItem data={deskWorkspace} />
				</TabsContent>
				<TabsContent value="photo">
					<WorkpaceItem data={photoWorkspace} />
				</TabsContent>
			</Tabs>
		</Container>
	)
}
