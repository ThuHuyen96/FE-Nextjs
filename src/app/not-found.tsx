import NotFoundBox from "@/component/Notfound"

export const metadata = {
  title: "404 - Notfound",
}

export const dynamic = "force-dynamic"
export const revalidate = 0

export default function NotFound() {

  return (
    <div>
      <NotFoundBox />
    </div>
  )
}
