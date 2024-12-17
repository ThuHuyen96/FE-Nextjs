"use client"

import { headerItems } from "@/config/constant"
import { Dropdown } from "antd"
import Image from "next/image"
import Link from "next/link"
import type { MenuProps } from 'antd';
import { useEffect, useState } from "react"

export default function Header() {
  const [open, setOpen] = useState<null | number>(null)
  const renderItems = (submenu: any): MenuProps['items'] => {
    let items: any = []
    submenu.map((item: any, index: number) => {
      items.push({
        label: (
          <Link href={item.url}>
            {item.label}
          </Link>
        ),
        key: index,
      })
    })
    return items
  }

  const handleOpen = (open: boolean, index: number) => {
    if (open) {
      setOpen(index)
    } else {
      setOpen(null)
    }
  }

  return (
    <div className="bg-[var(--color-dark-500)] text-[var(--color-light)] pb-2 pt-4">
      <div className="page-container">
        <div className="flex items-center justify-between">
          <h1 className="m-0">
            <Link
              href="/"
              className="inline-block w-36">
              <Image
                src="/logo.png"
                alt="logo"
                width={144}
                height={64}
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </h1>
          <div>
            <ul className="list-none p-0 m-0 flex items-center gap-4">
              {headerItems.map((item, index) => (
                <li
                  key={index}
                  className={`${!item.label ? "pl-4" : ""}`}>
                  {!item.label ? (
                    <Dropdown
                      menu={{ items: renderItems(item.submenu) }}
                      overlayClassName="custom-dropdown"
                      onOpenChange={(open) => handleOpen(open, index)}
                      trigger={["click"]}>
                      <Link
                        href="#"
                        scroll={false}
                        className="inline-block group">
                        {open === index ? (
                          <Image
                            src="/img/icon/icon_close.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className=""
                          />
                        ) : (
                          <Image
                            src="/img/icon/icon_menu.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className=""
                          />
                        )}
                      </Link>
                    </Dropdown>
                  ) : (
                    <Link
                      href={item.url}
                      className="inline-flex gap-2 items-center text-[var(--color-light)] no-underline hover:underline hover:text-[var(--color-primary-400)] relative">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={32}
                        height={32}
                      />

                      <span>{item.label}</span>
                      {item.noti && (
                        <span className="absolute top-0 left-6 w-4 h-4 bg-[var(--color-primary-500)] rounded-full text-[var(--color-light)] inline-flex justify-center items-center text-[10px]">
                          {item.noti}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
