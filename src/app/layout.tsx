import { Inter, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import Head from "next/head"
import { AppProvider } from "@/provider/AppProvider"
import { CookiesProvider } from "next-client-cookies/server"
import React from "react"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { Viewport } from "next"
import { AutoScrollTop } from "@/provider/AutoScrollTop"

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

export const dynamic = "force-dynamic"
export const revalidate = 0

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 2,
  viewportFit: "cover",
  userScalable: false
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fronts/w3/stylesheet.css"
        />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable}`}>
        <CookiesProvider>
          <AppProvider>
            <AntdRegistry>
              <AutoScrollTop />
              {children}
            </AntdRegistry>
          </AppProvider>
        </CookiesProvider>
      </body>
    </html>
  )
}
