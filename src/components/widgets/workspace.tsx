"use client"

import Bookmarks from "@/layouts/bookmarks-layout"
import { motion } from "framer-motion"

import { WorkpaceItem } from "@/widgets/workpace-item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs"
import {
	backpackWorkspace,
	deskWorkspace,
	homeWorkspace,
	photoWorkspace
} from "@/data/workspace-data"

export function Workspace() {
	return (
		<>
			<Bookmarks>
				<Bookmarks.PageTitle>Ekipman</Bookmarks.PageTitle>
				<Bookmarks.PageSubTitle>
					Gün içinde ve çalışma hayatında sürekli kullandığım araçların listesi
				</Bookmarks.PageSubTitle>
				<Bookmarks.PageContent className="max-w-3xl">
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.25 }}
						className="flex items-center justify-center mb-10 md:md-0"
					>
						<Tabs defaultValue="backpack" className="w-full">
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
					</motion.div>
				</Bookmarks.PageContent>
			</Bookmarks>
		</>
	)
}
