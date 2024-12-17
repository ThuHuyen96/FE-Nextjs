"use client"

import { Progress } from "antd"
import Image from "next/image"
import LineChart from "../Chart/LineChart"

export default function Banner() {
  return (
    <div className="bg-[var(--color-dark-600)] md:grid md:grid-cols-12">
      <div className="relative md:col-span-5 h-80">
        <Image
          src="/img/d01.jpg"
          alt=""
          width={540}
          height={316}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="object-cover"
        />
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Progress
            type="circle"
            percent={75}
            strokeColor="white"
            strokeWidth={2}
            format={(percent) => ``}
          />
        </div>
        <p className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--color-light)] font-inter flex items-end gap-1 my-0">
          <span className="text-lg">05/21</span>
          <span className="text-2xl">75%</span>
        </p>
      </div>
      <div className="md:col-span-7">
        <LineChart />
      </div>
    </div>
  )
}
