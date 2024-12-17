import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vifiba",
    short_name: "Vifiba",
    description: "Vifiba",
    start_url: "/",
    display: "standalone",
    background_color: "#a3200d",
    theme_color: "#a3200d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
