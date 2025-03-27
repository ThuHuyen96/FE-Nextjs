import GoToTop from "@/component/Layout/GoToTop"

type Props = {
  children?: React.ReactNode
}

export default async function LayoutScreenHome({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col font-hiraKaku">
      <div className="grow relative">{children}</div>
      <GoToTop />
    </div>
  )
}
