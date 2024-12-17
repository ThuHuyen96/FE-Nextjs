"use client"

import { categories } from "@/config/constant"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

export default function DashboardContent() {
  const [cateSelected, setCateSelected] = useState<any>(null)
  const [data, setData] = useState<any[]>([])

  const fakeData = useMemo(() => {
    let data: any[] = []
    const images = ["/img/d01.jpg", "/img/d02.jpg", "/img/l01.jpg", "/img/l02.jpg", "/img/l03.jpg", "/img/m01.jpg", "/img/m02.jpg", "/img/m03.jpg"]
    for (let i = 0; i < 12; i++) {
      const cate = categories[Math.floor(Math.random() * 3)]
      data.push({
        id: i,
        time: `${Math.floor(Math.random() * 12) + 1}.${Math.floor(Math.random() * 31) + 1}`,
        cate: cate,
        image: i < 8 ? images[i] : images[i - 8],
      })
    }
    return data
  }, [])

  useEffect(() => {
    if (cateSelected) {
      setData(fakeData.filter((item) => item.cate.value === cateSelected.value))
    } else {
      setData(fakeData)
    }
  }, [cateSelected])

  return (
    <div className="py-4 page-container">
      <div className="py-6">
        <ul className="p-0 m-0 list-none flex gap-12 items-center justify-center flex-wrap">
          {categories.map((item) => (
            <li
              key={item.value}
              className="relative w-[136px] h-[136px] bg-white">
              <div
                className={`absolute inset-0 w-full h-full clip-hexagon bg-gradient-to-r ${
                  cateSelected?.value === item.value
                    ? "from-[var(--color-primary-400)] to-[var(--color-primary-500)]"
                    : "from-[var(--color-primary-300)] to-[var(--color-primary-400)]"
                }`}></div>
              <Link
                href="#"
                scroll={false}
                onClick={() => setCateSelected(item)}
                className="absolute w-full h-full top-0 left-0 inline-flex flex-col justify-center items-center no-underline font-inter">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={56}
                  height={56}
                />
                <span className="text-[var(--color-light)] text-xl">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-2 grid-cols-12">
        {data.map((item) => (
          <div
            key={item.id}
            className="col-span-6 md:col-span-4 lg:col-span-3 relative">
            <Image
              src={item.image}
              alt=""
              width={540}
              height={316}
              style={{
                width: "100%",
                height: "100%",
              }}
              className="object-cover"
            />
            <p className="absolute bottom-0 left-0 z-10 bg-[var(--color-primary-300)] text-[var(--color-light)] font-inter my-0 p-2">
              <span>{item.time}</span> <span>{item?.cate?.label || ""}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="py-8 text-center">
        <button
          type="button"
          className="cursor-pointer bg-gradient-to-r from-[var(--color-primary-300)] to-[var(--color-primary-400)] py-3 border-none rounded text-[var(--color-light)] w-72 h-14 text-lg hover:text-[var(--color-primary-500)]">
          記録をもっと見る
        </button>
      </div>
    </div>
  )
}
