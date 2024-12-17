import { appConfig } from "@/config/app"
import { apiClient } from "./ApiClient"

const defaultApiClient = apiClient({
    baseURL: appConfig.apiUrl,
})

export { defaultApiClient }
