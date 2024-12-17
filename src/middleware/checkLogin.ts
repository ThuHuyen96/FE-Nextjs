import { get } from "lodash"
import { cookies } from "next/headers"
import { appConfig } from "@/config/app"

interface CheckLoginResult {
  accessToken: string | null
  profile: any
  logged: boolean
  status: number | null
  error: Error | null
}

const fetchProfile: any = async (accessToken?: string) => {
  try {
    const res = await fetch(`${appConfig.apiUrl}/auth/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Origin: appConfig.appUrl,
        Authorization: "Bearer " + accessToken,
      },
      next: { revalidate: 0 },
    })
    if (res.status === 403 || res.status === 401) {
      throw new Error("Access forbidden: Invalid or expired access token");
    }
    if (!res.ok) throw new Error("Failed to fetch profile data")
    return res.json()
  } catch (error) {
    return null
  }
}

export async function isLogged() {
  const accessToken = cookies().get("access_token")?.value

  if (!accessToken) {
    return {
      accessToken: null,
      profile: null,
      logged: false,
      status: 401,
      error: null,
    } as CheckLoginResult
  }

  try {
    const promiseProfile = await fetchProfile(accessToken)

    if (promiseProfile)
      return {
        accessToken: accessToken,
        profile: promiseProfile,
        logged: true,
        status: 200,
        error: null,
      } as CheckLoginResult
    else
      return {
        accessToken: null,
        profile: null,
        logged: false,
        status: 401,
        error: null,
      } as CheckLoginResult
  } catch (error) {
    return {
      accessToken: null,
      profile: null,
      logged: false,
      status: get(error, "response.status", null),
      error,
    } as CheckLoginResult
  }
}
