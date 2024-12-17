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
    <div className={classNames("flex items-center justify-center bg-white md:bg-gray-100", className ? className : "h-[calc(100vh)]")}>
      <div className="page-container">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-[20px] md:text-[24px] font-medium md:font-semibold text-[var(--primary-color)] md:text-[var(--secondary-color)] mt-0 mb-[16px] md:mb-[24px] text-center md:text-left">
            {title || "404 - Notfound"}
          </h1>
          <p className="md:text-[1rem] text-[var(--text-gray)] mb-[36px] md:mb-[24px] font-medium text-center md:text-left">{desc || "Page not found"}</p>
          <Link
            aria-label="back home"
            href="/"
            className="no-underline font-medium flex items-center justify-center bg-gradient-to-r from-[var(--color-primary-300)] to-[var(--color-primary-400)] py-3 border-none rounded text-[var(--color-light)] w-72 h-14 text-lg hover:text-[var(--color-primary-500)]">
            <span>Back home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
