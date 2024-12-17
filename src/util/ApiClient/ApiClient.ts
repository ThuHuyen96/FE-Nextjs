import axios, { AxiosRequestConfig, AxiosInstance } from "axios"
import { handleResponseError, handleResponseSuccess } from "@/util/ApiClient/interceptors"
import { omit } from "lodash"

export type RequestOptionParam={ [ key: string ]: any }
export interface ApiClientConfig extends AxiosRequestConfig {
    bearerToken?: any
}

export interface RequestOptions extends RequestInit {
    baseURL?: string
    params?: RequestOptionParam
    data?: any
    method?: "GET"|"POST"|"PUT"|"DELETE"|"PATCH"
}

export function apiClient(config?: ApiClientConfig): AxiosInstance {
    const instance = axios.create(omit(config, "bearerToken"))

    if (config?.bearerToken) {
        instance.defaults.headers.common["Authorization"] = "Bearer " + config.bearerToken
    }

    instance.defaults.timeout = 60000

    instance.interceptors.response.use(handleResponseSuccess, handleResponseError)

    return instance
}
