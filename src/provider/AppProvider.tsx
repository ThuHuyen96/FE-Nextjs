"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useCookies } from "next-client-cookies"
import { useEffect } from "react"
import { RecoilRoot } from "recoil"

const queryClient = new QueryClient()

type Props = {
  children: React.ReactNode
  isLogged?: boolean
  profile?: any
}

export const AppProvider: React.FC<Props> = ({ children, isLogged, profile }) => {
  const cookies = useCookies()

  useEffect(() => {
    if (!isLogged) {
      cookies.remove("logged_user")
      cookies.remove("access_token")
    } else {
      cookies.set("logged_user", JSON.stringify(profile), {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        path: "/",
        sameSite: "lax",
        // secure: true,
      })
    }
  }, [isLogged, profile])

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  )
}
