import { defaultApiClient } from "@/util/ApiClient"

const getConfig = async () => {
  return await defaultApiClient.get("/configs")
}

export const HomeApi = {
  getConfig
}
