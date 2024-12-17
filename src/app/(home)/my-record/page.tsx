"use client"

import LineChart from "@/component/Chart/LineChart"
import BoxItem from "@/component/MyRecord/BoxItem"
import Image from "next/image"
import React, { useMemo } from "react"

export default function MyRecordPage() {
  const fakeData = useMemo(() => {
    return [
      {
        title: "BODY RECORD",
        image: "/img/MyRecommend-1.jpg",
        sub: "自分のカラダの記録",
      },
      {
        title: "MY EXERCISE",
        image: "/img/MyRecommend-2.jpg",
        sub: "自分の運動の記録",
      },
      {
        title: "MY DIARY",
        image: "/img/MyRecommend-3.jpg",
        sub: "自分の日記",
      },
    ]
  }, [])
  return (
    <div className="page-container py-14">
      <div className="grid grid-cols-12 gap-6 md:gap-4 lg:gap-12">
        {fakeData.map((item, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-4 bg-[var(--color-primary-300)] p-6 text-[var(--color-light)]">
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt=""
                width={220}
                height={220}
                style={{ width: "100%", height: "100%" }}
                className="object-cover"
              />
              <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.6)]">
                <p className="font-inter mb-2 text-2xl m-0">{item.title}</p>
                <p className="font-light bg-[var(--color-primary-400)] w-4/5 h-6 flex justify-center items-center m-0">{item.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-14 bg-[var(--color-dark-600)]">
        <div className="text-[var(--color-light)] font-inter flex items-center gap-6 px-8 pt-6">
          <p className="m-0">
            BODY <br /> RECORD
          </p>
          <p className="text-xl m-0">2021.05.21</p>
        </div>
        <div className="h-80 px-2">
          <LineChart />
        </div>
        <div className="pb-4 gap-4 flex items-center text-[15px] px-8">
          <span className="bg-[var(--color-light)] text-[var(--color-primary-300)] rounded-2xl px-5 py-1">日</span>
          <span className="bg-[var(--color-light)] text-[var(--color-primary-300)] rounded-2xl px-5 py-1">週</span>
          <span className="bg-[var(--color-light)] text-[var(--color-primary-300)] rounded-2xl px-5 py-1">月</span>
          <span className="bg-[var(--color-primary-300)] text-[var(--color-light)] rounded-2xl px-5 py-1">年</span>
        </div>
      </div>
      <div className="bg-[var(--color-dark-600)]">
        <div className="text-[var(--color-light)] font-inter flex items-center gap-6 px-6 pt-6">
          <p className="m-0">
            MY <br /> EXERCISE
          </p>
          <p className="text-xl m-0">2021.05.21</p>
        </div>
        <div className="pb-6 pt-2">
          <div className="h-48 px-8 overflow-y-auto custom-scrollbar">
            <ul className="p-0 m-0 list-none grid grid-cols-12 md:gap-x-10">
              {[...Array(20)].map((_, index) => (
                <li
                  key={index}
                  className="border-b border-solid border-x-0 border-t-0 border-[var(--color-gray-400)] pt-2 pb-1 flex items-center justify-between col-span-12 md:col-span-6 text-[15px]">
                  <div className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-light)] mt-1.5"></span>
                    <div className="">
                      <p className="m-0 text-[var(--color-light)]">家事全般（立位・軽い）</p>
                      <p className="m-0 font-inter text-[var(--color-primary-300)]">26kcal</p>
                    </div>
                  </div>
                  <p className="m-0 text-lg font-inter text-[var(--color-primary-300)]">10 min</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <p className="m-0 font-inter text-[22px] mb-2">MY DIARY</p>
        <div className="grid grid-cols-12 gap-2 lg:gap-3">
          {[...Array(8)].map((_, index) => (
            <BoxItem className="col-span-6 md:col-span-4 lg:col-span-3" />
          ))}
        </div>
        <div className="pt-8 pb-4 text-center">
          <button
            type="button"
            className="cursor-pointer bg-gradient-to-r from-[var(--color-primary-300)] to-[var(--color-primary-400)] py-3 border-none rounded text-[var(--color-light)] w-72 h-14 text-lg hover:text-[var(--color-primary-500)]">
            自分の日記をもっと見る
          </button>
        </div>
      </div>
    </div>
  )
}
