"use client"

import dayjs from "dayjs"
import Image from "next/image"

type IProps = {
  item: any
  className?: string
}

export default function PostItem({ item, className }: IProps) {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <Image
          src={item.image}
          alt=""
          width={234}
          height={144}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="aspect-[3/2]"
        />
        <p className="absolute bottom-0 left-0 z-10 bg-[var(--color-primary-300)] text-[var(--color-light)] font-inter my-0 p-2">{dayjs(item.time).format("YYYY.MM.DD HH:mm")}</p>
      </div>
      <div className="py-2">
        <p className="text-[15px] line-clamp-2 mt-0 mb-1">{item.title}</p>
        <ul className="p-0 m-0 list-none flex gap-4">
          {item.tags.map((tag: string, index: number) => (
            <li key={index} className="text-[var(--color-primary-400)] text-sm">#{tag}</li>
          ))}
        </ul>
        </div>
    </div>
  )
}
