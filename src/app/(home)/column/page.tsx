"use client"

import PostItem from "@/component/Column/PostItem"
import React, { useMemo } from "react"

export default function ColumnPage() {
  const fakeCate = [
    {
      title: "RECOMMENDED COLUMN",
      subtitle: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      subtitle: "ダイエット",
    },
    ,
    {
      title: "RECOMMENDED BEAUTY",
      subtitle: "美容",
    },
    ,
    {
      title: "RECOMMENDED HEALTH",
      subtitle: "健康",
    },
  ]

  const fakeData = useMemo(() => {
    let data: any[] = []
    for (let i = 0; i < 8; i++) {
      data.push({
        id: i,
        time: new Date(2024, 5, i),
        image: `/img/column-${i + 1}.jpg`,
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ",
        tags: ["魚料理", "和食", "DHA"],
      })
    }
    return data
  }, [])

  return (
    <div className="page-container py-14">
      <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-14">
        {fakeCate.map((item, index) => (
          <div
            className="col-span-6 md:col-span-3 px-4 py-6 bg-[var(--color-dark-600)] text-center"
            key={index}>
            <p className="m-0 font-inter text-[var(--color-primary-300)] text-xl lg:text-[22px]">{item?.title}</p>
            <span className="bg-[var(--color-light)] h-[1px] w-1/4 inline-block relative -top-1.5"></span>
            <p className="m-0 text-base lg:text-lg text-[var(--color-light)]">{item?.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="">
        <div className="grid grid-cols-12 gap-x-2 gap-y-5">
          {fakeData.map((item, index) => (
            <PostItem
              key={index}
              item={item}
              className="col-span-6 md:col-span-4 lg:col-span-3"
            />
          ))}
        </div>
        <div className="pt-8 pb-4 text-center">
          <button
            type="button"
            className="cursor-pointer bg-gradient-to-r from-[var(--color-primary-300)] to-[var(--color-primary-400)] py-3 border-none rounded text-[var(--color-light)] w-72 h-14 text-lg hover:text-[var(--color-primary-500)]">
            コラムをもっと見る
          </button>
        </div>
      </div>
    </div>
  )
}
