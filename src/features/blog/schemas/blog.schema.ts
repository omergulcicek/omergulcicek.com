import { z } from "zod"

export const blogCategorySchema = z.enum(["technical", "personal"])
export const blogLocaleSchema = z.enum(["tr", "en"])
