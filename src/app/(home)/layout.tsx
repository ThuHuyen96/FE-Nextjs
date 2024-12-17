import Footer from "@/component/Layout/Footer"
import GoToTop from "@/component/Layout/GoToTop"
import Header from "@/component/Layout/Header"

type Props = {
  children?: React.ReactNode
}

export default async function LayoutScreenHome({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col font-hiraKaku">
      <Header />
      <div className="grow relative">{children}</div>
      <Footer />
      <GoToTop />
    </div>
  )
}
