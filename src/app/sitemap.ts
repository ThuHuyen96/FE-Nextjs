import { appConfig } from "@/config/app"
import type { MetadataRoute } from "next"

export const revalidate = 604800 // 1 tuần

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: appConfig.appUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
