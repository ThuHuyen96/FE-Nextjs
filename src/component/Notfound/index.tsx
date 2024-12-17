import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"

type Props = {
  children?: React.ReactNode
  title?: string
  desc?: string
  className?: string
}

export default function NotFoundBox({ title, desc, className }: Props) {
  return (
    <div className={classNames("flex items-center justify-center bg-white md:bg-gray-100", className ? className : "h-[calc(100vh-80px)] lg:h-[calc(100vh-120px)]")}>
      <div className="wrapper px-[15px]">
        <div className="bg-white rounded-xl md:shadow-lg md:grid md:grid-cols-2 gap-[40px] lg:gap-[70px] xl:gap-[90px] 2xl:gap-[100px] md:h-[500px] max-h-[70vh] lg:my-4 py-4 md:pb-0">
          <div className="flex items-center pb-10 md:pb-0">
            <Image
              src="/logo.jpg"
              alt="404"
              width={490}
              height={45}
              className="max-w-full"
            />
          </div>
          <div className="flex items-center">
            <div className="w-full md:max-w-[360px] px-[15px] md:pl-0 lg:pr-0">
              <h1 className="text-[20px] md:text-[24px] font-medium md:font-semibold text-[var(--primary-color)] md:text-[var(--secondary-color)] mt-0 mb-[16px] md:mb-[24px] text-center md:text-left">{title || "404 - Không tìm thấy trang"}</h1>
              <p className="md:text-[1rem] text-[var(--text-gray)] mb-[36px] md:mb-[24px] font-medium text-center md:text-left">{desc || "Trang bạn đang tìm kiếm không tồn tại."}</p>
              <Link
                aria-label="back home"
                href="/"
                className="font-medium flex items-center justify-between px-[30px] md:max-w-[400px] border-solid border-[1px] border-[var(--text-gray)] rounded-[4px] text-[14px] 2xl:text-[16px] leading-[20px] 2xl:leading-[24px] text-[var(--text-black)] no-underline h-[34px] md:h-[60px] 2xl:h-[65px] hover:bg-[var(--secondary-color)] hover:border-[var(--secondary-color)] hover:text-white">
                <span>QUAY VỀ TRANG CHỦ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
