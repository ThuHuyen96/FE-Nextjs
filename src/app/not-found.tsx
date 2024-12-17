import NotFoundBox from "@/component/Notfound"

export const metadata = {
  title: "404 - Không tìm thấy trang",
  description: "Trang bạn đang tìm kiếm không tồn tại. Vui lòng quay lại trang chủ.",
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
