"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <button
        type="button"
        className={`bg-white fixed bottom-16 z-30 right-4 lg:right-8 xl:right-52 p-0 rounded-full shadow-md border-solid border w-12 h-12 border-[var(--color-gray-400)] cursor-pointer ${isVisible ? "block" : "hidden"}`}
        onClick={scrollToTop}>
        <Image
          src="/img/icon/top.svg"
          alt="Go to top"
          width={15}
          height={8}
        />
      </button>
    </>
  )
}
