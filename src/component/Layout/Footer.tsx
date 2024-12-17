"use client"

import { footerItems } from "@/config/constant"
import Link from "next/link"


export default function Footer() {
  return (
    <div className="bg-[var(--color-dark-500)] text-[var(--color-light)] py-14">
      <div className="page-container">
        <ul className="list-none p-0 m-0 flex items-center flex-wrap gap-x-11 gap-y-4">
          {footerItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="text-[var(--color-light)] no-underline hover:underline text-xs">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
