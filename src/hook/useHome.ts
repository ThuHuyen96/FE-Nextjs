import { HomeApi } from "@/api/HomeApi"
import { useQuery } from "@tanstack/react-query"

export const useGetConfig = (enabled: boolean = true) =>
  useQuery({
    queryKey: ["home.config"],
    queryFn: async (): Promise<any> => {
      const res = await HomeApi.getConfig()
      return res.data
    },
    enabled,
    refetchOnWindowFocus: false,
  })
