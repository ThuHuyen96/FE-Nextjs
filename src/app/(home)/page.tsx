import { Metadata } from "next"
import HomeContainerSection from "./section/HomeContainerSection"
import { appConfig } from "@/config/app"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "IT Consultis",
}

const fetchtypePokemon: any = async () => {
  try {
    const res = await fetch(`${appConfig.apiUrl}/v2/type`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      next: { revalidate: 0 },
    })
    if (!res.ok) throw new Error("Failed to fetch album data")
    return res.json()
  } catch (error) {
    console.error("Error fetching album data:", error)
    return null
  }
}

export default async function Home() {
  const types = await fetchtypePokemon()

  if (!types) notFound()

  return <HomeContainerSection types={types?.results || []} />
}
